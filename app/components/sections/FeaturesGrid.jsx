'use client';

import Image from 'next/image';

/**
 * FeaturesGrid.jsx
 * Goal: very close visual replica of the stepped / separated cards UI
 */

export default function FeaturesGrid() {
  const rows = {
    top: [
      {
        title: 'Helps Boost Revenue',
        description:
          'Our integrated solutions help increase RevPAR by up to 35% with commission-free direct bookings and AI-powered pricing strategies.',
        image: '/image copy 5.png',
        alt: 'Revenue dashboard showing 35% increase',
      },
      {
        title: 'Built by Hoteliers for Hoteliers',
        description:
          "Building on our 30+ years of providing hospitality software, weleba understands your operational challenges because we've lived them.",
        image: '/image copy 6.png',
        alt: '30+ years of trust badge',
      },
    ],
    middle: {
      title: 'All-in-One Platform',
      description:
        'Everything you need to run your hotel in one seamless platform; connecting PMS, booking engine, channel manager, and payments.',
      image: '/image copy 7.png',
      alt: 'Platform integration diagram',
    },
    bottom: [
      {
        title: 'Easy to Learn',
        description:
          'Our system is so easy to use that staff can learn essential functions in hours, not weeks, reducing training time by up to 50%.',
        image: '/image copy 9.png',
        alt: 'Easy to learn training interface',
      },
      {
        title: 'Accessible Anywhere, Anytime',
        description:
          'Access your property management system securely from anywhere, on any device. All updates and backups happen automatically with 99.95% uptime guaranteed.',
        image: '/image copy 8.png',
        alt: 'Multi-device accessibility',
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
