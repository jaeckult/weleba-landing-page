'use client';

import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '../ui';
import { heroContent as enHero } from '../../lib/constants';
import { heroContent as amHero } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

const Hero = ({ content: propContent }) => {
  const { locale } = useLanguage();
  const defaultContent = locale === 'am' ? amHero : enHero;
  const content = propContent || defaultContent;
  return (
    <section className="relative min-h-screen pt-28 sm:pt-36 lg:pt-48 pb-12 sm:pb-16 lg:pb-20 overflow-x-clip">

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 lg:mb-8">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-blue-600">
              {content?.tag || 'Hospitality Management Software'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-serif font-normal text-[#1a1a1a] mb-4 sm:mb-6 leading-tight text-center px-2">
            {content.title.includes('actually work') ? (
              content.title.split('actually work').map((part, index) => (
                index === 0 ? (
                  <span key={index}>
                    {part}
                    <span className="text-[#0066FF]">actually work</span>
                  </span>
                ) : part
              ))
            ) : content.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            {content.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16">
            <Link href={content.cta?.primary?.href || '#'}>
              <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}>
                {content.cta?.primary?.text}
              </Button>
            </Link>
          </div>

        </div>

        {/* Dashboard Preview */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="max-w-5xl mx-auto relative">
            <div className="relative" style={{
              // Changed 50% to 20% so the fade starts much closer to the center
              WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)',
              maskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)'
            }}>
              {/* Dashboard Preview Video */}
              <video
                className="w-full aspect-[16/9] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
