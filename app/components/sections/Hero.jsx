'use client';

import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '../ui';
import { heroContent } from '../../lib/constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-48 pb-20 overflow-x-clip">

      <div className="px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-blue-600">Hospitality Management Software</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-[56px] font-normal text-[#0a1628] mb-6 leading-tight text-center"
            style={{ 
              fontFamily: "Recoleta M",
              fontWeight: 400,
              fontStyle: 'normal',
              fontVariant: 'normal',
              fontKerning: 'auto',
              fontOpticalSizing: 'auto',
              fontStretch: '100%',
              textTransform: 'none',
              textDecoration: 'none',
              textAlign: 'center',
              textIndent: '0px'
            }}
          >
            {heroContent.title.split('actually work').map((part, index) => (
              index === 0 ? (
                <span key={index}>
                  {part}
                  <span className="text-[#00d4a4]">actually work</span>
                </span>
              ) : part
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href={heroContent.cta.primary.href}>
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {heroContent.cta.primary.text}
              </Button>
            </Link>
            
          </div>

          {/* Trust Badges */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00d4a4]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00d4a4]" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00d4a4]" />
              <span>24/7 Support</span>
            </div>
          </div> */}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16">
          <div className="max-w-5xl mx-auto relative">
            <div className="relative" style={{ 
              // Changed 50% to 20% so the fade starts much closer to the center
WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)',
maskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)'
            }}>
              {/* Browser Chrome */}
              
              
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
            
            {/* Floating Stats Cards */}
            {/* <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="bg-white rounded-xl shadow-xl p-4 animate-fade-in">
                <div className="text-3xl font-bold text-[#0a1628]">35%</div>
                <div className="text-sm text-gray-500">RevPAR Increase</div>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/3 hidden lg:block">
              <div className="bg-white rounded-xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-[#00d4a4]">50%</div>
                <div className="text-sm text-gray-500">Less Training Time</div>
              </div>
            </div>
            
            <div className="absolute -right-8 bottom-1/4 hidden lg:block">
              <div className="bg-white rounded-xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-[#0052cc]">100+</div>
                <div className="text-sm text-gray-500">Integrations</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
