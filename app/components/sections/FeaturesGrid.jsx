'use client';

import Image from 'next/image';

/**
 * FeaturesGrid.jsx
 * Goal: very close visual replica of the stepped / separated cards UI
 */

import { whyChooseContent as enWhy } from '../../lib/constants';
import { whyChooseContent as amWhy } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

export default function FeaturesGrid() {
  const { locale } = useLanguage();
  const content = locale === 'am' ? amWhy : enWhy;
  const { features } = content;

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
      className="bg-[#E8E6E1] p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[500px] relative overflow-visible"
      style={{
        clipPath: notchSide === 'right'
          ? 'polygon(0 0, 100% 0, 100% 45%, calc(100% - 32px) 45%, calc(100% - 32px) 100%, 0 100%)'
          : notchSide === 'left'
            ? 'polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 45%, 32px 45%, 32px 0)'
            : notchSide === 'both'
              ? 'polygon(0 0, 50% 0, 50% 32px, 100% 32px, 100% 100%, 0 100%)'
              : 'none'
      }}
    >

      {/* text */}
      <div>
        <h3
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-tight"
          style={{ fontFamily: 'Recoleta, Georgia, serif' }}
        >
          {title}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>

      {/* image */}
      <div className="relative w-full h-60 md:h-64 lg:h-72 mt-10">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </article>
  );

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Card {...rows.top[0]} notchSide="right" />
          <Card {...rows.top[1]} notchSide="left" />
        </div>

        {/* Row 2 (single wide) */}
        <div className="grid grid-cols-1">
          <Card {...rows.middle} notchSide="both" />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Card {...rows.bottom[0]} notchSide="right" />
          <Card {...rows.bottom[1]} notchSide="left" />
        </div>
      </div>
    </section>
  );
}
