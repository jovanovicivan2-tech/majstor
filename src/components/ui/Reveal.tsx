'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('reveal-in');
        el.classList.remove('reveal-init');
        observer.unobserve(el);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal-base reveal-init ${className}`}>
      {children}
    </div>
  );
}
