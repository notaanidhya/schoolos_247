'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'All Features', href: '/features' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'For School Owners', href: '/solutions/school-owners' },
      { label: 'For Principals', href: '/solutions/principals' },
      { label: 'For Administrators', href: '/solutions/administrators' },
      { label: 'For Teachers', href: '/solutions/teachers' },
      { label: 'For Parents', href: '/solutions/parents' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Guides & Playbooks', href: '/resources' },
      { label: 'School Leadership Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    if (window.innerWidth >= 1024) {
      e.preventDefault();
      if (openDropdown === label) {
        setOpenDropdown(null);
      } else {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenDropdown(label);
      }
    }
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Animated Logo */}
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

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.children && handleMouseEnter(link.label)}
              onMouseLeave={() => link.children && handleMouseLeave()}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${openDropdown === link.label ? styles.navLinkActive : ''}`}
                onClick={(e) => link.children && toggleDropdown(link.label, e)}
              >
                {link.label}
                {link.children && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {link.children && openDropdown === link.label && (
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={styles.dropdownItem}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/book-demo" className="btn btn-primary btn--md">
            Book a Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileInner}>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className={styles.mobileSubLinks}>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/book-demo" className="btn btn-primary btn--lg" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
