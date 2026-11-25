import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertCircle, Sparkles } from 'lucide-react';
import styles from './audience.module.css';

interface AudienceDetail {
  slug: string;
  role: string;
  headline: string;
  tagline: string;
  sub: string;
  painPoints: string[];
  solutions: { title: string; desc: string }[];
  quote: { text: string; author: string; school: string };
}

const AUDIENCE_DATA: Record<string, AudienceDetail> = {
  'school-owners': {
    slug: 'school-owners',
    role: 'School Owners & Trustees',
    headline: 'Total operational clarity and financial accountability across your campuses',
    tagline: 'Built for executive leadership demanding consolidated control',
    sub: 'Stop relying on verbal updates or conflicting spreadsheet reports. School247 provides school owners with a single real-time dashboard of admissions, fee recovery, and campus compliance.',
    painPoints: [
      'Incomplete visibility into fee defaulters and delayed cash flows',
      'Uncertainty about admission enquiry conversions across streams',
      'Fragmented data across multiple campuses or trust branches',
      'Concerns regarding student data security and regulatory DPDP compliance',
    ],
    solutions: [
      {
        title: 'Real-Time Revenue & Fee Ledger',
        desc: 'Instant view of term collections, pending dues, installment plans, and automated collection projections.',
      },
      {
        title: 'Admissions Funnel Analytics',
        desc: 'Track inquiry velocity from website, WhatsApp, and front desk walk-ins to paid enrollments by grade.',
      },
      {
        title: 'Multi-Branch Institutional Console',
        desc: 'Compare attendance, teacher allocations, and operational health across all campuses under your management.',
      },
      {
        title: 'DPDP-Compliant Data Isolation',
        desc: 'Enterprise-grade encryption and tenant isolation safeguarding your institution’s sensitive records.',
      },
    ],
    quote: {
      text: 'Institutional trust is built upon transparency, operational discipline, and reliable data governance across every campus.',
      author: 'Institutional Governance Standard',
      school: 'School Board Best Practices',
    },
  },
  principals: {
    slug: 'principals',
    role: 'Principals & School Heads',
    headline: 'Seamless academic coordination and authoritative school communication',
    tagline: 'Lead your school with data-driven operational confidence',
    sub: 'Begin each morning with an accurate operational pulse. Monitor real-time student and staff attendance, track curriculum pacing, and broadcast verified notices without personal WhatsApp risks.',
    painPoints: [
      'Lack of an accurate morning snapshot of student absences and teacher leaves',
      'Scattered parent grievances across unmonitored WhatsApp groups',
      'Chaotic exam mark compilation and delayed report card publishing',
      'Teacher substitution headaches during unexpected sick leaves',
    ],
    solutions: [
      {
        title: 'Morning Executive Briefing',
        desc: 'A 60-second summary of class roll-call completion, student attendance percentages, and absent staff members.',
      },
      {
        title: 'Official School Broadcast Channel',
        desc: 'Send verified circulars with read receipts, eliminating chaotic and unregulated parent chat groups.',
      },
      {
        title: 'Automated Examination Gradebook',
        desc: 'Board-compliant report card generation matching CBSE and ICSE rubrics with one-click approval.',
      },
      {
        title: 'Teacher Leave & Substitution Router',
        desc: 'Digital leave approval routing that instantly highlights affected class sections for seamless substitute cover.',
      },
    ],
    quote: {
      text: 'Leadership and learning are indispensable to each other. When administrative coordination is frictionless, educators can dedicate their full energy to student excellence.',
      author: 'Principles of Academic Leadership',
      school: 'School Leadership Framework',
    },
  },
  administrators: {
    slug: 'administrators',
    role: 'School Administrators & Front Office',
    headline: 'Automate repetitive registers, fee receipts, and parent inquiries',
    tagline: 'Cut daily paperwork by 70% with intelligent administrative workflows',
    sub: 'Front office staff and administrative clerks spend hundreds of hours on paper registers, manual phone calls, and fee receipts. School247 automates the busywork so your staff can focus on parent satisfaction.',
    painPoints: [
      'Endless phone calls from parents asking basic admission and timing questions',
      'Manual writing and stamping of paper fee receipts and cash reconciliations',
      'Chasing class teachers for missing attendance registers at month-end',
      'Cumbersome manual formatting of student transfer certificates and bonafides',
    ],
    solutions: [
      {
        title: 'Automated Parent Fee Reminders',
        desc: 'Scheduled WhatsApp & SMS reminders before due dates resulting in 90%+ on-time fee settlements.',
      },
      {
        title: 'Digital Roster & Document Generator',
        desc: 'Generate Transfer Certificates (TC), Bonafide certificates, and ID cards with pre-filled student dossiers.',
      },
      {
        title: 'Admission Inquiry Tracker',
        desc: 'Visual prospect pipeline with automated reminders to follow up on walk-in parent visits.',
      },
      {
        title: 'AI Front Desk Assistant',
        desc: 'Resolves routine parent admission queries regarding documents, fees, and visiting hours 24/7.',
      },
    ],
    quote: {
      text: 'Streamlined administrative systems eliminate the burden of repetitive registers, creating room for meaningful human connection and student care.',
      author: 'Administrative Excellence Guide',
      school: 'Educational Management Series',
    },
  },
  teachers: {
    slug: 'teachers',
    role: 'Teachers & Faculty',
    headline: 'Spend time inspiring students, not wrestling with administrative registers',
    tagline: 'Simple 1-tap tools designed specifically for busy classroom teachers',
    sub: 'School247 respects educators’ time. Complete morning roll call in under a minute, publish homework with one tap, and communicate with parents strictly within school hours—without ever sharing your personal phone number.',
    painPoints: [
      'Spending 15+ minutes every morning marking registers and filling log sheets',
      'Parents messaging personal WhatsApp at night or on weekends about homework',
      'Manual mark calculation and tedious paper report card entry',
      'Paper leave slips getting misplaced or lost between offices',
    ],
    solutions: [
      {
        title: '1-Tap 60-Second Mobile Roll Call',
        desc: 'Mark present or absent on your phone with a clean tap. Parents are notified automatically without teacher effort.',
      },
      {
        title: 'Clean Digital Homework Board',
        desc: 'Attach worksheet photos, set submission deadlines, and verify which parents have viewed the day’s work.',
      },
      {
        title: 'Governed Working-Hour Messaging',
        desc: 'Communicate with parents inside the school portal with strict time windows. Zero personal phone leaks.',
      },
      {
        title: 'Rapid Mark Entry Grids',
        desc: 'Enter exam marks on web or tablet with automatic sum, average, and board grade calculation.',
      },
    ],
    quote: {
      text: 'The art of teaching is the art of assisting discovery. Operational technology should empower and protect the educator’s focus, never invade it.',
      author: 'Educator Well-Being & Classroom Focus',
      school: 'Faculty Development Standard',
    },
  },
  parents: {
    slug: 'parents',
    role: 'Parents & Guardians',
    headline: 'Stay transparently connected to your child’s educational journey',
    tagline: 'A modern, dependable mobile app for informed and confident parenting',
    sub: 'Never wonder about unannounced school closures, missing homework, or fee due dates again. School247 provides parents with a clean, verified smartphone window into their child’s daily school life.',
    painPoints: [
      'Finding out late about forgotten homework assignments or upcoming tests',
      'Anxiety over whether a child arrived safely at school on time',
      'Standing in long bank or school queues to pay quarterly tuition fees',
      'Missed paper circulars buried in school bags or lost school diary notices',
    ],
    solutions: [
      {
        title: 'Immediate Absence Notifications',
        desc: 'Receive an immediate SMS or app alert if your child is not marked present during morning roll call.',
      },
      {
        title: 'Live Homework & Exam Schedules',
        desc: 'Clear daily homework assignments with teacher attachments, exam dates, and syllabus outlines.',
      },
      {
        title: '1-Tap UPI Fee Payments',
        desc: 'Pay tuition and transport fees securely via Google Pay, PhonePe, or cards and download receipts instantly.',
      },
      {
        title: 'Direct Teacher Query Window',
        desc: 'Ask questions directly to class teachers during official school hours and receive verified guidance.',
      },
    ],
    quote: {
      text: 'At the end of the day, the greatest key to a child’s educational journey is clear, consistent, and respectful communication between school and home.',
      author: 'Parent-School Partnership Foundation',
      school: 'Community Engagement Principles',
    },
  },
};

export function generateStaticParams() {
  return Object.keys(AUDIENCE_DATA).map((audience) => ({ audience }));
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const data = AUDIENCE_DATA[audience];

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.roleBadge}>{data.role}</div>
          <h1 className={styles.headline}>{data.headline}</h1>
          <p className={styles.tagline}>{data.tagline}</p>
          <p className={styles.sub}>{data.sub}</p>
          <div className={styles.heroActions}>
            <Link href={`/book-demo?audience=${data.slug}`} className="btn btn-primary btn--lg">
              Book a Demo for {data.role}
            </Link>
            <Link href="/solutions" className="btn btn-outline btn--lg">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            {/* Left: Everyday Challenges */}
            <div className={styles.challengesCard}>
              <div className={styles.colHeader}>
                <span className={styles.colIcon}><AlertCircle size={22} color="#EF4444" /></span>
                <h3>The Challenges {data.role} Face</h3>
              </div>
              <ul className={styles.challengeList}>
                {data.painPoints.map((p, idx) => (
                  <li key={idx}>
                    <span className={styles.crossIcon}>✕</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: School247 Solutions */}
            <div className={styles.solutionsCard}>
              <div className={styles.colHeader}>
                <span className={styles.colIcon}><Sparkles size={22} color="#2563EB" /></span>
                <h3>How School247 Solves It</h3>
              </div>
              <div className={styles.solList}>
                {data.solutions.map((s, idx) => (
                  <div key={idx} className={styles.solItem}>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className={styles.testimonialBox}>
            <div className={styles.quoteMark}>“</div>
            <p className={styles.quoteText}>{data.quote.text}</p>
            <div className={styles.quoteAuthor}>
              <strong>{data.quote.author}</strong>
              <span>{data.quote.school}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Ready to see how School247 transforms {data.role}?</h2>
            <p>Schedule a 25-minute live consultation with our school workflow team.</p>
            <Link href={`/book-demo?audience=${data.slug}`} className="btn btn-primary btn--lg">
              Schedule Your Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
