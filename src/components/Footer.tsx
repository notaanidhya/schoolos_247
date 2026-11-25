'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const FOOTER_LINKS = {
  Product: [
    { label: 'Platform Overview', href: '/platform' },
    { label: 'All Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/security' },
  ],
  Solutions: [
    { label: 'For School Owners', href: '/solutions/school-owners' },
    { label: 'For Principals', href: '/solutions/principals' },
    { label: 'For Administrators', href: '/solutions/administrators' },
    { label: 'For Teachers', href: '/solutions/teachers' },
    { label: 'For Parents', href: '/solutions/parents' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a Demo', href: '/book-demo' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Data Protection', href: '/security' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={`${styles.logo} ${styles.logoAnimated}`}>
              <span className={styles.logoFrame}>
                <Image
                  src="/LOGO.png"
                  alt="School247 Logo"
                  width={220}
                  height={56}
                  className={styles.logoImg}
                  priority
                />
              </span>
            </Link>
            <p className={styles.tagline}>
              The AI Operations Layer for Schools.<br />
              Connecting school operations, parents and<br />
              teachers through intelligent workflows.
            </p>
            <div className={styles.contact}>
              <a href="mailto:hello@school247.in" className={styles.contactLink}>hello@school247.in</a>
              <span className={styles.contactSep}>·</span>
              <span className={styles.contactText}>India</span>
            </div>
          </div>

          {/* Links */}
          <div className={styles.links}>
            {Object.entries(FOOTER_LINKS).map(([group, items]) => (
              <div key={group} className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>{group}</h3>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className={styles.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 SchoolOS. All rights reserved. Built for schools across India.
          </p>
          <div className={styles.bottomBadge}>
            <span className={styles.madeBadge} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" style={{ borderRadius: '2px', overflow: 'hidden' }}>
                <rect width="16" height="4" fill="#FF9933"/>
                <rect y="4" width="16" height="4" fill="#FFFFFF"/>
                <rect y="8" width="16" height="4" fill="#138808"/>
                <circle cx="8" cy="6" r="1.5" stroke="#000080" strokeWidth="0.5" fill="none"/>
              </svg>
              Made in India
            </span>
            <span className={styles.betaBadge}>Beta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
