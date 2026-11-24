import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './resources.module.css';

export const metadata: Metadata = {
  title: 'Resources & School Guides — SchoolOS',
  description:
    'Operational playbooks, DPDP guides, and best practices for modern Indian school administrators and educators.',
};

const ARTICLES = [
  {
    tag: 'Compliance & Legal',
    title: 'The Indian School Administrator’s Guide to the DPDP Act',
    desc: 'Understanding parental consent, student data residency, and lawful administrative processing under India’s Digital Personal Data Protection framework.',
    readTime: '6 min read',
  },
  {
    tag: 'School Operations',
    title: 'How Tier-2 Private Schools Cut Fee Delinquency by 40%',
    desc: 'Why automated WhatsApp reminders with instant UPI links outperform uncomfortable collection calls and paper slips every single term.',
    readTime: '5 min read',
  },
  {
    tag: 'Parent Communication',
    title: 'Ending the Parent WhatsApp Group Nightmare',
    desc: 'How structured official broadcast feeds protect teacher privacy and restore healthy institutional boundaries with parent bodies.',
    readTime: '4 min read',
  },
  {
    tag: 'EdTech Strategy',
    title: 'ERP vs. Operations Layer: What Indian Schools Really Need',
    desc: 'Why traditional school ERPs suffer from poor teacher adoption and why connected operational workflows are the future of school management.',
    readTime: '7 min read',
  },
];

export default function ResourcesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>KNOWLEDGE HUB</div>
          <h1 className={styles.title}>Actionable guides for visionary school leaders</h1>
          <p className={styles.sub}>
            Explore operational strategies, data compliance insights, and playbooks authored specifically
            for Indian private schools.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {ARTICLES.map((art, idx) => (
              <div key={idx} className={styles.articleCard}>
                <div className={styles.cardTag}>{art.tag}</div>
                <h2 className={styles.cardTitle}>{art.title}</h2>
                <p className={styles.cardDesc}>{art.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>📖 {art.readTime}</span>
                  <Link href="/book-demo" className={styles.readLink}>
                    Learn in Demo →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.newsletterBox}>
            <div className={styles.newsContent}>
              <h3>Get the School Leadership Dispatch</h3>
              <p>Monthly operational playbooks, regulatory updates, and school efficiency strategies delivered to your inbox.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
