'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * FeaturesGrid.jsx
 * Refined visual replica matching roommaster.com features grid design
 */

import { whyChooseContent as enWhy } from '../../lib/constants';
import { whyChooseContent as amWhy } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

export default function FeaturesGrid() {
  const { locale } = useLanguage();
  const content = locale === 'am' ? amWhy : enWhy;
  const { features } = content;
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rows = {
    top: [
      {
        ...features[0],
        image: '/image copy 5.png',
        alt: features[0].title,
      },
      {
        ...features[1],
        image: '/image copy 6.png',
        alt: features[1].title,
      },
    ],
    middle: {
      ...features[2],
      image: '/image copy 7.png',
      alt: features[2].title,
    },
    bottom: [
      {
        ...features[3],
        image: '/image copy 9.png',
        alt: features[3].title,
      },
      {
        ...features[4],
        image: '/image copy 8.png',
        alt: features[4].title,
      },
    ],
  };

  const Card = ({ title, description, image, alt, notchSide }) => (
    <article
      className={`bg-[#E8E6E1] flex flex-col justify-between min-h-[400px] md:min-h-[560px] relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg group ${isMobile ? 'p-8' :
          notchSide === 'left'
            ? 'p-10 md:p-12 md:pl-28 lg:p-14 lg:pl-32'
            : notchSide === 'right'
              ? 'p-10 md:p-12 md:pr-28 lg:p-14 lg:pr-32'
              : 'p-10 md:p-12 lg:p-14'
        }`}
      style={{
        clipPath: isMobile ? 'none' : (
          notchSide === 'right'
            ? 'polygon(0 0, 100% 0, 100% 40%, calc(100% - 60px) 55%, calc(100% - 60px) 100%, 0 100%)'
            : notchSide === 'left'
              ? 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 55%, 60px 40%)'
              : notchSide === 'both'
                ? 'polygon(0 0, 10% 0, 10% 40px, 100% 40px, 100% 100%, 0 100%)'
                : 'none'
        )
      }}
    >
      {/* text */}
      <div className="relative z-10">
        <h3
          className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0a1628] mb-6 leading-[1.15] tracking-tight"
          style={{ fontFamily: 'Recoleta, Georgia, serif' }}
        >
          {title}
        </h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      {/* image */}
      <div className="relative w-full h-64 md:h-72 lg:h-80 mt-8 md:mt-10">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          priority={false}
        />
      </div>
    </article>
  );

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Card {...rows.top[0]} notchSide="right" />
            <Card {...rows.top[1]} notchSide="left" />
          </div>

          {/* Row 2 (single wide) */}
          <div className="grid grid-cols-1">
            <Card {...rows.middle} notchSide="both" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            <Card {...rows.bottom[0]} notchSide="right" />
            <Card {...rows.bottom[1]} notchSide="left" />
          </div>
        </div>
      </div>
    </section>
  );
}
