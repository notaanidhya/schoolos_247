import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us — SchoolOS',
  description:
    'Get in touch with the SchoolOS educational technology team for product demonstrations, institutional partnerships, and support.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>GET IN TOUCH</div>
          <h1 className={styles.title}>We’re here to help your school thrive</h1>
          <p className={styles.sub}>
            Have questions about SchoolOS, need a customized institutional consultation, or want to discuss
            integration with your current systems? Our team is available.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Information & Channels */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h2 className={styles.cardHeading}>Direct Communication</h2>
                <div className={styles.channelList}>
                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>📧</div>
                    <div>
                      <strong>Email Inquiries</strong>
                      <a href="mailto:contact@schoolos.in">contact@schoolos.in</a>
                      <span>Responses within 4 business hours</span>
                    </div>
                  </div>
                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>💬</div>
                    <div>
                      <strong>WhatsApp / Phone Support</strong>
                      <span>+91 98765 43210</span>
                      <span>Mon – Sat, 8:00 AM – 6:00 PM IST</span>
                    </div>
                  </div>
                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>🏢</div>
                    <div>
                      <strong>Corporate Headquarters</strong>
                      <span>Bangalore & Delhi NCR, India</span>
                      <span>Serving schools nationwide</span>
                    </div>
                  </div>
                </div>

                <div className={styles.demoPrompt}>
                  <h3>Looking for a live product demo?</h3>
                  <p>Our dedicated demo session includes custom class setup and pricing quotes.</p>
                  <Link href="/book-demo" className="btn btn-primary">
                    Book a Free School Demo →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick General Message Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2 className={styles.cardHeading}>Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
