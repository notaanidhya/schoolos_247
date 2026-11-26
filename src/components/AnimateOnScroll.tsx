'use client';
import { useEffect, useRef } from 'react';

type AnimationVariant = 'fade-up' | 'scale-in' | 'slide-left' | 'slide-right';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      el.classList.add('animate-visible');
      return;
    }

    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      data-animate-variant={variant}
      className={`animate-hidden animate-${variant} ${className}`}
    >
      {children}
    </div>
  );
}
