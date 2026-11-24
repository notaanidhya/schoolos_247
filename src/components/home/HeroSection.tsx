'use client';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Introducing SchoolOS for Indian Schools</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Run your school
            <span className={styles.headlineGradient}> smarter.</span>
            <br />Not harder.
          </h1>

          {/* Subheadline */}
          <p className={styles.sub}>
            The AI Operations Layer for Schools. Bring school administration,
            parent communication, attendance and everyday workflows together
            in one intelligent platform.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Link href="/book-demo" className={`btn btn-primary btn--xl ${styles.ctaPrimary}`}>
              Book a live demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/platform" className={`btn btn-outline btn--xl ${styles.ctaSecondary}`}>
              Explore the platform
            </Link>
          </div>

          {/* Trust signals */}
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              No credit card required
            </div>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              30-min personalised demo
            </div>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Tailored for Indian schools
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className={styles.mockupWrap}>
          <div className={styles.mockup}>
            {/* Mockup header */}
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotYellow}`} />
                <span className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <div className={styles.mockupTitle}>SchoolOS Dashboard</div>
            </div>
            {/* Mockup content */}
            <div className={styles.mockupBody}>
              {/* Stats row */}
              <div className={styles.statsRow}>
                {[
                  { label: 'Total Students', value: '1,247', color: '#2563EB', icon: '👨🎓' },
                  { label: 'Present Today', value: '1,189', color: '#10B981', icon: '✅' },
                  { label: 'Pending Fees', value: '₹2.4L', color: '#F59E0B', icon: '💰' },
                  { label: 'Open Enquiries', value: '34', color: '#6366F1', icon: '📋' },
                ].map((s) => (
                  <div key={s.label} className={styles.statCard} style={{ '--stat-color': s.color } as React.CSSProperties}>
                    <div className={styles.statIcon}>{s.icon}</div>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Notifications */}
              <div className={styles.notifList}>
                {[
                  { text: 'Rahul Sharma marked absent — Class 8A', time: '9:12 AM', type: 'warn' },
                  { text: 'New admission enquiry from Priya Mehta', time: '8:55 AM', type: 'info' },
                  { text: 'Fee payment received — Arjun Patel ₹12,000', time: '8:40 AM', type: 'success' },
                  { text: 'Parent message: Exam schedule request', time: '8:30 AM', type: 'msg' },
                ].map((n, i) => (
                  <div key={i} className={`${styles.notif} ${styles[`notif_${n.type}`]}`}>
                    <div className={`${styles.notifDot} ${styles[`dot_${n.type}`]}`} />
                    <div className={styles.notifContent}>
                      <span className={styles.notifText}>{n.text}</span>
                      <span className={styles.notifTime}>{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className={`${styles.floatCard} ${styles.floatCard1}`}>
            <div className={styles.floatCardIcon}>📱</div>
            <div>
              <div className={styles.floatCardTitle}>Parent App</div>
              <div className={styles.floatCardSub}>847 active parents</div>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard2}`}>
            <div className={styles.floatCardIcon}>🤖</div>
            <div>
              <div className={styles.floatCardTitle}>AI Assistant</div>
              <div className={styles.floatCardSub}>3 tasks automated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
