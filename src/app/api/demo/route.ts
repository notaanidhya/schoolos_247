import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      schoolName,
      role,
      phone,
      email,
      city,
      studentCount,
      modules,
      existingSystem,
      preferredDate,
      notes,
    } = body;

    // Basic validation
    if (!fullName || !schoolName || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required contact information (Name, School, Phone, Email).' },
        { status: 400 }
      );
    }

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      fullName,
      schoolName,
      role: role || 'Administrator',
      phone,
      email,
      city: city || 'Not specified',
      studentCount: studentCount || '500-1000',
      modules: modules || [],
      existingSystem: existingSystem || 'Spreadsheets / Manual',
      preferredDate: preferredDate || 'Earliest available',
      notes: notes || '',
      status: 'NEW',
    };

    // Store lead to a local data file for persistence
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, 'leads.json');
      let currentLeads = [];
      if (fs.existsSync(leadsFile)) {
        try {
          currentLeads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'));
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.push(leadRecord);
      fs.writeFileSync(leadsFile, JSON.stringify(currentLeads, null, 2), 'utf-8');
    } catch (fsErr) {
      console.warn('Could not write lead to data/leads.json:', fsErr);
    }

    console.log('[SchoolOS Lead Captured]:', leadRecord);

    return NextResponse.json(
      {
        success: true,
        message: 'Demo booking received successfully! Our school specialist will reach out shortly.',
        leadId: leadRecord.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing demo request.' },
      { status: 500 }
    );
  }
}
