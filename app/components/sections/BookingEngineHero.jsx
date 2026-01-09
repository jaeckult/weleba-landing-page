'use client';

import { useState, useMemo } from 'react';
import { Plus, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

const BookingEngineHero = ({ children, heroContent, faqs = [] }) => {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  // Get unique categories from FAQs
  const categories = useMemo(() => {
    const cats = [...new Set(faqs.map(faq => faq.category))];
    return cats.length > 0 ? cats : ['General'];
  }, [faqs]);

  const [activeTab, setActiveTab] = useState(categories[0]);

  // Filter content based on active tab
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => faq.category === activeTab);
  }, [activeTab, faqs]);

  // Reset accordion when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f9f7f2] py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#dce6f2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-4 sm:mb-6 lg:mb-8">
                <div className="w-2 h-2 sm:w-2.5 bg-blue-600 rounded-full" />
                <span className="text-xs sm:text-sm font-medium text-[#0a1628]">
                  {heroContent?.tag || 'Booking Engine'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#0a1628] leading-[1.1] tracking-tight mb-4 sm:mb-6 lg:mb-8">
                {heroContent?.title || 'Commission-Free Direct Hotel Booking Engine for Hotels'}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl">
                {heroContent?.description || 'Create guest-friendly booking pages with clear rate calendars for choosing dates and rooms. Customize to match your brand, add upsell options, and sync with your PMS.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/book-a-demo">
                  <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto">
                    {heroContent?.cta || 'Book A Demo'}
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Video */}
            <div className="lg:w-1/2 mt-8 lg:mt-16 px-0 sm:px-4">
              <div className="relative" style={{
                WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)'
              }}>
                <img
                  src="/image copy 8.png"
                  alt="Booking Engine Dashboard"
                  className="w-full aspect-[16/9] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}


      {/* Footer CTA */}
      <section className="bg-[#0a1628] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mx-3 sm:mx-4 lg:mx-6 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] mb-12 sm:mb-16 lg:mb-24">
        <div className="container mx-auto max-w-[1400px] text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-white mb-4 sm:mb-6 px-2">
            {locale === 'am' ? 'ቀጥታ ቦታ ማስያዝን ለማሳደግ ዝግጁ ነዎት?' : 'Ready to Boost Your Direct Bookings?'}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-2">
            {locale === 'am' ? 'ያለ ኮሚሽን ቀጥታ ቦታ ማስያዣዎችን ለመቀበል welebaን የሚጠቀሙ በሺዎች የሚቆጠሩ ሆቴሎችን ይቀላቀሉ' : 'Join thousands of hoteliers using weleba Booking Engine to capture commission-free direct bookings.'}
          </p>
          <Link href="/book-a-demo">
            <button className="bg-white text-[#0a1628] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 sm:gap-3 mx-auto">
              {locale === 'am' ? 'ማሳያ ያስይዙ' : 'Book A Demo'}
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BookingEngineHero;

