import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './how-it-works.module.css';

export const metadata: Metadata = {
  title: 'How It Works — School247',
  description:
    'A simple 3-step operational transition: Connect your school, bring everyone together, and automate daily administrative workflows.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Connect Your School',
      subtitle: 'Set up your classes, faculty roles, and records in days — not months',
      desc: 'Our dedicated onboarding team imports your active student rosters, class allocations, fee categories, and staff directory. If your school uses an existing accounting ERP or Excel registers, we synchronize records with zero downtime.',
      bullets: [
        'Safe, zero-downtime student and teacher directory configuration',
        'Direct import from CBSE/ICSE lists, Excel, or existing ERP software',
        'Customized role assignment: Trustee, Principal, Coordinator, Teacher',
        'Academic calendar, term definitions, and holiday setup',
      ],
    },
    {
      num: '02',
      title: 'Bring Everyone Together',
      subtitle: 'Unify teachers, administrative staff, and parents on verified channels',
      desc: 'We conduct a 45-minute interactive teacher workshop. Parents receive an automated SMS invite linking their child’s profile with 1-tap verification. WhatsApp groups are replaced with official, secure school broadcast feeds.',
      bullets: [
        '1-tap parent profile activation with strict child verification',
        'Intuitive teacher roll call on mobile (under 60 seconds per section)',
        'Classroom homework board with immediate parent notification',
        'Governed teacher messaging during working hours (no personal phone leaks)',
      ],
    },
    {
      num: '03',
      title: 'Automate & Improve',
      subtitle: 'Deploy workflow automations, instant reminders, and AI-assisted workflows',
      desc: 'Daily handoffs happen automatically. Unexcused absence alerts trigger parent WhatsApp messages; fee schedules generate UPI payment links; leadership receives consolidated operational summaries with natural language search.',
      bullets: [
        'Automated parent absence alerts and digital leave approvals',
        'Automated fee reminder sequences leading to 90%+ on-time collections',
        'Natural-language school intelligence queries for principals and owners',
        'Human-in-the-loop AI assistance for routine administrative drafts',
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>OPERATIONAL BLUEPRINT</div>
          <h1 className={styles.title}>How School247 transforms your daily school operations</h1>
          <p className={styles.sub}>
            A structured, 3-step transition that eliminates administrative chaos without disrupting your current academic year.
          </p>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.stepsList}>
            {steps.map((st) => (
              <div key={st.num} className={styles.stepCard}>
                <div className={styles.stepNumCol}>
                  <div className={styles.stepCircle}>{st.num}</div>
                  <div className={styles.stepLine} />
                </div>
                <div className={styles.stepContentCol}>
                  <h2 className={styles.stepTitle}>{st.title}</h2>
                  <div className={styles.stepSubtitle}>{st.subtitle}</div>
                  <p className={styles.stepDesc}>{st.desc}</p>
                  <ul className={styles.bullets}>
                    {st.bullets.map((b, idx) => (
                      <li key={idx}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Ready to bring connected operations to your school?</h2>
            <p>Speak with our school onboarding architects and receive a tailored implementation plan.</p>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Book a Consultation & Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
