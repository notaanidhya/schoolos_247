import styles from './ProofBar.module.css';

const HIGHLIGHTS = [
  { value: 'DPDP 2023', label: 'Data Privacy Compliant' },
  { value: '100%', label: 'Isolated Tenant Records' },
  { value: 'Verified', label: 'Official School Broadcasts' },
  { value: 'Multi-Role', label: 'Institutional Governance' },
  { value: 'Assisted', label: 'Onboarding & Migration' },
];

export default function ProofBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.label}>Built for Indian Schools</div>
        <div className={styles.divider} />
        <div className={styles.stats}>
          {HIGHLIGHTS.map((s) => (
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
