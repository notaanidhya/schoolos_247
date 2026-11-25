import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './platform.module.css';

export const metadata: Metadata = {
  title: 'Platform Overview — SchoolOS',
  description:
    'Discover the architecture of SchoolOS — The AI Operations Layer connecting school administration, parents, and teachers seamlessly.',
};

export default function PlatformPage() {
  return (
    <div className={styles.page}>
      {/* Platform Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span>ARCHITECTURE & CAPABILITIES</span>
          </div>
          <h1 className={styles.heroTitle}>
            An intelligent operations layer engineered specifically for schools
          </h1>
          <p className={styles.heroSub}>
            Most school software fails because it tries to replace everything with another rigid database.
            SchoolOS connects your administration, teachers, and parents through synchronized workflows,
            AI assistance, and zero-friction mobile interfaces.
          </p>
          <div className={styles.heroActions}>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Book a Platform Walk-Through
            </Link>
            <Link href="/features" className="btn btn-outline btn--lg">
              Explore All 8 Modules
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Layer Architecture Section */}
      <section className={styles.architectureSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>SYSTEM ARCHITECTURE</div>
            <h2 className={styles.sectionTitle}>Four unified layers. One coherent platform.</h2>
            <p className={styles.sectionSub}>
              From underlying DPDP-compliant data isolation to mobile applications, every layer is built to work reliably.
            </p>
          </div>

          <div className={styles.layersContainer}>
            {/* Layer 4: AI Layer */}
            <div className={`${styles.layerCard} ${styles.layerAi}`}>
              <div className={styles.layerHeader}>
                <div className={styles.layerPill}>Layer 4</div>
                <h3 className={styles.layerName}>AI & Automation Layer</h3>
                <span className={styles.aiTag}>Assisted Intelligence</span>
              </div>
              <p className={styles.layerDesc}>
                Empowers leadership with natural-language school intelligence, drafts administrative circulars,
                and resolves repetitive parent queries 24/7 with human oversight.
              </p>
              <div className={styles.layerPills}>
                <span>Parent AI Concierge</span>
                <span>Natural Language Query Engine</span>
                <span>Automated Notice Drafter</span>
                <span>Anomaly Detection</span>
              </div>
            </div>

            {/* Layer 3: Experience Layer */}
            <div className={styles.layerCard}>
              <div className={styles.layerHeader}>
                <div className={styles.layerPill}>Layer 3</div>
                <h3 className={styles.layerName}>Experience & Mobile Layer</h3>
              </div>
              <p className={styles.layerDesc}>
                Role-tailored interfaces for every stakeholder. Teachers mark roll-call in under 60 seconds;
                parents track fees and homework; administrators manage operations from a unified console.
              </p>
              <div className={styles.layerPills}>
                <span>Parent Mobile App (Android & Web)</span>
                <span>Teacher Quick-Roll Console</span>
                <span>Administrator Command Hub</span>
                <span>Trustee Executive Dashboard</span>
              </div>
            </div>

            {/* Layer 2: Workflows Layer */}
            <div className={styles.layerCard}>
              <div className={styles.layerHeader}>
                <div className={styles.layerPill}>Layer 2</div>
                <h3 className={styles.layerName}>Operational Workflow Engine</h3>
              </div>
              <p className={styles.layerDesc}>
                Automates the daily handoffs between departments. Converts student absence into instant parent SMS,
                routes leave requests to class teachers, and reconciles fee receipts directly into accounts.
              </p>
              <div className={styles.layerPills}>
                <span>Attendance & Parent Alerts</span>
                <span>Admissions Follow-up Pipeline</span>
                <span>Fee Schedules & UPI Receipts</span>
                <span>Report Cards & Grading</span>
              </div>
            </div>

            {/* Layer 1: Data & Security Layer */}
            <div className={styles.layerCard}>
              <div className={styles.layerHeader}>
                <div className={styles.layerPill}>Layer 1</div>
                <h3 className={styles.layerName}>Security & Data Foundation</h3>
              </div>
              <p className={styles.layerDesc}>
                Enterprise-grade security adhering to Indian data protection regulations (DPDP Act).
                Complete tenant isolation ensures student records are private, backed up, and strictly verified.
              </p>
              <div className={styles.layerPills}>
                <span>AES-256 Encryption at Rest</span>
                <span>Tenant Isolation Per School</span>
                <span>DPDP Act Compliance</span>
                <span>Role-Based Access Control (RBAC)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coexistence Callout */}
      <section className={styles.coexistenceSection}>
        <div className={styles.container}>
          <div className={styles.coexistenceCard}>
            <div className={styles.coexistenceContent}>
              <div className={styles.badgeLight}>CORE PHILOSOPHY</div>
              <h2 className={styles.coexistenceTitle}>
                Don’t replace what works. Make it work seamlessly.
              </h2>
              <p className={styles.coexistenceText}>
                Schools invest heavily in software setups and accounting databases. SchoolOS doesn’t demand
                a painful data migration or forcing teachers to abandon existing workflows overnight.
                We connect your front office, classroom, and parent community while keeping your core records secure.
              </p>
              <div className={styles.pointsList}>
                <div className={styles.point}>
                  <strong>✓ Zero Downtime Onboarding</strong>
                  <span>Keep running your academic term while we configure your sections.</span>
                </div>
                <div className={styles.point}>
                  <strong>✓ Safe Coexistence</strong>
                  <span>Import or sync records from your current Excel sheets or legacy databases.</span>
                </div>
                <div className={styles.point}>
                  <strong>✓ Teacher-First Usability</strong>
                  <span>Designed for non-technical faculty members with intuitive 1-tap interfaces.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>See the SchoolOS platform in action</h2>
            <p>Schedule a live 25-minute interactive walkthrough customized to your school.</p>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Book Your Free Platform Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
