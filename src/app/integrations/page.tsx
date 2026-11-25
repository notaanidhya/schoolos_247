import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './integrations.module.css';

export const metadata: Metadata = {
  title: 'Integrations & Ecosystem — School247',
  description:
    'Discover how School247 connects with WhatsApp, payment gateways, messaging infrastructure, and legacy school databases.',
};

export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'WhatsApp Business Platform',
      status: 'Planned Integration',
      statusColor: 'amber',
      category: 'Parent Communication',
      desc: 'Deliver automated attendance absence alerts, emergency notices, and digital fee receipts directly to verified parent WhatsApp chats.',
      capabilities: [
        'Automated 1-to-1 absence notifications',
        'Official circular broadcasts with verified green checkmark support',
        'Direct UPI payment link delivery',
      ],
    },
    {
      name: 'Razorpay / UPI Payment Gateways',
      status: 'Planned Integration',
      statusColor: 'amber',
      category: 'Fee Collections & Finance',
      desc: 'Facilitate zero-friction fee payments via UPI (Google Pay, PhonePe, Paytm), Debit/Credit cards, and Net Banking with automated settlement.',
      capabilities: [
        'Instant digital receipt generation upon payment capture',
        'Automated ledger reconciliation with school accounts',
        'Customized installment reminders with 1-tap payment',
      ],
    },
    {
      name: 'Google Workspace for Education',
      status: 'Planned Integration',
      statusColor: 'amber',
      category: 'Classroom & Productivity',
      desc: 'Synchronize teacher Google Classroom materials, academic calendars, and school-wide faculty email accounts.',
      capabilities: [
        'Single Sign-On (SSO) with school domain Google accounts',
        'Academic event synchronization with Google Calendar',
        'Document and assignment repository linking',
      ],
    },
    {
      name: 'Firebase Cloud Messaging (FCM)',
      status: 'Planned Integration',
      statusColor: 'amber',
      category: 'Mobile Notification Infrastructure',
      desc: 'High-reliability, sub-second push notification delivery for critical homework releases, exam alerts, and emergency announcements.',
      capabilities: [
        'Instant background push notifications to Android devices and web portal',
        'Class and section targeted notification channels',
        'Delivery and open rate telemetry for administrative verification',
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>CONNECTED ECOSYSTEM</div>
          <h1 className={styles.title}>Connecting the tools your school community relies on</h1>
          <p className={styles.sub}>
            School247 acts as the unifying operations layer. We bridge parent communication channels, payment systems,
            and existing school software into one synchronized hub.
          </p>
        </div>
      </section>

      <section className={styles.ecosystemSection}>
        <div className={styles.container}>
          <div className={styles.noticeBox}>
            <div className={styles.noticeIcon}>ℹ️</div>
            <p>
              <strong>Integrations Roadmap Transparency:</strong> As part of our commitment to transparent communication,
              all third-party integrations listed below represent planned engineering capabilities designed to connect via
              official APIs. Product names and trademarks belong to their respective holders.
            </p>
          </div>

          <div className={styles.grid}>
            {integrations.map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.category}>{item.category}</div>
                  <span className={styles.statusBadge}>{item.status}</span>
                </div>
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.capTitle}>Planned Capabilities:</div>
                <ul className={styles.capList}>
                  {item.capabilities.map((c, cIdx) => (
                    <li key={cIdx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Legacy ERP & API connectivity */}
          <div className={styles.legacyBox}>
            <div className={styles.legacyContent}>
              <h3 className={styles.legacyTitle}>Connecting With Your Existing School ERP</h3>
              <p className={styles.legacyText}>
                Already invested in an existing software for accounting, admissions, or payroll? School247 provides
                custom REST API connectors, automated CSV/Excel roster imports, and scheduled sync jobs so your institution
                gains modern parent mobile apps and AI workflows without discarding current systems.
              </p>
              <div className={styles.legacyPoints}>
                <div>✓ Structured CSV / Excel batch synchronization</div>
                <div>✓ Webhook triggers for attendance & fee events</div>
                <div>✓ Secure DPDP-compliant data transfer protocols</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Have specific software integration requirements?</h2>
            <p>Our solutions engineering team can review your school’s technical stack during a demo.</p>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Discuss Your Stack With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
