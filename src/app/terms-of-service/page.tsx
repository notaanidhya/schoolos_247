import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — School247',
  description: 'Terms and conditions governing the institutional use of the School247 SaaS platform.',
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.paper}>
          <h1 className={styles.title}>Terms of Service</h1>
          <div className={styles.meta}>Effective Date: November 2026</div>

          <div className={styles.content}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By signing an institutional Service Agreement or accessing the School247 platform, the contracting school,
              educational trust, or individual user agrees to be bound by these Terms of Service.
            </p>

            <h2>2. Authorized Institutional Use</h2>
            <p>
              School247 licenses its web and mobile applications solely for legitimate academic and administrative
              management of accredited schools. Users shall not attempt to reverse engineer, disrupt network infrastructure,
              or bypass authentication controls.
            </p>

            <h2>3. School Responsibilities & Data Accuracy</h2>
            <p>
              The school is responsible for maintaining the accuracy of student rosters, verifying parental relationship
              authorizations, and managing staff access credentials.
            </p>

            <h2>4. Service Availability & Uptime</h2>
            <p>
              We target 99.9% uptime during active school hours (Monday through Saturday, 7:00 AM – 7:00 PM IST).
              Scheduled maintenance is performed during off-peak weekend hours with advance administrative notice.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              School247 retains all rights, title, and interest in the platform software, user interface design, and
              proprietary workflow engines. The school retains 100% proprietary ownership over all institutional data
              and student records inputted into the platform.
            </p>

            <h2>6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any legal dispute shall
              be subject to the exclusive jurisdiction of the competent courts in India.
            </p>

            <h2>7. Inquiries</h2>
            <p>
              For contractual or legal queries, reach our legal team at:
              <br />
              Email: <a href="mailto:legal@school247.in">legal@school247.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
