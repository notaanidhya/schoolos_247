import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog & Educational Insights — School247',
  description:
    'Thought leadership, operational analysis, and regulatory updates for Indian school principals, trustees, and administrators.',
};

const POSTS = [
  {
    tag: 'Institutional Strategy',
    title: 'Why Traditional School ERPs Fail in Indian Private Schools',
    desc: 'Most legacy school management systems were designed as glorified accounting software. Here is why modern school operations require workflow-centric layers built around teacher and parent habits.',
    date: 'Nov 18, 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Data Compliance',
    title: 'The Principal’s Checklist for Digital Personal Data Protection (DPDP)',
    desc: 'With India’s data privacy regulations taking full effect, what are the direct legal responsibilities of school heads regarding student records, biometric attendance, and parent consent?',
    date: 'Nov 10, 2026',
    readTime: '7 min read',
  },
  {
    tag: 'Teacher Well-Being',
    title: 'Restoring Evening Peace: Why School WhatsApp Groups Must End',
    desc: 'How unmonitored WhatsApp groups erode teacher morale and create legal liabilities for school leadership—and how official, verified circular feeds solve the crisis.',
    date: 'Oct 29, 2026',
    readTime: '4 min read',
  },
  {
    tag: 'Fee Operations',
    title: 'How Proactive Digital Invoicing Cuts Fee Delinquency by Over 35%',
    desc: 'Case patterns from Indian schools transitioning from paper fee slips and awkward phone calls to transparent, automated UPI reminders with instant digital receipts.',
    date: 'Oct 15, 2026',
    readTime: '6 min read',
  },
  {
    tag: 'Technology Architecture',
    title: 'Multi-Tenant Data Isolation in Educational Cloud Systems',
    desc: 'A technical deep-dive into how School247 guarantees complete logical data separation between institutions to prevent unauthorized access and data commingling.',
    date: 'Sep 28, 2026',
    readTime: '8 min read',
  },
  {
    tag: 'Parent Relations',
    title: 'Building Transparent Parent-School Partnerships That Last',
    desc: 'Modern parents expect real-time visibility into their child’s academic and behavioral milestones. How smart digital touchpoints transform parent anxiety into trust.',
    date: 'Sep 12, 2026',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>SCHOOL247 DISPATCH</div>
          <h1 className={styles.title}>Insights for Forward-Thinking School Leadership</h1>
          <p className={styles.sub}>
            In-depth perspectives on institutional governance, teacher ergonomics, parent engagement, and data protection in Indian K-12 education.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Featured Article */}
          <div className={styles.featuredCard}>
            <div className={styles.cardTag}>Featured Analysis</div>
            <h2>The Shift from Rigid Databases to Dynamic School Operations Layers</h2>
            <p>
              For decades, Indian schools purchased massive ERP packages with hundreds of complex sub-menus that teachers never touched.
              Today, leading educators are shifting toward focused, high-adoption operations layers that work where teachers and parents actually are: on lightweight mobile interfaces with zero friction.
            </p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', fontSize: '0.88rem', color: 'var(--muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={15} /> Nov 20, 2026
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} /> 6 min read
              </span>
              <Link href="/book-demo" className="btn btn-secondary btn--sm" style={{ marginLeft: 'auto' }}>
                Schedule Consultation →
              </Link>
            </div>
          </div>

          {/* Grid of Articles */}
          <div className={styles.grid}>
            {POSTS.map((post) => (
              <div key={post.title} className={styles.postCard}>
                <div className={styles.cardTag}>{post.tag}</div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className={styles.postMeta}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className={styles.newsletterBox}>
            <div className={styles.newsContent}>
              <h3>Get the Monthly Leadership Dispatch</h3>
              <p>Curated operational playbooks and regulatory summaries delivered straight to your inbox.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
