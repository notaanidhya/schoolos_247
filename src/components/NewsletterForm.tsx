'use client';
import { useState } from 'react';
import styles from '@/app/resources/resources.module.css';

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div style={{ color: '#93c5fd', fontWeight: 600, fontSize: '0.95rem' }}>
        ✓ Subscribed to School Leadership Dispatch!
      </div>
    );
  }

  return (
    <form
      className={styles.newsForm}
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
    >
      <input type="email" required placeholder="Enter principal or school email..." />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
}
