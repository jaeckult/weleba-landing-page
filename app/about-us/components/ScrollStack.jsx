'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollStack = ({ images }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const cards = cardsRef.current;
    
    if (!scrollSection || cards.length === 0) return;

    const totalImages = images.length;
    const scrollHeight = 400 * totalImages; // vh units per image

    // Set initial positions
    cards.forEach((card, index) => {
      if (!card) return;
      gsap.set(card, {
        scale: 0.92,
        y: index * 80,
        opacity: index === 0 ? 1 : 0.4,
        rotation: index % 2 === 0 ? -1.5 : 1.5,
        zIndex: totalImages - index,
      });
    });

    // Create master ScrollTrigger
    ScrollTrigger.create({
      trigger: scrollSection,
      start: 'top top',
      end: `+=${scrollHeight}vh`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        cards.forEach((card, index) => {
          if (!card) return;

          const segmentStart = index / totalImages;
          const segmentEnd = (index + 1) / totalImages;
          
          // Calculate card-specific progress (0 to 1)
          let cardProgress = 0;
          if (progress >= segmentStart && progress <= segmentEnd) {
            cardProgress = (progress - segmentStart) / (segmentEnd - segmentStart);
          } else if (progress > segmentEnd) {
            cardProgress = 1;
          } else if (progress < segmentStart) {
            cardProgress = 0;
          }

          // Scale: 0.92 -> 1.0 -> 0.92
          const scale = cardProgress <= 0.5
            ? 0.92 + (cardProgress * 0.16)
            : 1.0 - ((cardProgress - 0.5) * 0.16);

          // Y position: start stacked, move up when active, continue up
          const startY = index * 80;
          const activeY = index * 25;
          const endY = (index - 1) * 80;
          
          let y = startY;
          if (cardProgress <= 0.5) {
            y = startY + (activeY - startY) * (cardProgress * 2);
          } else {
            y = activeY + (endY - activeY) * ((cardProgress - 0.5) * 2);
          }

          // Opacity: fade in/out
          let opacity = 0.4;
          if (cardProgress >= 0.15 && cardProgress <= 0.85) {
            opacity = 1;
          } else if (cardProgress < 0.15) {
            opacity = 0.4 + (cardProgress / 0.15) * 0.6;
          } else {
            opacity = 1 - ((cardProgress - 0.85) / 0.15) * 0.6;
          }

          // Rotation: straighten when active
          const startRotate = index % 2 === 0 ? -1.5 : 1.5;
          const endRotate = index % 2 === 0 ? 1.5 : -1.5;
          let rotate = startRotate;
          if (cardProgress <= 0.5) {
            rotate = startRotate * (1 - cardProgress * 2);
          } else {
            rotate = endRotate * ((cardProgress - 0.5) * 2);
          }

          // Z-index: active card on top
          let zIndex = totalImages - index;
          if (cardProgress >= 0.25 && cardProgress <= 0.75) {
            zIndex = totalImages + 10;
          }

          // Apply animations
          gsap.to(card, {
            scale,
            y,
            opacity,
            rotation: rotate,
            zIndex,
            duration: 0.1,
            ease: 'none',
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images.length]);

  return (
    <section ref={containerRef} className="bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div ref={scrollSectionRef} className="h-[400vh] relative">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="absolute w-full max-w-5xl h-[75vh] lg:h-[85vh]"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt || `About section ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 1280px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
