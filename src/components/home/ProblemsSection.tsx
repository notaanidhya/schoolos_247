'use client';

import { useEffect, useRef, useState } from 'react';
import { FileSpreadsheet, MessageSquare, Shuffle, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './ProblemsSection.module.css';

const PROBLEMS = [
  {
    icon: <FileSpreadsheet size={22} color="#EF4444" />,
    title: 'Manual administration',
    desc: 'Repeated data entry, registers and spreadsheets consume hours of staff time every single day.',
    color: '#EF4444',
  },
  {
    icon: <MessageSquare size={22} color="#F59E0B" />,
    title: 'Scattered communication',
    desc: 'Important messages fragmented across WhatsApp groups, phone calls, and notice boards.',
    color: '#F59E0B',
  },
  {
    icon: <Shuffle size={22} color="#6366F1" />,
    title: 'Disconnected workflows',
    desc: 'Attendance, leave, fees and administration operate in separate systems that don\'t talk to each other.',
    color: '#6366F1',
  },
  {
    icon: <BarChart3 size={22} color="#EC4899" />,
    title: 'Limited visibility',
    desc: 'School management lacks a consolidated, real-time view of daily operations and pending work.',
    color: '#EC4899',
  },
];

export default function ProblemsSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--blue">The Problem</div>
            <h2 className={`heading-lg ${styles.headline}`}>
              Schools don&apos;t need more software complexity.
              <br />
              <span className="gradient-text">They need better-connected operations.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div
          ref={gridRef}
          className={`${styles.grid} ${isVisible ? styles.gridVisible : ''}`}
        >
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={
                {
                  '--card-color': p.color,
                  '--stagger-delay': `${i * 110}ms`,
                } as React.CSSProperties
              }
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{p.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
