import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import styles from './careers.module.css';

export const metadata: Metadata = {
  title: 'Careers — School247',
  description:
    'Join School247 in building the modern operating layer for Indian schools. Explore open engineering, design, and implementation roles.',
};

const VALUES = [
  {
    icon: <Briefcase size={22} />,
    title: 'Mission-Driven Impact',
    desc: 'Our technology directly touches thousands of students, teachers, and school leaders across India every morning.',
  },
  {
    icon: <Zap size={22} />,
    title: 'High Agency & Craft',
    desc: 'We are a small, focused team of engineers and operators who take pride in pragmatic, rock-solid software.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Customer Empathy',
    desc: 'We build with deep respect for educators’ time and boundaries. No vanity features, only real utility.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Fair & Sustainable',
    desc: 'Competitive compensation, meaningful equity, flexible working arrangements, and true ownership.',
  },
];

const ROLES = [
  {
    title: 'Full-Stack Software Engineer',
    team: 'Core Platform & Mobile Services',
    type: 'Full-time',
    location: 'Bangalore / Remote',
    experience: '2 - 5 years',
  },
  {
    title: 'School Implementation Specialist',
    team: 'Customer Success & Field Onboarding',
    type: 'Full-time',
    location: 'Delhi NCR / Field',
    experience: '1 - 4 years',
  },
  {
    title: 'Product Designer (UI/UX)',
    team: 'Web & Mobile Design System',
    type: 'Full-time',
    location: 'Bangalore / Remote',
    experience: '2 - 4 years',
  },
  {
    title: 'Institutional Partnerships Lead',
    team: 'Growth & School Relations',
    type: 'Full-time',
    location: 'Mumbai / Pune / Hybrid',
    experience: '3 - 6 years',
  },
];

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>JOIN OUR TEAM</div>
          <h1 className={styles.title}>Build the operating layer for India’s schools</h1>
          <p className={styles.sub}>
            We’re on a mission to modernize school operations with clarity, reliability, and respect for teachers.
            Work with us to transform education infrastructure nationwide.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.cultureGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.cultureCard}>
                <div className={styles.cultureIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.rolesSection}>
            <div className={styles.rolesHeader}>
              <h2>Open Positions</h2>
              <p>Find your next role with School247</p>
            </div>

            <div className={styles.jobsList}>
              {ROLES.map((role) => (
                <div key={role.title} className={styles.jobCard}>
                  <div className={styles.jobInfo}>
                    <h3>{role.title}</h3>
                    <div className={styles.jobMeta}>
                      <span>{role.team}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                      <span>•</span>
                      <span>{role.experience}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@school247.in?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="btn btn-secondary btn--sm"
                  >
                    Apply Now →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.applyBox}>
            <h3>Don’t see your exact role?</h3>
            <p>
              We are always excited to hear from talented builders, educators, and operators who share our vision.
              Send your profile and what you’d like to work on to our team.
            </p>
            <a href="mailto:careers@school247.in" className={styles.emailLink}>
              Reach out to careers@school247.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
