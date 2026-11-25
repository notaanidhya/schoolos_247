import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy — SchoolOS',
  description: 'How SchoolOS utilizes strictly necessary session cookies and privacy-respecting analytics.',
};

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.paper}>
          <h1 className={styles.title}>Cookie Policy</h1>
          <div className={styles.meta}>Effective Date: November 2026</div>

          <div className={styles.content}>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your browser or device by web servers to remember authentication
              states and user preferences.
            </p>

            <h2>2. How SchoolOS Uses Cookies</h2>
            <p>
              SchoolOS uses cookies exclusively for essential platform functionality and strictly privacy-preserving
              operational metrics:
            </p>
            <ul>
              <li>
                <strong>Strictly Necessary Cookies:</strong> Required to maintain secure authenticated sessions for school
                administrators, teachers, and parents. Without these cookies, authenticated portal access is impossible.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Used to remember selected language preferences or active dashboard
                filters across browser refreshes.
              </li>
              <li>
                <strong>Privacy-First Analytics:</strong> Aggregated, non-personally identifiable telemetry to understand
                page load performance and optimize server responsiveness.
              </li>
            </ul>

            <h2>3. No Third-Party Commercial Advertising Cookies</h2>
            <p>
              SchoolOS does <strong>NOT</strong> host third-party behavioral advertising cookies, ad networks, or data
              broker trackers on any student, parent, or administrative portals.
            </p>

            <h2>4. Managing Your Cookie Preferences</h2>
            <p>
              You can control or disable cookies via your browser settings. However, disabling strictly necessary cookies
              will prevent logging in to the SchoolOS portal.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions regarding our cookie practices, please contact:
              <br />
              Email: <a href="mailto:privacy@school247.in">privacy@school247.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
