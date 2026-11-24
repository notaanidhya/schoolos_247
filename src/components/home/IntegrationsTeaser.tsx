import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';
import styles from './IntegrationsTeaser.module.css';

const INTEGRATIONS = [
  { name: 'WhatsApp', desc: 'Parent notifications and communication', emoji: '💬', color: '#25D366' },
  { name: 'Google Workspace', desc: 'Email, calendars and documents', emoji: '📧', color: '#4285F4' },
  { name: 'Razorpay', desc: 'Fee payment processing', emoji: '💳', color: '#3395FF' },
  { name: 'Firebase', desc: 'Push notification infrastructure', emoji: '🔔', color: '#FFCA28' },
  { name: 'Tally / ERP', desc: 'Finance and accounting integration', emoji: '📒', color: '#10B981' },
  { name: 'Google Meet', desc: 'Virtual parent-teacher meetings', emoji: '🎥', color: '#00897B' },
];

export default function IntegrationsTeaser() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--blue">Integrations</div>
            <h2 className="heading-lg" style={{ textAlign: 'center', color: 'white' }}>
              Works with the tools
              <span style={{ color: 'var(--blue-light)' }}> you already use</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-lg)', textAlign: 'center', maxWidth: '520px' }}>
              SchoolOS connects to popular platforms. All integrations are planned and will be
              activated progressively.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {INTEGRATIONS.map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 80}>
              <div className={styles.card}>
                <div className={styles.iconWrap} style={{ '--int-color': item.color } as React.CSSProperties}>
                  <span className={styles.emoji}>{item.emoji}</span>
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </div>
                <span className="badge badge--amber" style={{ marginLeft: 'auto', flexShrink: 0 }}>Planned</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className={styles.cta}>
            <Link href="/integrations" className="btn btn-outline btn--lg">
              View all integrations
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
