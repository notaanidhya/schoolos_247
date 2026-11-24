'use client';
import Link from 'next/link';
import styles from './DemoCtaSection.module.css';

export default function DemoCtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.pulseDot} />
            <span>TRANSFORM YOUR SCHOOL OPERATIONS</span>
          </div>

          <h2 className={styles.headline}>
            Ready to experience SchoolOS in your school?
          </h2>

          <p className={styles.sub}>
            Schedule a personalized 25-minute product walk-through with our school
            technology specialists. See how connected workflows save administrative
            hours, delight parents, and give leadership complete operational clarity.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/book-demo" className={`btn btn-primary btn--xl ${styles.mainBtn}`}>
              Book a live demo
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className={`btn btn-outline btn--xl ${styles.secondaryBtn}`}>
              Speak with our team
            </Link>
          </div>

          <div className={styles.perksRow}>
            <div className={styles.perk}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% Free consultation & assessment</span>
            </div>
            <div className={styles.perk}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Customized to your board (CBSE / ICSE / State)</span>
            </div>
            <div className={styles.perk}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>No commitment or software lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
