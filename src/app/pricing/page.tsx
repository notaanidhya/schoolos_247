import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTeaser from '@/components/home/PricingTeaser';
import styles from './pricing.module.css';

export const metadata: Metadata = {
  title: 'Pricing & Institutional Plans — SchoolOS',
  description:
    'Transparent, customized pricing for Indian schools based on student enrollment, active modules, and campus structure.',
};

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroBanner}>
        <div className={styles.container}>
          <div className={styles.badge}>INSTITUTIONAL PRICING</div>
          <h1 className={styles.title}>Simple, predictable investment in your school’s growth</h1>
          <p className={styles.sub}>
            No arbitrary per-feature extortion or surprise hosting bills. We offer transparent pricing designed around
            the operational reality of Indian private schools.
          </p>
        </div>
      </div>

      <PricingTeaser />

      {/* Pilot Program Section */}
      <section className={styles.pilotSection}>
        <div className={styles.container}>
          <div className={styles.pilotCard}>
            <div className={styles.pilotContent}>
              <div className={styles.pilotBadge}>LIMITED TERM OFFER</div>
              <h2 className={styles.pilotTitle}>The SchoolOS Academic Pilot Program</h2>
              <p className={styles.pilotText}>
                We believe in proving value before asking for long-term institutional commitments.
                Select private schools (300 to 1,500 students) qualify for a <strong>45-day zero-risk trial</strong> covering
                attendance, parent app, and broadcast communications.
              </p>
              <div className={styles.pilotPoints}>
                <div className={styles.pItem}>
                  <strong>✓ Free Data Setup</strong>
                  <span>Our team formats and imports your initial class and student records.</span>
                </div>
                <div className={styles.pItem}>
                  <strong>✓ Teacher Workshop</strong>
                  <span>Interactive 45-minute training session for all faculty members.</span>
                </div>
                <div className={styles.pItem}>
                  <strong>✓ Parent Communication Kit</strong>
                  <span>Ready-made circulars, flyers, and WhatsApp message templates for guardians.</span>
                </div>
              </div>
              <div className={styles.pilotAction}>
                <Link href="/book-demo?pilot=true" className="btn btn-primary btn--lg">
                  Apply for the 45-Day School Pilot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
