'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Share2, LineChart, Globe, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'booking-engine',
    icon: Calendar,
    title: 'Booking Engine',
    description: 'Enable direct bookings with a seamless, user-friendly interface for guests.',
    image: '/image copy 5.png',
    tag: 'Revenue Growth',
    highlighted: true
  },
  {
    id: 'channel-manager',
    icon: Share2,
    title: 'Channel Manager',
    description: 'Manage all your distribution channels from one central platform.',
    image: '/image copy 6.png',
    tag: 'Revenue Growth'
  },
  {
    id: 'revenue-intelligence',
    icon: LineChart,
    title: 'Revenue Intelligence',
    description: 'AI-powered pricing strategies to maximize your revenue potential.',
    image: '/image copy 7.png',
    tag: 'Revenue Growth'
  },
  {
    id: 'website-builder',
    icon: Globe,
    title: 'Hotel Website Builder',
    description: 'Create a stunning website that converts visitors into bookings.',
    image: '/image copy 8.png',
    tag: 'Revenue Growth'
  }
];

const RevenueGrowth = () => {
  const [activeFeature, setActiveFeature] = useState('booking-engine');
  
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              {currentFeature.tag}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
              AI Revenue Intelligence & Hotel Visibility
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Powerful tools to maximize your revenue potential and expand your online presence.
            </p>

            {/* Feature Cards */}
            <div className="space-y-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeFeature === feature.id;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#0066FF] text-white shadow-xl scale-[1.02]' 
                        : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        isActive ? 'bg-white/20' : 'bg-blue-50'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isActive ? 'text-white' : 'text-[#0066FF]'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${
                          isActive ? 'text-white' : 'text-[#0a1628]'
                        }`}>
                          {feature.title}
                        </h3>
                        {isActive && (
                          <p className="text-sm text-white/90">
                            {feature.description}
                          </p>
                        )}
                      </div>
                      {isActive && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Learn</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                      {isActive && (
                        <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image Display */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  fill
                  className="object-contain transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevenueGrowth;
