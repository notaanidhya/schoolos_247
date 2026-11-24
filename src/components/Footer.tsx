'use client';

import Link from 'next/link';
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
    { label: 'Blog', href: '/resources' },
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
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}><span>S</span></div>
              <span className={styles.logoText}>SchoolOS</span>
            </Link>
            <p className={styles.tagline}>
              The AI Operations Layer for Schools.<br />
              Connecting school operations, parents and<br />
              teachers through intelligent workflows.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
            </div>
            <div className={styles.contact}>
              <a href="mailto:hello@schoolos.in" className={styles.contactLink}>hello@schoolos.in</a>
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
            <span className={styles.madeBadge}>
              🇮🇳 Made in India
            </span>
            <span className={styles.betaBadge}>Beta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
