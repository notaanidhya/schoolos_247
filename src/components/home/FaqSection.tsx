'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './FaqSection.module.css';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Do we have to replace our existing school ERP software to use School247?',
    a: 'No. School247 is designed as an operations layer that can work alongside your existing setup. If your school already uses software for basic fee receipts or accounting, School247 connects parent communication, mobile applications, admissions, and attendance without disrupting your current database.',
  },
  {
    q: 'How long does onboarding and deployment take for a typical school?',
    a: 'A standard single-campus school (up to 1,500 students) is fully operational within 3 to 7 working days. Our dedicated onboarding specialists assist with roster data formatting, class configurations, and conducting a 45-minute remote or in-person workshop for your teachers.',
  },
  {
    q: 'How will parents download and use the app? What if some parents do not have smartphones?',
    a: 'Parents receive a secure, 1-tap activation SMS with their child’s profile pre-linked. The app is free on Android and accessible via modern web browsers. For parents who do not use smartphones or lack internet access, School247 automatically falls back to standard SMS and WhatsApp notifications for critical alerts such as unexcused absences and emergency circulars.',
  },
  {
    q: 'How does School247 protect sensitive student and guardian data?',
    a: 'Data privacy is paramount. School247 adheres to Indian data protection standards, including the Digital Personal Data Protection (DPDP) Act. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Each school has strict tenant data isolation, and parent profiles are strictly verified to prevent unauthorized access to child records.',
  },
  {
    q: 'Can teachers easily mark attendance and homework without spending extra hours?',
    a: 'Yes. Teacher ergonomics was the primary driver in designing School247. Roll call takes under 60 seconds per section with a clean 1-tap interface. Homework distribution takes less than 2 minutes. Crucially, parent-teacher queries are routed within strict working hours so teachers are never disturbed on personal WhatsApp during evenings or weekends.',
  },
  {
    q: 'What is the role of AI in School247? Is it safe for school use?',
    a: 'AI in School247 acts strictly as an administrative assistant with human oversight ("human-in-the-loop"). It drafts circular notices, answers common parent admission FAQs, and provides natural-language reports for leadership (e.g. "Show attendance trend for Grade 9"). AI never makes automated decisions on disciplinary or grading matters.',
  },
  {
    q: 'How does school fee collection work with School247?',
    a: 'School247 integrates with leading RBI-authorized Indian payment gateways (like Razorpay). Parents can pay via UPI (Google Pay, PhonePe, Paytm), Net Banking, or Debit/Credit Cards. Receipts are generated immediately in the parent app, and payments reconcile in real time on the school accountant’s dashboard.',
  },
  {
    q: 'What ongoing support does School247 provide?',
    a: 'Every school is assigned an Account Specialist. We provide phone, WhatsApp, and email support during school operating hours, plus comprehensive video tutorials and help guides for staff, teachers, and parents.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</div>
          <h2 className={styles.headline}>
            Everything school leadership needs to know
          </h2>
          <p className={styles.sub}>
            Have questions about implementation, data security, or coexistence with your existing ERP? Here are direct answers.
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.qText}>{item.q}</span>
                  <span className={styles.toggleIcon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.supportBox}>
          <div className={styles.supportText}>
            <strong>Have a question specific to your institution?</strong>
            <span>Our educational specialists are available to discuss your setup.</span>
          </div>
          <Link href="/contact" className="btn btn-secondary">
            Speak to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
