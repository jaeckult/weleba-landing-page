'use client';

import { useState } from 'react';
import { Calendar, Share2, LineChart, Globe, ArrowUpRight } from 'lucide-react';

import { revenueIntelligenceContent as enRev, labels as enLabels } from '../../lib/constants';
import { revenueIntelligenceContent as amRev, labels as amLabels } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

const RevenueVisibility = () => {
  const { locale } = useLanguage();
  const content = locale === 'am' ? amRev : enRev;
  const labels = locale === 'am' ? amLabels : enLabels;
  const [activeTab, setActiveTab] = useState(0);

  const iconMap = {
    'Booking Engine': Calendar,
    'የቦታ ማስያዣ ሞተር': Calendar,
    'Channel Manager': Share2,
    'የቻናል ማኔጀር': Share2,
    'Revenue Intelligence': LineChart,
    'የገቢ መረጃ': LineChart,
    'Hotel Website Builder': Globe,
    'የሆቴል ድረ-ገጽ ግንቢ': Globe,
  };

  const tabs = content.features.map((f, i) => {
    // Default images based on index
    let imageSrc;
    if (i === 0) imageSrc = '/image-copy-13-no-money.png';
    else if (i === 1) imageSrc = '/image copy 14.png';
    else if (i === 2) imageSrc = '/revenue-intelligence-no-dollars.png';
    else imageSrc = '/image copy 14.png';

    return {
      ...f,
      id: i,
      icon: iconMap[f.title] || Calendar,
      image: imageSrc,
      link: f.href
    };
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-blue-600">{locale === 'am' ? 'የገቢ እድገት' : 'Revenue Growth'}</span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-[#0a1628] mb-6 leading-tight max-w-xl"
            style={{ fontFamily: 'Recoleta, Georgia, serif' }}
          >
            {content.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            {content.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Interactive Preview */}
          <div className="rounded-3xl relative min-h-[500px] overflow-hidden">
            {/* Display the image for the active tab */}
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Old complex content - keeping for reference but not rendering */}
          <div className="hidden">
            <div className="relative h-full flex items-center justify-center">
              {activeTab === 0 && (
                <div className="w-full max-w-sm">
                  {/* Direct Bookings Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-sm text-gray-500">Direct Bookings</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="6" />
                          <circle cx="32" cy="32" r="28" fill="none" stroke="#0066FF" strokeWidth="6"
                            strokeDasharray="176" strokeDashoffset="44" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#0a1628]">25.67%<span className="text-green-500 text-sm ml-1">↑</span></div>
                        <div className="flex gap-4 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#0066FF] rounded-full"></span> Direct</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-300 rounded-full"></span> Indirect</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seamless Booking Badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md text-xs font-medium text-gray-700 flex items-center gap-2">
                    <Calendar size={14} className="text-[#0066FF]" />
                    Seamless Booking Experience
                  </div>

                  {/* Date Picker Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Check In</div>
                        <div className="text-2xl font-bold text-[#0a1628]">20</div>
                        <div className="text-xs text-gray-500">July 2025</div>
                        <div className="text-xs text-gray-400">Friday</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Check out</div>
                        <div className="text-2xl font-bold text-[#0a1628]">28</div>
                        <div className="text-xs text-gray-500">July 2025</div>
                        <div className="text-xs text-gray-400">Saturday</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Occupancy</div>
                      <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700">
                        1 Room for 2 Adults
                      </div>
                    </div>
                    <button className="w-full bg-[#0066FF] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                      <span>🔍</span> Search Rooms
                    </button>
                  </div>

                  {/* Room Cards */}
                  <div className="absolute bottom-8 right-0 space-y-2">
                    <div className="bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 w-48">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">Family Suite Room</div>
                        <div className="text-sm font-bold text-[#0a1628]">$390.00</div>
                        <div className="text-xs text-gray-400">per night</div>
                      </div>
                      <div className="w-6 h-6 bg-[#0066FF] rounded text-white flex items-center justify-center text-xs">+</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 w-48">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">Standard Double Room</div>
                        <div className="text-sm font-bold text-[#0a1628]">$270.00</div>
                        <div className="text-xs text-gray-400">per night</div>
                      </div>
                      <div className="w-6 h-6 bg-[#0066FF] rounded text-white flex items-center justify-center text-xs">+</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="w-full max-w-sm text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <Share2 size={48} className="text-[#0066FF] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">Channel Manager</h3>
                    <p className="text-gray-600 text-sm">Sync across 100+ OTAs including Booking.com, Expedia, and Airbnb</p>
                    <div className="flex justify-center gap-2 mt-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                      <div className="w-10 h-10 bg-red-100 rounded-full"></div>
                      <div className="w-10 h-10 bg-yellow-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="w-full max-w-sm text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <LineChart size={48} className="text-[#0066FF] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">Revenue Intelligence</h3>
                    <p className="text-gray-600 text-sm">AI-powered dynamic pricing to maximize your RevPAR</p>
                    <div className="mt-4 text-3xl font-bold text-green-500">+35%</div>
                    <div className="text-sm text-gray-500">Average RevPAR increase</div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="w-full max-w-sm text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <Globe size={48} className="text-[#0066FF] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">Website Builder</h3>
                    <p className="text-gray-600 text-sm">Beautiful, mobile-optimized websites that convert</p>
                    <div className="mt-4 bg-gray-100 rounded-lg p-4">
                      <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Tab List */}
          <div className="space-y-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${isActive
                    ? 'bg-[#E8E6E1]'
                    : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${isActive ? 'bg-blue-100' : 'bg-white'}`}>
                        <Icon size={20} className={isActive ? 'text-[#0066FF]' : 'text-gray-500'} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0a1628] mb-1">{tab.title}</h3>
                        {isActive && (
                          <>
                            <p className="text-gray-600 text-sm mb-3">{tab.description}</p>
                            <a
                              href={tab.link}
                              className="inline-flex items-center gap-1 text-[#0a1628] font-medium text-sm hover:underline"
                            >
                              {locale === 'am' ? 'ተጨማሪ ዕወቅ' : 'Learn'} <ArrowUpRight size={14} />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    {isActive && (
                      <div className="w-8 h-8 border-2 border-[#0066FF] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueVisibility;
