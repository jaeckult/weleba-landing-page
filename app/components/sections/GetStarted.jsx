'use client';

import { useState, useEffect } from 'react';
import { getStartedContent as enGetStarted } from '../../lib/constants';
import { getStartedContent as amGetStarted } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

const GetStarted = () => {
  const { locale } = useLanguage();
  const content = locale === 'am' ? amGetStarted : enGetStarted;

  const steps = content.steps.map((step, index) => {
    const decorations = [
      {
        bgColor: 'bg-gray-200',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 34.75%, 86.25% 34.75%, 86.25% 63.25%, 86.25% 100%, 0% 100%)',
      },
      {
        bgColor: 'bg-blue-100',
        clipPath: 'polygon(13.75% 0%, 100% 0%, 100% 34.75%, 86.25% 34.75%, 86.25% 63.25%, 86.25% 100%, 0% 100%, 0% 42.64%, 13.75% 42.64%, 13.75% 15.94%)',
      },
      {
        bgColor: 'bg-blue-200',
        clipPath: 'polygon(13.75% 0%, 100% 0%, 100% 34.75%, 100% 55%, 100% 69.75%, 100% 100%, 0% 100%, 0% 42.64%, 13.75% 42.64%, 13.75% 15.94%)',
      },
    ];
    return { ...step, ...decorations[index] };
  });

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="py-24 bg-[#f9f7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-blue-600">{content.tag}</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#0a1628] leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'Recoleta, Georgia, serif' }}
          >
            {content.title}
          </h2>
        </div>

        {/* Steps Grid - Desktop only interlocking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`${step.bgColor} rounded-3xl lg:rounded-none relative min-h-[400px] flex flex-col justify-between ${index === 0
                ? 'p-8 lg:p-12 lg:pr-20'
                : index === 1
                  ? 'p-8 lg:p-12 lg:px-16'
                  : 'p-8 lg:p-12 lg:pl-16'
                }`}
              style={{
                clipPath: isLargeScreen ? step.clipPath : 'none',
              }}
            >
              {/* Step Number Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-200 rounded-full mb-8">
                <span className="text-2xl font-bold text-[#0a1628]">{step.number}</span>
              </div>

              {/* Step Content */}
              <div>
                <h3
                  className="text-2xl lg:text-3xl text-[#0a1628] leading-tight"
                  style={{ fontFamily: 'Recoleta, Georgia, serif' }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Decorative Form Elements for Step 1 */}
              {index === 0 && (
                <div className="mt-8 space-y-3 opacity-30">
                  <div className="h-10 bg-white rounded-lg border border-gray-300" />
                  <div className="h-10 bg-white rounded-lg border border-gray-300" />
                  <div className="h-10 bg-white rounded-lg border border-gray-300" />
                </div>
              )}

              {/* Decorative Chart Elements for Step 2 */}
              {index === 1 && (
                <div className="mt-8 flex gap-2 opacity-30">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex-1 h-16 bg-white rounded-lg border border-gray-300" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
