import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './features.module.css';

export const metadata: Metadata = {
  title: 'All Features & Modules — SchoolOS',
  description:
    'Comprehensive product features of SchoolOS: School Administration, Admissions, Attendance, Parent App, Fees & Finance, Academics, Communication, and AI Operations.',
};

const MODULE_LIST = [
  {
    num: '01',
    id: 'school-administration',
    title: 'School Administration & Student Directory',
    tagline: 'The centralized backbone for institutional control and records',
    desc: 'Consolidate student dossiers, staff credentials, section rosters, and regulatory compliance into a unified system with granular role-based permissions.',
    items: [
      'Comprehensive 360° student record with medical, guardian & academic history',
      'Teacher & staff directory with qualification tracking and role assignments',
      'Class & section capacity management with auto-roll forward across terms',
      'CBSE, ICSE, and State Board format report exports and certificate generation',
      'Granular role-based security: Trustee, Principal, Clerk, Teacher, Parent',
      'Audit log tracking every record change for administrative accountability',
    ],
  },
  {
    num: '02',
    id: 'admissions-management',
    title: 'Admissions & Lead Management Pipeline',
    tagline: 'Track walk-ins, website leads, and inquiries from interest to enrollment',
    desc: 'Eliminate lost parent inquiries. Empower your front desk with automated follow-up reminders, interview schedules, and real-time seat occupancy funnels.',
    items: [
      'Omnichannel lead capture: website forms, front desk walk-ins, phone calls',
      'Visual stage pipeline: Inquiry → Document Verification → Assessment → Fee Paid',
      'Automated parent WhatsApp/SMS reminders for entrance interactions',
      'Real-time seat conversion funnel analysis by class and stream',
      'Student admission numbering with custom prefix formats',
      'Document repository for birth certificates, transfer certificates & ID proofs',
    ],
  },
  {
    num: '03',
    id: 'attendance-leave',
    title: 'Daily Attendance & Digital Leave',
    tagline: '60-second roll calls with instant guardian absence notifications',
    desc: 'Equip teachers to mark class roll call in seconds. Immediately trigger automated SMS/WhatsApp alerts for unexcused absences and manage digital leave requests without paper slips.',
    items: [
      '1-tap roll call interface designed for smartphones and classroom tablets',
      'Automatic instant SMS/WhatsApp alerts sent to parents of absent students',
      'Parent digital leave application with medical attachment uploads',
      'Class teacher 1-click approval or rejection with custom remarks',
      'Monthly attendance percentage calculations and shortage warning letters',
      'Staff biometric and geo-fenced mobile attendance tracking',
    ],
  },
  {
    num: '04',
    id: 'parent-mobile-app',
    title: 'Parent Mobile Application',
    tagline: 'A modern, verified smartphone portal for your school community',
    desc: 'Build lasting parent trust. Put homework, fee receipts, exam timetables, attendance history, and teacher query windows directly in parents’ hands on Android and web portal.',
    items: [
      'Secure parent-student pairing via phone number verification',
      'Daily homework board with teacher instructions and reference attachments',
      'Real-time attendance calendar with green/red status indicators',
      'Fee payment status, installment schedules, and downloadable tax receipts',
      'Official school circulars and announcements with read confirmations',
      'Governed teacher messaging during designated working hours',
    ],
  },
  {
    num: '05',
    id: 'fees-finance',
    title: 'Fees & Finance Management',
    tagline: 'Flexible installments, instant UPI collections, and automated recovery',
    desc: 'Simplify institutional cash flow. Configure complex fee categories, send polite automated reminders, and allow parents to pay via UPI or Net Banking with zero manual ledger reconciliation.',
    items: [
      'Custom fee structures: tuition, transport by route, lab, extracurriculars',
      'Sibling discounts, scholarship concessions, and staff fee waivers',
      'Direct online fee payments via UPI (PhonePe, GPay, Paytm) and Cards',
      'Automated SMS/WhatsApp reminders before and on due dates to reduce defaulters',
      'Instant digital receipts generated with unique receipt numbers and QR codes',
      'Daily collection reconciliation and outstanding dues ledger for accountants',
    ],
  },
  {
    num: '06',
    id: 'academics-classroom',
    title: 'Academics & Examination Engine',
    tagline: 'Homework workflows, exam scheduling, and automated report cards',
    desc: 'Streamline the entire academic cycle. Plan academic calendars, distribute syllabus milestones, record exam marks, and generate board-compliant report cards in seconds.',
    items: [
      'Daily homework distribution with submission deadlines and file uploads',
      'Timetable manager with teacher clash detection and substitute allocation',
      'Term-wise examination scheduling and automated hall ticket generation',
      'Fast mark entry grids for teachers with auto-calculation of grades and CGPA',
      'Custom report card templates aligned with CBSE, ICSE, or State board rubrics',
      'Teacher remarks bank and behavioral assessment parameters',
    ],
  },
  {
    num: '07',
    id: 'communication-hub',
    title: 'School Communication Hub',
    tagline: 'Replace unmonitored WhatsApp chaos with verified institutional broadcasts',
    desc: 'Protect teacher privacy while keeping parents informed. Send rich multimedia circulars with delivery receipts, emergency broadcast alerts, and structured class updates.',
    items: [
      'Official school-wide broadcast channel with guaranteed delivery',
      'Class and section specific announcements with document attachments',
      'Emergency broadcast alerts for weather closures or transport delays',
      'Parent read acknowledgment tracking so management knows who received notices',
      'Zero teacher phone number exposure—all communications occur in-platform',
      'Multi-language notice support for diverse parent communities',
    ],
  },
  {
    num: '08',
    id: 'ai-operations',
    title: 'AI-Powered School Operations',
    tagline: 'Assisted automation with strict human-in-the-loop oversight',
    desc: 'The next generation of educational administration. AI answers routine parent admission questions, drafts official circulars, and empowers principals to query school data in natural language.',
    items: [
      '24/7 AI Parent FAQ Concierge for admission criteria, fee dates, and school policies',
      'Natural-language management queries (e.g., "List students with <75% attendance")',
      'AI draft generator for parent notices, holiday greetings, and event circulars',
      'Attendance and fee anomaly detection alerting leadership to unusual patterns',
      'Strict human-in-the-loop controls: AI cannot publish notices without administrative signoff',
      'Privacy boundary: no student confidential health or disciplinary data shared with LLMs',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBadge}>COMPLETE MODULE BREAKDOWN</div>
          <h1 className={styles.heroTitle}>Everything your school needs to operate with excellence</h1>
          <p className={styles.heroSub}>
            Explore all eight interconnected modules of SchoolOS. Designed to reduce administrative friction,
            connect families, and give leadership complete operational confidence.
          </p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          {/* Quick jump module navigation */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
            {MODULE_LIST.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="btn btn-secondary btn--sm"
                style={{ fontSize: '0.82rem', padding: '6px 14px' }}
              >
                {m.title.split('&')[0].trim()}
              </a>
            ))}
          </div>

          <div className={styles.moduleGrid}>
            {MODULE_LIST.map((mod) => (
              <div key={mod.id} id={mod.id} className={styles.moduleCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.numBadge}>{mod.num}</div>
                  <h2 className={styles.moduleHeading}>{mod.title}</h2>
                  <div className={styles.tagline}>{mod.tagline}</div>
                </div>
                <p className={styles.desc}>{mod.desc}</p>
                <div className={styles.itemsHeader}>Key Capabilities:</div>
                <ul className={styles.checklist}>
                  {mod.items.map((item, idx) => (
                    <li key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardFooter}>
                  <Link href={`/book-demo?module=${mod.id}`} className="btn btn-secondary">
                    Schedule Demo for this Module →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Ready to see these modules in action?</h2>
            <p>Our specialists will walk you through a tailored demo featuring your school’s exact workflows.</p>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Book a Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
