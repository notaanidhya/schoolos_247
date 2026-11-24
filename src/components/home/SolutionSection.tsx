import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './SolutionSection.module.css';

const PILLARS = [
  {
    icon: '🏫',
    title: 'School Operations',
    desc: 'Manage attendance, students, staff, admissions, fees and administrative workflows from one central hub.',
    color: '#2563EB',
    features: ['Student & staff records', 'Attendance management', 'Fee tracking', 'Admissions pipeline'],
  },
  {
    icon: '🤝',
    title: 'Parent & Teacher Experience',
    desc: 'Connect parents and teachers through updates, conversations, digital requests and approvals.',
    color: '#10B981',
    features: ['Parent mobile app', 'Teacher portal', 'Digital notices', 'Read acknowledgements'],
  },
  {
    icon: '🤖',
    title: 'AI Operations Assistant',
    desc: 'Assist with repetitive workflows, information retrieval and administrative tasks — with human oversight.',
    color: '#6366F1',
    features: ['Automated reminders', 'Natural language queries', 'Document search', 'Workflow assistance'],
    badge: 'Coming Soon',
  },
  {
    icon: '📊',
    title: 'Management Intelligence',
    desc: 'Give school leadership better visibility into operations, pending work and performance insights.',
    color: '#F59E0B',
    features: ['Operations dashboard', 'Pending work overview', 'Attendance reports', 'Admission pipeline view'],
  },
];

export default function SolutionSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--indigo">The Solution</div>
            <h2 className="heading-lg">
              One platform. <span className="gradient-text">Four powerful layers.</span>
            </h2>
            <p className="lead" style={{ maxWidth: '560px', textAlign: 'center' }}>
              SchoolOS connects what was previously fragmented — bringing administration,
              communication, and intelligence into a single, coherent system.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {PILLARS.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 120}>
              <div className={styles.card} style={{ '--pillar-color': p.color } as React.CSSProperties}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <span className={styles.icon}>{p.icon}</span>
                  </div>
                  {p.badge && <span className="badge badge--amber">{p.badge}</span>}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <ul className={styles.featureList}>
                  {p.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
