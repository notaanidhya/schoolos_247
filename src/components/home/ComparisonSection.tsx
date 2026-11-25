import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './ComparisonSection.module.css';

const ROWS = [
  { old: 'Separate tools for every task', newText: 'Connected workflows across all modules' },
  { old: 'Manual follow-ups and reminders', newText: 'Automated notifications and reminders' },
  { old: 'Scattered parent messages via WhatsApp', newText: 'Structured, trackable communication' },
  { old: 'Repeated data entry across registers', newText: 'Single entry, platform-wide propagation' },
  { old: 'Limited operational visibility for management', newText: 'Consolidated real-time dashboards' },
  { old: 'Static, disconnected information systems', newText: 'AI-assisted, connected operations' },
];

export default function ComparisonSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--navy" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--blue)' }}>Why School247</div>
            <h2 className="heading-lg" style={{ textAlign: 'center' }}>
              A better way to run your school
            </h2>
            <p className={styles.sub}>
              Don&apos;t replace the systems your school already trusts.
              Make them work better together.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div className={styles.colHeader}>
                <span className={styles.colBadgeOld}>Traditional approach</span>
              </div>
              <div className={styles.colHeader}>
                <span className={styles.colBadgeNew}>School247 vision</span>
              </div>
            </div>
            {ROWS.map((row, i) => (
              <div key={i} className={styles.row}>
                <div className={styles.cellOld}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  {row.old}
                </div>
                <div className={styles.cellNew}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {row.newText}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
