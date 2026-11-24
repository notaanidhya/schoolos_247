import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './security.module.css';

export const metadata: Metadata = {
  title: 'Security, Privacy & Data Protection — SchoolOS',
  description:
    'How SchoolOS protects sensitive student, teacher, and institutional data with DPDP alignment, AES-256 encryption, and tenant isolation.',
};

export default function SecurityPage() {
  const securityPillars = [
    {
      icon: '🔒',
      title: 'Encryption in Transit & at Rest',
      desc: 'All communications with SchoolOS servers are encrypted using modern Transport Layer Security (TLS 1.3). Sensitive student records, documents, and database volumes are encrypted at rest using AES-256 standards.',
    },
    {
      icon: '🛡️',
      title: 'School-Level Data Isolation (Multi-Tenancy)',
      desc: 'Every educational institution operates within an isolated logical data silo. No cross-tenant data queries are possible, preventing any data commingling or unauthorized institutional record viewing.',
    },
    {
      icon: '👨‍👩‍👦',
      title: 'Verified Parent-Child Authentication',
      desc: 'Parent access requires phone number OTP verification pre-authorized by school records. Strict digital gating ensures only authenticated legal guardians view a child’s attendance, fees, and academic evaluations.',
    },
    {
      icon: '🔑',
      title: 'Granular Role-Based Access Control (RBAC)',
      desc: 'Access privileges follow the principle of least privilege. School Trustees, Principals, Accountants, Class Teachers, and Subject Faculty receive access only to the exact data required for their academic duties.',
    },
    {
      icon: '📋',
      title: 'Immutable Access & Audit Logs',
      desc: 'Every critical modification—including fee receipt adjustments, grade edits, and attendance updates—records a permanent timestamped audit trail indicating user identity and prior record states.',
    },
    {
      icon: '💾',
      title: 'Automated Backups & Disaster Recovery',
      desc: 'Daily automated snapshots of databases are geographically replicated across secure Indian cloud data centers to guarantee rapid disaster recovery with zero operational record loss.',
    },
    {
      icon: '📄',
      title: 'Secure Student Document Vault',
      desc: 'Transfer certificates, birth records, and medical files uploaded to SchoolOS are stored in private, cryptographically signed storage buckets accessible only via temporary, authenticated tokens.',
    },
    {
      icon: '🗑️',
      title: 'Data Retention & Deletion Protocols',
      desc: 'Schools retain full legal ownership of their institutional data. Upon written request or contract conclusion, school management can export complete records or trigger permanent cryptographic deletion.',
    },
    {
      icon: '🤖',
      title: 'AI Data Privacy & Boundary Protection',
      desc: 'Our AI assistance features operate with human-in-the-loop oversight. Student private disciplinary, medical, and sensitive personal identifiers are strictly segregated and never used for public model training.',
    },
    {
      icon: '🇮🇳',
      title: 'Alignment with Indian DPDP Framework',
      desc: 'SchoolOS is actively designed to align with India’s Digital Personal Data Protection (DPDP) Act, prioritizing parental consent protocols, legitimate data usage, and lawful institutional storage.',
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>DATA INTEGRITY & TRUST</div>
          <h1 className={styles.title}>Protecting your school community is our sacred responsibility</h1>
          <p className={styles.sub}>
            Schools handle the most sensitive data in society: children’s identities, daily whereabouts, and family contacts.
            Here is our comprehensive blueprint for security, tenant isolation, and DPDP alignment.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.pillarsGrid}>
            {securityPillars.map((p, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.statementBox}>
            <h3>Our Security Integrity Commitment</h3>
            <p>
              We commit to complete transparency. SchoolOS maintains modern architectural safeguards, encryption standards,
              and strict data residency within India. We do not make premature claims of third-party audit badges without
              official institutional verification. When you partner with SchoolOS, you receive a clear, enforceable Data
              Processing Agreement outlining all technical safeguards.
            </p>
            <div className={styles.actionRow}>
              <Link href="/privacy-policy" className="btn btn-outline">
                Read Full Privacy Policy →
              </Link>
              <Link href="/book-demo" className="btn btn-primary">
                Schedule a Security & Architecture Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
