import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './ProblemsSection.module.css';

const PROBLEMS = [
  {
    icon: '📋',
    title: 'Manual administration',
    desc: 'Repeated data entry, registers and spreadsheets consume hours of staff time every single day.',
    color: '#EF4444',
  },
  {
    icon: '💬',
    title: 'Scattered communication',
    desc: 'Important messages fragmented across WhatsApp groups, phone calls, and notice boards.',
    color: '#F59E0B',
  },
  {
    icon: '🔀',
    title: 'Disconnected workflows',
    desc: 'Attendance, leave, fees and administration operate in separate systems that don\'t talk to each other.',
    color: '#6366F1',
  },
  {
    icon: '📊',
    title: 'Limited visibility',
    desc: 'School management lacks a consolidated, real-time view of daily operations and pending work.',
    color: '#EC4899',
  },
];

export default function ProblemsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--blue">The Problem</div>
            <h2 className={`heading-lg ${styles.headline}`}>
              Schools don&apos;t need more software complexity.
              <br />
              <span className="gradient-text">They need better-connected operations.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {PROBLEMS.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.iconWrap} style={{ '--card-color': p.color } as React.CSSProperties}>
                  <span className={styles.icon}>{p.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
