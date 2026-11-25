import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

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

let dbInstance: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!dbInstance) {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const dbPath = path.join(dataDir, 'schoolos.db');
    dbInstance = new Database(dbPath);

    // Initialize Schema
    dbInstance.exec(`
      CREATE TABLE IF NOT EXISTS demo_bookings (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        full_name TEXT NOT NULL,
        school_name TEXT NOT NULL,
        role TEXT,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        city TEXT,
        student_count TEXT,
        modules TEXT,
        existing_system TEXT,
        preferred_date TEXT,
        notes TEXT,
        status TEXT DEFAULT 'NEW',
        updated_at TEXT
      );
      CREATE INDEX IF NOT EXISTS idx_demo_bookings_created_at ON demo_bookings(created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_demo_bookings_status ON demo_bookings(status);
    `);
  }
  return dbInstance;
}

export function createDemoBooking(data: Omit<DemoBooking, 'id' | 'createdAt' | 'status'> & { id?: string }): DemoBooking {
  const db = getDatabase();
  const id = data.id || `demo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const createdAt = new Date().toISOString();
  const status = 'NEW';
  const modulesJson = JSON.stringify(data.modules || []);

  const stmt = db.prepare(`
    INSERT INTO demo_bookings (
      id, created_at, full_name, school_name, role, phone, email,
      city, student_count, modules, existing_system, preferred_date,
      notes, status, updated_at
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, ?
    )
  `);

  stmt.run(
    id,
    createdAt,
    data.fullName,
    data.schoolName,
    data.role || 'Principal / School Head',
    data.phone,
    data.email,
    data.city || '',
    data.studentCount || '500-1000',
    modulesJson,
    data.existingSystem || 'Spreadsheets / Registers',
    data.preferredDate || 'Earliest Available',
    data.notes || '',
    status,
    createdAt
  );

  return {
    id,
    createdAt,
    fullName: data.fullName,
    schoolName: data.schoolName,
    role: data.role || 'Principal / School Head',
    phone: data.phone,
    email: data.email,
    city: data.city || '',
    studentCount: data.studentCount || '500-1000',
    modules: data.modules || [],
    existingSystem: data.existingSystem || 'Spreadsheets / Registers',
    preferredDate: data.preferredDate || 'Earliest Available',
    notes: data.notes || '',
    status: 'NEW',
    updatedAt: createdAt,
  };
}

export function getAllDemoBookings(): DemoBooking[] {
  const db = getDatabase();
  const stmt = db.prepare(`SELECT * FROM demo_bookings ORDER BY created_at DESC`);
  const rows = stmt.all() as any[];

  return rows.map((r) => ({
    id: r.id,
    createdAt: r.created_at,
    fullName: r.full_name,
    schoolName: r.school_name,
    role: r.role,
    phone: r.phone,
    email: r.email,
    city: r.city,
    studentCount: r.student_count,
    modules: (() => {
      try {
        return JSON.parse(r.modules || '[]');
      } catch {
        return [];
      }
    })(),
    existingSystem: r.existing_system,
    preferredDate: r.preferred_date,
    notes: r.notes,
    status: r.status,
    updatedAt: r.updated_at,
  }));
}

export function updateDemoBookingStatus(id: string, status: DemoBooking['status']): boolean {
  const db = getDatabase();
  const stmt = db.prepare(`
    UPDATE demo_bookings
    SET status = ?, updated_at = ?
    WHERE id = ?
  `);
  const result = stmt.run(status, new Date().toISOString(), id);
  return result.changes > 0;
}

export function deleteDemoBooking(id: string): boolean {
  const db = getDatabase();
  const stmt = db.prepare(`DELETE FROM demo_bookings WHERE id = ?`);
  const result = stmt.run(id);
  return result.changes > 0;
}
