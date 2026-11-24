import styles from './ProofBar.module.css';

const STATS = [
  { value: '300+', label: 'Schools onboarding' },
  { value: '50,000+', label: 'Students managed' },
  { value: '1,20,000+', label: 'Parents connected' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: '< 30s', label: 'Avg. response time' },
];

export default function ProofBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.label}>Trusted by schools across India</div>
        <div className={styles.divider} />
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.value}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
