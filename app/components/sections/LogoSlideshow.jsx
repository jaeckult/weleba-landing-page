'use client';

import { useEffect, useRef } from 'react';

const LogoSlideshow = () => {
  const scrollRef = useRef(null);

  // Partner/Client logos
  const logos = [
    { name: 'Partner 1', url: '/image copy 2.png' },
    { name: 'Partner 2', url: '/image copy 3.png' },
    { name: 'Partner 3', url: '/image copy 4.png' },
    { name: 'Partner 4', url: '/image copy 5.png' },
    { name: 'Partner 5', url: '/image copy 6.png' },
    { name: 'Partner 6', url: '/image copy 7.png' },
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position for infinite loop
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="pt-4 pb-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Optional Header */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted by Leading Hotels Worldwide
          </p>
        </div>

        {/* Logo Slideshow */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlideshow;
