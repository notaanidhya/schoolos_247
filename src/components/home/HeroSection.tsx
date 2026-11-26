'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Users, CheckCircle2, CreditCard, FileText, ShieldCheck } from 'lucide-react';
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
            <span>Introducing School247 for Indian Schools</span>
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
              <div className={styles.mockupTitle}>School247 Dashboard</div>
            </div>

            {/* Mockup content */}
            <div className={styles.mockupBody}>
              {/* Visual highlights: Teacher & School Campus */}
              <div className={styles.showcaseTop}>
                <div className={styles.mediaCard}>
                  <Image
                    src="/images/hero-teacher.jpg"
                    alt="Teacher guiding students in classroom"
                    width={360}
                    height={140}
                    className={styles.mediaImg}
                    priority
                  />
                  <div className={styles.mediaCaption}>
                    <span>Classroom & Roll Call</span>
                  </div>
                </div>

                <div className={styles.mediaCard}>
                  <Image
                    src="/images/hero-school.jpg"
                    alt="Indian school campus with students"
                    width={360}
                    height={140}
                    className={styles.mediaImg}
                  />
                  <div className={styles.mediaCaption}>
                    <span>Campus Operations</span>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className={styles.statsRow}>
                {[
                  { label: 'Student Directory', value: 'Verified Roster', color: '#2563EB', icon: <Users size={20} color="#2563EB" /> },
                  { label: 'Attendance Sync', value: 'Live Updates', color: '#10B981', icon: <CheckCircle2 size={20} color="#10B981" /> },
                  { label: 'Fee Management', value: 'Instant Receipts', color: '#F59E0B', icon: <CreditCard size={20} color="#F59E0B" /> },
                  { label: 'Notice Board', value: 'Verified Circulars', color: '#6366F1', icon: <FileText size={20} color="#6366F1" /> },
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
                  { text: 'Class 8A morning roll call marked complete', time: '9:12 AM', type: 'warn' },
                  { text: 'New admission inquiry received for Grade 1', time: '8:55 AM', type: 'info' },
                  { text: 'Verified circular published with read acknowledgements', time: '8:40 AM', type: 'success' },
                  { text: 'Parent query routed to designated coordinator', time: '8:30 AM', type: 'msg' },
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

          {/* Floating Parent Portal card with parent photo */}
          <div className={`${styles.floatCard} ${styles.floatCard1}`}>
            <Image
              src="/images/hero-parent.jpg"
              alt="Parent checking school notices on phone"
              width={44}
              height={44}
              className={styles.floatAvatar}
            />
            <div>
              <div className={styles.floatCardTitle}>Parent Portal</div>
              <div className={styles.floatCardSub}>Verified announcements & notices</div>
            </div>
          </div>

          {/* Floating Institutional Control card */}
          <div className={`${styles.floatCard} ${styles.floatCard2}`}>
            <div className={styles.floatCardIcon}><ShieldCheck size={22} color="#10B981" /></div>
            <div>
              <div className={styles.floatCardTitle}>Institutional Control</div>
              <div className={styles.floatCardSub}>Role-based administrative governance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
