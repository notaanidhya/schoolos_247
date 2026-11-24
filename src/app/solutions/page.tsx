import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './solutions.module.css';

export const metadata: Metadata = {
  title: 'Solutions for School Stakeholders — SchoolOS',
  description:
    'Tailored school operations solutions for School Owners, Principals, Administrators, Teachers, and Parents.',
};

const AUDIENCES = [
  {
    slug: 'school-owners',
    role: 'School Owners & Trustees',
    title: 'Centralized operational visibility, financial control & compliance',
    desc: 'Get an executive birds-eye view of student admissions, fee collection health across terms, campus attendance, and regulatory audit compliance.',
    features: [
      'Consolidated revenue & fee recovery dashboard',
      'Multi-campus student and faculty strength metrics',
      'Real-time admission pipeline and seat conversion rates',
      'Audit logs and DPDP compliance assurance',
    ],
    cta: 'Explore Owner Solutions →',
  },
  {
    slug: 'principals',
    role: 'Principals & School Heads',
    title: 'Coordinated academic operations and effortless institutional oversight',
    desc: 'Monitor daily attendance trends, approve teacher leave requests, inspect curriculum pacing, and broadcast verified official circulars without WhatsApp chaos.',
    features: [
      'Daily morning operational briefing & attendance snapshot',
      'Teacher substitute management and academic timetable monitoring',
      'One-click official school circular broadcast with read receipts',
      'Exam performance analytics by subject and class section',
    ],
    cta: 'Explore Principal Solutions →',
  },
  {
    slug: 'administrators',
    role: 'Administrators & Front Office',
    title: 'Automated administrative workflows and zero duplicate paperwork',
    desc: 'Eliminate repetitive spreadsheet registers. Manage walk-in admission inquiries, automate parent fee reminders, and issue transfer certificates in minutes.',
    features: [
      'Inquiry pipeline with automatic follow-up reminders',
      'Automated parent fee reminder sequences and instant UPI receipts',
      'CBSE, ICSE, and State Board compliant document generators',
      'Student record lifecycle from enrollment to alumni TC generation',
    ],
    cta: 'Explore Admin Solutions →',
  },
  {
    slug: 'teachers',
    role: 'Teachers & Faculty',
    title: '60-second roll calls, easy homework posting & zero after-hours disruption',
    desc: 'Say goodbye to administrative fatigue. Complete class attendance in 1-tap, post homework with photos, and communicate with parents during designated school hours.',
    features: [
      '1-tap roll call interface that finishes in under 60 seconds',
      'Direct homework publishing with deadline tracking and attachments',
      'Fast mark entry grids with automatic grade calculations',
      'Zero personal phone number sharing with parents',
    ],
    cta: 'Explore Teacher Solutions →',
  },
  {
    slug: 'parents',
    role: 'Parents & Guardians',
    title: 'A transparent, stress-free mobile window into their child’s school life',
    desc: 'Provide parents with the modern experience they expect. Real-time attendance notifications, homework updates, examination timetables, and 1-tap fee payments.',
    features: [
      'Immediate alert if a child is marked absent without prior leave',
      'Daily homework board with teacher notes and attachments',
      'Downloadable fee receipts and upcoming installment schedules',
      'Direct, governed teacher query window within school hours',
    ],
    cta: 'Explore Parent Solutions →',
  },
];

export default function SolutionsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>ROLE-BASED EXCELLENCE</div>
          <h1 className={styles.title}>Tailored solutions for every member of your school community</h1>
          <p className={styles.sub}>
            Different stakeholders have different needs. Discover how SchoolOS delivers clarity to leadership,
            efficiency to educators, and peace of mind to parents.
          </p>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {AUDIENCES.map((aud) => (
              <div key={aud.slug} className={styles.card}>
                <div className={styles.roleBadge}>{aud.role}</div>
                <h2 className={styles.cardTitle}>{aud.title}</h2>
                <p className={styles.cardDesc}>{aud.desc}</p>
                <ul className={styles.featureList}>
                  {aud.features.map((f, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardAction}>
                  <Link href={`/solutions/${aud.slug}`} className="btn btn-outline">
                    {aud.cta}
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
            <h2>See how SchoolOS works for your specific team</h2>
            <p>Schedule a live demo to experience the role-specific consoles and mobile apps.</p>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Book a Role-Tailored Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
