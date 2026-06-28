'use client';
import { useState, useEffect } from 'react';

export interface RotatorImage { src: string; alt: string; }

/**
 * Cross-fade rotacija slika. Koristi se npr. u pizza sekciji.
 */
export default function ImageRotator({
  images,
  interval = 4000,
  className = '',
  objectPosition = 'center',
}: {
  images: RotatorImage[];
  interval?: number;
  className?: string;
  objectPosition?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {images.map((img, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition,
            opacity: idx === i ? 1 : 0,
            transition: 'opacity 1.4s var(--ease-premium)',
            transform: idx === i ? 'scale(1.04)' : 'scale(1)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '1.4s, 7s',
          }}
          aria-hidden={idx !== i}
        />
      ))}
    </div>
  );
}
