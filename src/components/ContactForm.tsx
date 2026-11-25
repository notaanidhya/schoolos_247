'use client';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from '@/app/contact/contact.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '30px 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <CheckCircle2 size={44} color="#10B981" />
        </div>
        <h3 style={{ color: 'var(--navy)', marginBottom: '8px' }}>Message Received!</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          Thank you for reaching out. A School247 educational representative will respond within 4 business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name">Your Name *</label>
        <input type="text" id="name" required placeholder="e.g. Meenakshi Sundaram" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="school">School / Organization *</label>
        <input type="text" id="school" required placeholder="e.g. Model English High School" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" required placeholder="meenakshi@schooledu.in" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone / WhatsApp Number</label>
        <input type="tel" id="phone" placeholder="+91 98765 00000" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">How can we assist you? *</label>
        <textarea id="message" rows={4} required placeholder="Tell us about your requirements or questions..." />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
