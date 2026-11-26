import { NextResponse } from 'next/server';
import {
  createDemoBooking,
  getAllDemoBookings,
  updateDemoBookingStatus,
  deleteDemoBooking,
  DemoBooking,
} from '@/lib/db';

export async function GET() {
  try {
    const bookings = await getAllDemoBookings();
    return NextResponse.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error('Error fetching demo bookings:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve demo bookings from database.' },
      { status: 500 }
    );
  }
}

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

    if (!fullName || !schoolName || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required contact information (Name, School, Phone, Email).' },
        { status: 400 }
      );
    }

    const newBooking = await createDemoBooking({
      fullName,
      schoolName,
      role: role || 'Principal / School Head',
      phone,
      email,
      city: city || '',
      studentCount: studentCount || '500-1000',
      modules: modules || [],
      existingSystem: existingSystem || 'Spreadsheets / Registers',
      preferredDate: preferredDate || 'Earliest available',
      notes: notes || '',
    });

    console.log('[School247 Database Record Saved]:', newBooking.id, newBooking.schoolName);

    return NextResponse.json(
      {
        success: true,
        message: 'Demo booking saved to database successfully!',
        booking: newBooking,
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

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Both id and status are required for updating booking.' },
        { status: 400 }
      );
    }

    const updated = await updateDemoBookingStatus(id, status as DemoBooking['status']);
    if (!updated) {
      return NextResponse.json(
        { error: `Booking with ID ${id} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Booking ${id} status updated to ${status}.`,
    });
  } catch (error) {
    console.error('Error updating demo booking status:', error);
    return NextResponse.json(
      { error: 'Internal server error while updating booking status.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Booking id query parameter is required.' },
        { status: 400 }
      );
    }

    const deleted = await deleteDemoBooking(id);
    if (!deleted) {
      return NextResponse.json(
        { error: `Booking with ID ${id} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Booking ${id} deleted successfully.`,
    });
  } catch (error) {
    console.error('Error deleting demo booking:', error);
    return NextResponse.json(
      { error: 'Internal server error while deleting booking.' },
      { status: 500 }
    );
  }
}
