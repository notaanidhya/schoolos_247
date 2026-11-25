import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us — School247',
  description:
    'Our mission to empower Indian schools with a modern AI operations layer that connects administrators, teachers, and parents.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>OUR MISSION</div>
          <h1 className={styles.title}>Reimagining how Indian schools run every single day</h1>
          <p className={styles.sub}>
            Schools are the bedrock of our society, yet their everyday operations remain trapped in paper registers,
            unorganized WhatsApp chats, and rigid software from decades ago. We are changing that.
          </p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyCard}>
            <div className={styles.storyHeader}>
              <div className={styles.eyebrow}>WHY SCHOOL247 EXISTS</div>
              <h2>Built from first-hand observations inside Indian schools</h2>
            </div>
            <div className={styles.storyBody}>
              <p>
                When you visit an independent private school in India—whether in a metro or a Tier 2/Tier 3 city—you
                witness dedicated teachers and administrators who are overwhelmed by administrative busywork.
                Teachers spend precious teaching minutes calling out morning roll calls and writing notices by hand.
                Administrators chase parents over the phone for delayed quarterly fees. And parents remain in the dark,
                relying on word-of-mouth or unmonitored WhatsApp groups.
              </p>
              <p>
                Existing school ERPs were built for accountants 15 years ago—not for teachers on smartphones, and certainly
                not for busy parents. They are complex databases that require weeks of training and suffer from near-zero
                daily user adoption.
              </p>
              <p>
                <strong>School247 was born out of a simple belief:</strong> Schools do not need more software complexity.
                They need a modern, intelligent operations layer that works alongside what they already have, automates
                repetitive administrative friction, and connects school communities with dignity and simplicity.
              </p>
            </div>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valCard}>
              <div className={styles.valIcon}><ShieldCheck size={26} color="#2563EB" /></div>
              <h3>Privacy by Design</h3>
              <p>
                We treat student and parent data with utmost sanctity. We strictly adhere to India’s DPDP framework
                with isolated school tenant architecture.
              </p>
            </div>
            <div className={styles.valCard}>
              <div className={styles.valIcon}><Zap size={26} color="#F59E0B" /></div>
              <h3>Teacher Ergonomics</h3>
              <p>
                If a feature takes more than 60 seconds of a teacher’s time, we redesign it. Faculty should teach, not do data entry.
              </p>
            </div>
            <div className={styles.valCard}>
              <div className={styles.valIcon}><Users size={26} color="#10B981" /></div>
              <h3>Respectful Coexistence</h3>
              <p>
                We never force schools to rip-and-replace trusted systems. We connect disparate workflows and elevate them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Join the School247 journey</h2>
            <p>Discover how your school can become a connected, digitally effortless institution.</p>
            <Link href="/book-demo" className="btn btn-primary btn--lg">
              Book a Leadership Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
