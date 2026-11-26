'use client';
import Link from 'next/link';
import { Users, Building2, Layers, ArrowUpRight } from 'lucide-react';
import styles from './PricingTeaser.module.css';

const TIERS = [
  {
    name: 'Essential',
    tagline: 'For independent schools kickstarting digital transformation',
    target: 'Up to 600 students • 1 Campus',
    description: 'Establish clear records, reliable digital attendance, and trusted parent communication.',
    features: [
      'Core Student & Staff Information Directory',
      'Daily 1-tap Attendance & Leave Tracking',
      'Parent Mobile App (Android & Web Portal)',
      'Digital Circulars & Announcements Hub',
      'Role-based Administrator & Teacher access',
      'Standard email & ticketing support',
    ],
    cta: 'Request Essential Quote',
    popular: false,
  },
  {
    name: 'Growth',
    tagline: 'For established institutions needing connected, automated operations',
    target: '500 to 2,000 students • Up to 2 Campuses',
    description: 'Unify fees, admissions, exams, and parent workflows into a synchronized operational layer.',
    features: [
      'Everything in Essential, plus:',
      'Full Admissions Pipeline & Lead Reminders',
      'Fees & Finance with UPI / Razorpay integration',
      'Exam Schedules, Marks Entry & Report Cards',
      'Automated parent WhatsApp alerts for unexcused absence',
      'Priority on-call & WhatsApp deployment support',
    ],
    cta: 'Request Growth Quote',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-branch schools & large educational societies',
    target: '2,000+ students • Multiple Campuses',
    description: 'Custom administrative workflows, AI-assisted operations, and custom data migration.',
    features: [
      'Everything in Growth, plus:',
      'AI Operations Assistant (Natural language queries)',
      'Custom Legacy ERP Data Migration & Webhooks',
      'Multi-branch consolidated management console',
      'Custom role hierarchy & DPDP audit logs',
      'Dedicated Customer Success Manager & SLA',
    ],
    cta: 'Request Enterprise Quote',
    popular: false,
  },
];

export default function PricingTeaser() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>TRANSPARENT, TAILORED PRICING</div>
          <h2 className={styles.headline}>
            Transparent plans aligned with your school’s scale
          </h2>
          <p className={styles.sub}>
            No rigid one-size-fits-all software fees. School247 pricing is customized
            based on student enrollment, active modules, and campus structure.
          </p>
        </div>

        <div className={styles.tierGrid}>
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`${styles.tierCard} ${tier.popular ? styles.tierCardPopular : ''}`}
            >
              {tier.popular && (
                <div className={styles.popularBadge}>Most Recommended</div>
              )}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <div className={styles.tierTarget}>{tier.target}</div>
              <p className={styles.tierDesc}>{tier.description}</p>

              <div className={styles.divider} />

              <div className={styles.featureTitle}>What’s included:</div>
              <ul className={styles.featureList}>
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.ctaWrapper}>
                <Link
                  href={`/book-demo?plan=${tier.name.toLowerCase()}`}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} ${styles.cardBtn}`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Factors Explanation Box */}
        <div className={styles.factorsBox}>
          <div className={styles.factorsHeader}>
            <div className={styles.factorsTitle}>What determines your school quote?</div>
            <p className={styles.factorsSub}>
              We conduct a brief 15-minute consultation to calculate an exact, fair institutional price.
            </p>
          </div>
          <div className={styles.factorsGrid}>
            <div className={styles.factorItem}>
              <div className={styles.factorIcon}><Users size={20} color="#2563EB" /></div>
              <div className={styles.factorText}>
                <strong>Student Strength</strong>
                <span>Pay proportional to active student enrollment</span>
              </div>
            </div>
            <div className={styles.factorItem}>
              <div className={styles.factorIcon}><Building2 size={20} color="#10B981" /></div>
              <div className={styles.factorText}>
                <strong>Number of Campuses</strong>
                <span>Single school or multi-branch educational trust</span>
              </div>
            </div>
            <div className={styles.factorItem}>
              <div className={styles.factorIcon}><Layers size={20} color="#6366F1" /></div>
              <div className={styles.factorText}>
                <strong>Selected Modules</strong>
                <span>Choose only the modules your staff actually uses</span>
              </div>
            </div>
            <div className={styles.factorItem}>
              <div className={styles.factorIcon}><ArrowUpRight size={20} color="#F59E0B" /></div>
              <div className={styles.factorText}>
                <strong>Data Migration Needs</strong>
                <span>Assistance transferring from legacy spreadsheets or ERPs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
