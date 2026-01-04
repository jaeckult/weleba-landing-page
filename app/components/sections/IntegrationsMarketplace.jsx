'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Grid3x3 } from 'lucide-react';
import { integrationsContent as enInt } from '../../lib/constants';
import { integrationsContent as amInt } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

const IntegrationsMarketplace = () => {
  const { locale } = useLanguage();
  const content = locale === 'am' ? amInt : enInt;
  const integrations = [
    '/INTEGRATION/image.png',
    '/INTEGRATION/image copy.png',
    '/INTEGRATION/image copy 2.png',
    '/INTEGRATION/image copy 3.png',
    '/INTEGRATION/image copy 4.png',
    '/INTEGRATION/image copy 5.png',
    '/INTEGRATION/image copy 6.png',
    '/INTEGRATION/image copy 7.png',
    '/INTEGRATION/image copy 8.png',
    '/INTEGRATION/image copy 9.png',
    '/INTEGRATION/image copy 10.png',
    '/INTEGRATION/image copy 11.png',
    '/INTEGRATION/image copy 12.png',
    '/INTEGRATION/image copy 13.png',
    '/INTEGRATION/image copy 14.png',
    '/INTEGRATION/image copy 15.png',
    '/INTEGRATION/image copy 16.png',
    '/INTEGRATION/image copy 17.png',
    '/INTEGRATION/image copy 18.png',
    '/INTEGRATION/image copy 19.png',
    '/INTEGRATION/image copy 20.png',
    '/INTEGRATION/image copy 21.png',
    '/INTEGRATION/image copy 22.png',
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{locale === 'am' ? 'የገበያ ቦታ' : 'Marketplace'}</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif text-[#0a1628] leading-tight max-w-3xl mx-auto">
            {content.title}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Blue Card */}
          <div className="bg-[#0066FF] rounded-[2.5rem] p-12 lg:p-16 text-white relative overflow-hidden">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-8">
              <Grid3x3 size={32} className="text-white" />
            </div>

            {/* Content */}
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {locale === 'am' ? 'welebaን ከ 100+ ' : 'Connect weleba with '}
              <span className="text-white/90">{locale === 'am' ? 'ከሶስተኛ ወገን መፍትሄዎች ጋር ያገናኙ' : '100+ third-party solutions'}</span>
            </h3>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              {content.subtitle}
            </p>

            {/* CTA Section */}
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/90 mb-4 font-medium">
                {locale === 'am' ? 'weleba ከሚወዷቸው መሳሪያዎች ጋር እንዴት እንደሚገናኝ ይመልከቱ' : 'See how weleba connects with your favorite tools'}
              </p>
              <Link
                href={content.cta.href}
                className="inline-block bg-white text-[#0066FF] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
              >
                {content.cta.text}
              </Link>
            </div>
          </div>

          {/* Right: Integration Logos Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 sm:gap-4">
            {integrations.map((src, index) => (
              <div
                key={index}
                className="bg-white aspect-square rounded-2xl flex items-center justify-center p-4 hover:scale-110 transition-transform cursor-pointer shadow-sm hover:shadow-md border border-gray-100"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Integration ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 25vw, 20vw"
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

export default IntegrationsMarketplace;
