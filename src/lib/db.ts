import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface DemoBooking {
  id: string;
  createdAt: string;
  fullName: string;
  schoolName: string;
  role: string;
  phone: string;
  email: string;
  city: string;
  studentCount: string;
  modules: string[];
  existingSystem: string;
  preferredDate: string;
  notes: string;
  status: 'NEW' | 'CONTACTED' | 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  updatedAt?: string;
}

interface DemoBookingRow {
  id: string;
  created_at: string;
  full_name: string;
  school_name: string;
  role: string | null;
  phone: string;
  email: string;
  city: string | null;
  student_count: string | null;
  modules: string[] | string | null;
  existing_system: string | null;
  preferred_date: string | null;
  notes: string | null;
  status: DemoBooking['status'];
  updated_at: string | null;
}

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error(
        'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables'
      );
    }

    supabaseClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return supabaseClient;
}

function parseModules(rawModules: string[] | string | null): string[] {
  if (Array.isArray(rawModules)) {
    return rawModules;
  }
  if (typeof rawModules === 'string') {
    try {
      const parsed = JSON.parse(rawModules || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function mapRowToBooking(row: DemoBookingRow): DemoBooking {
  return {
    id: row.id,
    createdAt: row.created_at,
    fullName: row.full_name,
    schoolName: row.school_name,
    role: row.role || 'Principal / School Head',
    phone: row.phone,
    email: row.email,
    city: row.city || '',
    studentCount: row.student_count || '500-1000',
    modules: parseModules(row.modules),
    existingSystem: row.existing_system || 'Spreadsheets / Registers',
    preferredDate: row.preferred_date || 'Earliest Available',
    notes: row.notes || '',
    status: row.status,
    updatedAt: row.updated_at || undefined,
  };
}

export async function createDemoBooking(
  data: Omit<DemoBooking, 'id' | 'createdAt' | 'status'> & { id?: string }
): Promise<DemoBooking> {
  const supabase = getSupabaseClient();
  const id = data.id || `demo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const createdAt = new Date().toISOString();
  const status: DemoBooking['status'] = 'NEW';

  const rowPayload = {
    id,
    created_at: createdAt,
    full_name: data.fullName,
    school_name: data.schoolName,
    role: data.role || 'Principal / School Head',
    phone: data.phone,
    email: data.email,
    city: data.city || '',
    student_count: data.studentCount || '500-1000',
    modules: data.modules || [],
    existing_system: data.existingSystem || 'Spreadsheets / Registers',
    preferred_date: data.preferredDate || 'Earliest Available',
    notes: data.notes || '',
    status,
    updated_at: createdAt,
  };

  const { data: inserted, error } = await supabase
    .from('demo_bookings')
    .insert(rowPayload)
    .select('*')
    .single();

  if (error) {
    throw new Error(`Failed to create demo booking: ${error.message}`);
  }

  return mapRowToBooking(inserted as DemoBookingRow);
}

export async function getAllDemoBookings(): Promise<DemoBooking[]> {
  const supabase = getSupabaseClient();
  const { data: rows, error } = await supabase
    .from('demo_bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch demo bookings: ${error.message}`);
  }

  return ((rows || []) as DemoBookingRow[]).map(mapRowToBooking);
}

export async function updateDemoBookingStatus(
  id: string,
  status: DemoBooking['status']
): Promise<boolean> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('demo_bookings')
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select('id');

  if (error) {
    throw new Error(`Failed to update demo booking status: ${error.message}`);
  }

  return Array.isArray(data) && data.length > 0;
}

export async function deleteDemoBooking(id: string): Promise<boolean> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('demo_bookings')
    .delete()
    .eq('id', id)
    .select('id');

  if (error) {
    throw new Error(`Failed to delete demo booking: ${error.message}`);
  }

  return Array.isArray(data) && data.length > 0;
}
