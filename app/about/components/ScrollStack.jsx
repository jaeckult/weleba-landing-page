'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollStack = ({ images }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={containerRef} className="py-20 bg-white relative min-h-[200vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="sticky top-20 h-[600px] lg:h-[800px]">
          {images.map((image, index) => {
            const totalImages = images.length;
            const segmentSize = 1 / totalImages;
            const progressStart = index * segmentSize;
            const progressEnd = (index + 1) * segmentSize;
            const progressMid = progressStart + segmentSize / 2;
            
            // Scale: start smaller, grow as it comes into view, then shrink as it goes out
            const scale = useTransform(
              scrollYProgress,
              [progressStart, progressMid, progressEnd],
              [0.85 - (index * 0.05), 1 - (index * 0.03), 0.9 - ((index - 1) * 0.05)]
            );

            // Y position: move up as user scrolls
            const y = useTransform(
              scrollYProgress,
              [progressStart, progressMid, progressEnd],
              [index * 50, index * 20, (index - 1) * 50]
            );

            // Opacity: fade in and out
            const opacity = useTransform(
              scrollYProgress,
              [progressStart - 0.1, progressStart, progressEnd, progressEnd + 0.1],
              [0, 1, 1, 0]
            );

            // Rotation: slight rotation effect
            const rotate = useTransform(
              scrollYProgress,
              [progressStart, progressMid, progressEnd],
              [-2 + (index * 0.5), 0, 2 - ((index - 1) * 0.5)]
            );

            const zIndex = totalImages - index;

            return (
              <motion.div
                key={index}
                style={{
                  scale,
                  y,
                  opacity,
                  rotate,
                  zIndex,
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt || `About section ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;

