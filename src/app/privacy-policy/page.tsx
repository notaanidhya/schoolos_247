import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy & DPDP Framework — School247',
  description:
    'Comprehensive privacy policy and data governance practices of School247 in alignment with the Indian Digital Personal Data Protection Act.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.paper}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.meta}>
            Last updated: November 2026 • Compliant with Indian DPDP Act 2023 Guidelines
          </div>

          <div className={styles.content}>
            <h2>1. Introduction & Institutional Scope</h2>
            <p>
              School247 (“we,” “our,” or “the Platform”) operates as an operational technology software-as-a-service (SaaS)
              provider for recognized primary, secondary, and senior secondary schools in India. This Privacy Policy
              governs how personal data belonging to school administrators, faculty, parents, and minor students is collected,
              processed, isolated, and stored.
            </p>

            <h2>2. Role of School247 as a Data Processor</h2>
            <p>
              Under the Indian Digital Personal Data Protection (DPDP) Act, the educational institution (the school) acts
              as the <strong>Data Fiduciary</strong>, determining the legal basis and scope of student and guardian record
              collection. School247 operates strictly as a <strong>Data Processor</strong> on behalf of and according to
              explicit operational instructions provided by the contracting school.
            </p>

            <h2>3. Categories of Information Processed</h2>
            <ul>
              <li>
                <strong>Student Information:</strong> Name, class section, roll number, admission number, date of birth,
                guardian contact details, daily attendance logs, examination scores, and academic report cards.
              </li>
              <li>
                <strong>Parent & Guardian Information:</strong> Verified mobile phone number, official email address,
                fee payment transaction references, and digital communication read receipts.
              </li>
              <li>
                <strong>Faculty & Staff Information:</strong> Name, designated subject allocations, school credentials,
                and attendance logs.
              </li>
            </ul>

            <h2>4. Processing of Minor Student Data & Parental Consent</h2>
            <p>
              We recognize the heightened sensitivity of minor student data. In strict accordance with the DPDP framework:
            </p>
            <ul>
              <li>
                Verifiable parental consent is facilitated through the contracting school upon student admission or digital
                portal onboarding via OTP authentication.
              </li>
              <li>
                School247 never undertakes behavioral tracking, targeted commercial advertising, or profiling of children.
              </li>
              <li>
                Student profiles are accessible exclusively by verified legal guardians linked through pre-authorized
                school records.
              </li>
            </ul>

            <h2>5. Data Isolation & Technical Security Measures</h2>
            <p>
              All institutional data is logically segregated using tenant isolation architecture. Records belonging to
              one school are cryptographically and architecturally inaccessible to any other school.
            </p>
            <ul>
              <li>All network transmissions use TLS 1.3 cryptographic encryption.</li>
              <li>All persistent databases and document vaults are encrypted at rest using AES-256.</li>
              <li>Strict Role-Based Access Control (RBAC) ensures staff only view necessary operational data.</li>
            </ul>

            <h2>6. Artificial Intelligence & Automated Processing</h2>
            <p>
              AI features within School247 (such as administrative draft generation and parent FAQ resolution) operate
              strictly under human-in-the-loop controls. Student disciplinary records, confidential health details,
              and personally identifying numbers are never exposed to public LLM training datasets.
            </p>
            
            <h2>7. Data Retention & Deletion Rights</h2>
            <p>
              Institutional records are maintained for the duration of the school’s active service agreement. Upon termination
              or school management’s written request, a full export of school records is provided, followed by permanent
              cryptographic erasure from production servers within 45 days.
            </p>

            <h2>8. Contact Our Data Protection Officer</h2>
            <p>
              If you have inquiries regarding privacy practices, DPDP alignment, or exercising data rights, please contact:
              <br />
              <strong>Data Protection Officer, School247</strong>
              <br />
              Email: <a href="mailto:privacy@school247.in">privacy@school247.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
