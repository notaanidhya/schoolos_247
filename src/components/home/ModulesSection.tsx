'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './ModulesSection.module.css';

interface ModuleData {
  id: string;
  name: string;
  badge?: string;
  badgeType?: 'ai' | 'new' | 'standard';
  title: string;
  desc: string;
  features: string[];
  mockData: {
    stat1: { label: string; val: string };
    stat2: { label: string; val: string };
    highlight: string;
    actionText: string;
  };
}

const MODULES: ModuleData[] = [
  {
    id: 'school-admin',
    name: 'School Administration',
    title: 'Centralize records, staff directory & institutional control',
    desc: 'Eliminate scattered spreadsheets. Maintain 360-degree student profiles, staff allocations, class divisions, and audit-ready academic calendars.',
    features: [
      'Comprehensive student profiles & digital documents',
      'Staff roster with role-based permissions & credentials',
      'Class & section management with real-time capacity',
      'Consolidated management reports and compliance exports',
    ],
    mockData: {
      stat1: { label: 'Active Students', val: '1,420' },
      stat2: { label: 'Staff Count', val: '68' },
      highlight: 'Profile integrity: 99.4% complete',
      actionText: 'Export CBSE / ICSE Report',
    },
  },
  {
    id: 'admissions',
    name: 'Admissions Pipeline',
    badge: 'Popular',
    badgeType: 'new',
    title: 'Capture enquiries, track follow-ups & boost conversions',
    desc: 'Never lose a prospective parent lead. Track inquiry pipelines from WhatsApp, walk-ins, and website directly into structured interview and admission stages.',
    features: [
      'Multi-channel enquiry capture (Web, Walk-in, WhatsApp)',
      'Automated parent follow-up reminders for front office',
      'Interview & entrance assessment scheduling',
      'Real-time seat conversion funnel by grade',
    ],
    mockData: {
      stat1: { label: 'New Enquiries', val: '84' },
      stat2: { label: 'Conversion Rate', val: '42%' },
      highlight: '12 interviews scheduled for tomorrow',
      actionText: 'Schedule Parent Interaction',
    },
  },
  {
    id: 'attendance',
    name: 'Attendance & Leave',
    title: 'Fast daily roll call with instant parent SMS/WhatsApp',
    desc: 'Teachers complete attendance in under 60 seconds per section. Parents receive instant notification of unexcused absences, and digital leave requests route directly to class teachers.',
    features: [
      '1-tap class attendance on mobile or web',
      'Automated parent notification for unexcused absence',
      'Digital parent leave applications with medical uploads',
      'Class teacher single-click approval workflow',
    ],
    mockData: {
      stat1: { label: 'Today Attendance', val: '96.2%' },
      stat2: { label: 'Pending Leaves', val: '3' },
      highlight: '948/985 students marked present',
      actionText: 'Notify 37 Absent Guardians',
    },
  },
  {
    id: 'parent-app',
    name: 'Parent Mobile App',
    badge: 'High Impact',
    badgeType: 'standard',
    title: 'A delightful school experience right in parents’ pockets',
    desc: 'Build trust with modern parents. Daily homework updates, attendance timelines, exam timetables, fee receipts, and direct teacher query windows in an intuitive mobile app.',
    features: [
      'Child timeline: daily activities, marks & announcements',
      'Secure parent-child verification (verified OTP/ID)',
      'Digital fee payment receipts & upcoming dues',
      'Structured teacher messaging within school-defined hours',
    ],
    mockData: {
      stat1: { label: 'Parent Adoption', val: '94%' },
      stat2: { label: 'Avg Rating', val: '4.8 ★' },
      highlight: 'Homework notification read by 92% of parents',
      actionText: 'Send Push Circular',
    },
  },
  {
    id: 'fees',
    name: 'Fees & Finance',
    title: 'Automate fee schedules, digital receipts & defaulter tracking',
    desc: 'Simplify fee collections across terms, transport, and extracurriculars. Provide parents with UPI/card payments and reduce defaulter rates with gentle automated reminders.',
    features: [
      'Flexible installment structures & customized concessions',
      'Real-time student ledger with automated receipt generation',
      'Automated WhatsApp/SMS reminders before due dates',
      'Single-dashboard revenue and outstanding balance view',
    ],
    mockData: {
      stat1: { label: 'Collected This Term', val: '₹48.2L' },
      stat2: { label: 'Overdue Dues', val: '₹3.4L' },
      highlight: '91% on-time fee recovery this quarter',
      actionText: 'Send Due Date Reminders',
    },
  },
  {
    id: 'academics',
    name: 'Academics & Exams',
    title: 'Homework, exam mark entry & one-click report cards',
    desc: 'Equip teachers with simple tools to enter assessment marks, track syllabus progress, formulate report cards matching school board guidelines, and share constructive remarks.',
    features: [
      'Digital homework distribution with submission tracker',
      'Exam schedule publication and hall ticket generation',
      'Gradebook & mark entry with custom grading scales',
      'Beautiful automated report cards ready for download',
    ],
    mockData: {
      stat1: { label: 'Exams Scheduled', val: 'Term 2' },
      stat2: { label: 'Report Cards Ready', val: '100%' },
      highlight: 'CBSE 8-point grading rubric validated',
      actionText: 'Generate Class 10 Reports',
    },
  },
  {
    id: 'communication',
    name: 'Communication Hub',
    title: 'Emergency circulars, class updates & verified messaging',
    desc: 'Replace chaotic WhatsApp groups with school-governed communication. Send rich broadcast circulars with read receipts, urgent SMS alerts, and targeted class announcements.',
    features: [
      'School-wide official broadcast channel',
      'Class-specific circulars with acknowledgment receipts',
      'Urgent weather / emergency broadcast alerts',
      'Zero personal phone number exposure for teachers',
    ],
    mockData: {
      stat1: { label: 'Broadcast Reach', val: '99.1%' },
      stat2: { label: 'Read Receipts', val: '1,280' },
      highlight: 'Annual Day circular acknowledged by 88% parents',
      actionText: 'Compose Official Circular',
    },
  },
  {
    id: 'ai-ops',
    name: 'AI Operations Layer',
    badge: 'AI-Powered',
    badgeType: 'ai',
    title: 'Intelligent automation and natural language administrative search',
    desc: 'The defining differentiator of SchoolOS. Human-in-the-loop AI handles repetitive parent queries, drafts administrative circulars, and lets management query metrics using natural language.',
    features: [
      '24/7 AI parent FAQ concierge (admissions, timings, events)',
      'Natural language query: "Show fee collection for Class 8 vs Class 9"',
      'Automated administrative draft generation with human signoff',
      'Intelligent student attendance pattern anomaly detection',
    ],
    mockData: {
      stat1: { label: 'Admin Hours Saved', val: '14 hrs/wk' },
      stat2: { label: 'AI Resolution', val: '72%' },
      highlight: 'Parent enquiry answered in 4 seconds',
      actionText: 'Query School Data with AI',
    },
  },
];

export default function ModulesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = MODULES[activeTab];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.pulseDot} />
            <span>MODULAR ARCHITECTURE</span>
          </div>
          <h2 className={styles.headline}>
            Comprehensive modules designed for modern Indian schools
          </h2>
          <p className={styles.sub}>
            Deploy what your school needs today. Seamlessly activate additional
            workflows as your administrative requirements grow.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNav}>
          {MODULES.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(idx)}
              className={`${styles.tabBtn} ${activeTab === idx ? styles.tabBtnActive : ''}`}
            >
              <span>{m.name}</span>
              {m.badge && (
                <span
                  className={`${styles.tabBadge} ${
                    m.badgeType === 'ai'
                      ? styles.badgeAi
                      : m.badgeType === 'new'
                      ? styles.badgeNew
                      : styles.badgeStd
                  }`}
                >
                  {m.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Module Showcase Card */}
        <div className={styles.showcaseCard}>
          <div className={styles.showcaseContent}>
            <div className={styles.categoryPill}>Module {activeTab + 1} of 8</div>
            <h3 className={styles.moduleTitle}>{current.title}</h3>
            <p className={styles.moduleDesc}>{current.desc}</p>

            <ul className={styles.featureList}>
              {current.features.map((feat, i) => (
                <li key={i} className={styles.featureItem}>
                  <svg
                    className={styles.checkIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className={styles.ctaRow}>
              <Link href="/book-demo" className="btn btn-primary">
                Request Demo for {current.name}
              </Link>
              <Link href="/features" className="btn btn-outline">
                Explore All Features →
              </Link>
            </div>
          </div>

          {/* Interactive Mock Dashboard Preview */}
          <div className={styles.showcasePreview}>
            <div className={styles.previewWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <div className={styles.windowTitle}>
                  SchoolOS — {current.name} Console
                </div>
                <span className={styles.liveTag}>LIVE SYNC</span>
              </div>

              <div className={styles.windowBody}>
                <div className={styles.metricGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricLabel}>{current.mockData.stat1.label}</div>
                    <div className={styles.metricValue}>{current.mockData.stat1.val}</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricLabel}>{current.mockData.stat2.label}</div>
                    <div className={styles.metricValue}>{current.mockData.stat2.val}</div>
                  </div>
                </div>

                <div className={styles.statusBanner}>
                  <span className={styles.statusIndicator} />
                  <span>{current.mockData.highlight}</span>
                </div>

                <div className={styles.mockActions}>
                  <div className={styles.actionBtnPrimary}>{current.mockData.actionText}</div>
                  <div className={styles.actionBtnSecondary}>View Full Logs</div>
                </div>

                <div className={styles.auditStamp}>
                  Verified by SchoolOS Role-Based Security • DPDP Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
