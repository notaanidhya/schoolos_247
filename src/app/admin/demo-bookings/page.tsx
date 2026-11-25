'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Database, Download, RefreshCw, Trash2, CheckCircle2, Search, Plus } from 'lucide-react';
import styles from './admin.module.css';

interface Booking {
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

export default function DemoBookingsAdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/demo');
      const data = await res.json();
      if (data.success && data.bookings) {
        setBookings(data.bookings);
      }
    } catch (err) {
      console.error('Failed to load bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch('/api/demo', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: newStatus as Booking['status'] } : b))
        );
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking record?')) return;
    try {
      const res = await fetch(`/api/demo?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== id));
        if (selectedBooking?.id === id) setSelectedBooking(null);
      }
    } catch (err) {
      console.error('Failed to delete booking:', err);
    }
  };

  const exportCSV = () => {
    if (!bookings.length) return;
    const headers = [
      'ID',
      'Date',
      'Full Name',
      'School Name',
      'Role',
      'Phone',
      'Email',
      'City',
      'Student Strength',
      'Modules',
      'Existing Software',
      'Preferred Date',
      'Status',
    ];
    const rows = bookings.map((b) => [
      b.id,
      b.createdAt,
      `"${b.fullName.replace(/"/g, '""')}"`,
      `"${b.schoolName.replace(/"/g, '""')}"`,
      b.role,
      b.phone,
      b.email,
      b.city,
      b.studentCount,
      `"${(b.modules || []).join(', ')}"`,
      `"${b.existingSystem.replace(/"/g, '""')}"`,
      `"${b.preferredDate.replace(/"/g, '""')}"`,
      b.status,
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `school247_demo_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesFilter = filter === 'ALL' || b.status === filter;
    const matchesSearch =
      b.schoolName.toLowerCase().includes(search.toLowerCase()) ||
      b.fullName.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search);
    return matchesFilter && matchesSearch;
  });

  const countNew = bookings.filter((b) => b.status === 'NEW').length;
  const countScheduled = bookings.filter((b) => b.status === 'SCHEDULED').length;
  const countCompleted = bookings.filter((b) => b.status === 'COMPLETED').length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Database size={24} color="#2563EB" />
              <h1>Demo Bookings Database</h1>
            </div>
            <p>SQLite Database connected at <code>data/school247.db</code></p>
          </div>
          <div className={styles.actions}>
            <button onClick={fetchBookings} className="btn btn-secondary btn--sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={exportCSV} className="btn btn-secondary btn--sm">
              <Download size={14} /> Export CSV
            </button>
            <Link href="/book-demo" className="btn btn-primary btn--sm">
              <Plus size={14} /> New Booking
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsBar}>
          <div className={styles.statCard}>
            <span className={styles.statVal}>{bookings.length}</span>
            <span className={styles.statLabel}>Total Bookings</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statVal} style={{ color: '#2563EB' }}>{countNew}</span>
            <span className={styles.statLabel}>New Inquiries</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statVal} style={{ color: '#7c3aed' }}>{countScheduled}</span>
            <span className={styles.statLabel}>Scheduled</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statVal} style={{ color: '#059669' }}>{countCompleted}</span>
            <span className={styles.statLabel}>Completed</span>
          </div>
        </div>

        {/* Table Card */}
        <div className={styles.tableCard}>
          <div className={styles.toolbar}>
            <div className={styles.filterTabs}>
              {['ALL', 'NEW', 'CONTACTED', 'SCHEDULED', 'COMPLETED', 'CANCELLED'].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`${styles.filterBtn} ${filter === s ? styles.filterBtnActive : ''}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search size={16} color="#64748B" />
              <input
                type="text"
                placeholder="Search school, contact, phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.tableWrap}>
            {loading ? (
              <div className={styles.emptyState}>Loading database records...</div>
            ) : filteredBookings.length === 0 ? (
              <div className={styles.emptyState}>
                <h3>No Demo Bookings Found</h3>
                <p>Submit a booking on the <Link href="/book-demo" style={{ color: 'var(--blue)' }}>Book Demo page</Link> to see it appear here.</p>
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>School & City</th>
                    <th>Contact Person</th>
                    <th>Students</th>
                    <th>Modules</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((b) => (
                    <tr key={b.id}>
                      <td style={{ whiteSpace: 'nowrap', color: 'var(--muted)', fontSize: '0.85rem' }}>
                        {new Date(b.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                      <td>
                        <strong>{b.schoolName}</strong>
                        {b.city && <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{b.city}</div>}
                      </td>
                      <td>
                        <div>{b.fullName}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                          <a href={`tel:${b.phone}`} style={{ color: 'inherit' }}>{b.phone}</a> • <a href={`mailto:${b.email}`} style={{ color: 'inherit' }}>{b.email}</a>
                        </div>
                      </td>
                      <td>{b.studentCount}</td>
                      <td>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {(b.modules || []).slice(0, 2).join(', ')}
                          {(b.modules || []).length > 2 && ` +${b.modules.length - 2} more`}
                        </span>
                      </td>
                      <td>
                        <select
                          value={b.status}
                          onChange={(e) => handleStatusChange(b.id, e.target.value)}
                          className={`${styles.statusSelect} ${styles[`status${b.status}`]}`}
                        >
                          <option value="NEW">NEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="SCHEDULED">SCHEDULED</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="CANCELLED">CANCELLED</option>
                        </select>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => setSelectedBooking(b)}
                            className="btn btn-secondary btn--sm"
                            style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleDelete(b.id)}
                            className="btn btn-secondary btn--sm"
                            style={{ padding: '4px 8px', color: '#ef4444' }}
                            title="Delete"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Modal for detail view */}
        {selectedBooking && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '20px',
            }}
            onClick={() => setSelectedBooking(null)}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '32px',
                maxWidth: '560px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: 'var(--shadow-xl)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '4px' }}>
                    {selectedBooking.schoolName}
                  </h2>
                  <span className={`${styles.statusBadge} ${styles[`status${selectedBooking.status}`]}`}>
                    {selectedBooking.status}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  style={{ fontSize: '1.5rem', cursor: 'pointer', border: 'none', background: 'none' }}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px', fontSize: '0.9rem' }}>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Contact Person</div>
                  <strong>{selectedBooking.fullName}</strong> ({selectedBooking.role})
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>City / Region</div>
                  <strong>{selectedBooking.city || 'Not provided'}</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Phone</div>
                  <a href={`tel:${selectedBooking.phone}`}>{selectedBooking.phone}</a>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Email</div>
                  <a href={`mailto:${selectedBooking.email}`}>{selectedBooking.email}</a>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Student Strength</div>
                  <strong>{selectedBooking.studentCount} students</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Current Software</div>
                  <strong>{selectedBooking.existingSystem}</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Preferred Demo Time</div>
                  <strong>{selectedBooking.preferredDate}</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>Submitted At</div>
                  <span>{new Date(selectedBooking.createdAt).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '6px' }}>Requested Modules</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {(selectedBooking.modules || []).map((m) => (
                    <span
                      key={m}
                      style={{
                        background: 'var(--blue-50)',
                        color: 'var(--blue)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {selectedBooking.notes && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '4px' }}>Additional Notes</div>
                  <p style={{ background: '#f8fafc', padding: '12px', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--text)' }}>
                    {selectedBooking.notes}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button onClick={() => setSelectedBooking(null)} className="btn btn-secondary btn--sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
