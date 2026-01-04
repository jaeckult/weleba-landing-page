'use client';

import { useState, useMemo } from 'react';
import { Plus, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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
      <section className="bg-[#f9f7f2] py-24 px-6">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-[#dce6f2] px-4 py-2 rounded-lg mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-sm font-medium text-[#0a1628]">
                  {heroContent?.tag || 'Booking Engine'}
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-serif font-normal text-[#0a1628] leading-[1.1] tracking-tight mb-8">
                {heroContent?.title || 'Commission-Free Direct Hotel Booking Engine for Hotels'}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                {heroContent?.description || 'Create guest-friendly booking pages with clear rate calendars for choosing dates and rooms. Customize to match your brand, add upsell options, and sync with your PMS.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2">
                  {heroContent?.cta || 'Book A Demo'}
                </button>
              </div>
            </div>

            {/* Right Video */}
            <div className="lg:w-1/2 mt-16 px-4">
              <div className="relative" style={{
                WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 20%, transparent 80%)'
              }}>
                <video
                  className="w-full aspect-[16/9] object-cover rounded-2xl shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={heroContent?.videoPoster}
                >
                  <source src={heroContent?.videoSrc || '/hero-video.mp4'} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="bg-[#f9f7f2] py-32 px-6">
          <div className="container mx-auto max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              {/* LEFT SIDE: Fixed Content */}
              <div className="lg:w-[40%] lg:sticky lg:top-12 space-y-12">
                <div>
                  <div className="inline-flex items-center gap-3 bg-[#e8e9e1] px-5 py-2.5 rounded-full mb-10 border border-black/5">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-[#0a1628] uppercase tracking-wider">{locale === 'am' ? 'ተደጋጋሚ ጥያቄዎች' : 'Frequently Asked Questions'}</span>
                  </div>
                  <h2 className="text-6xl lg:text-[5rem] font-serif text-[#0a1628] leading-[1.05] tracking-tight mb-4">
                    {locale === 'am' ? 'ስለ ቦታ ማስያዣ ሞተር ለሚነሱ ጥያቄዎች መልሶች' : 'Answers to Your Questions About Booking Engine'}
                  </h2>
                </div>
              </div>

              {/* RIGHT SIDE: Filtered Content */}
              <div className="lg:w-[60%] w-full">
                {/* Custom Styled Tab Bar */}
                {categories.length > 1 && (
                  <div className="bg-[#eeede8] p-2.5 rounded-[2rem] flex mb-12 w-full lg:max-w-xl shadow-inner border border-black/5">
                    {categories.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`flex-1 py-4 rounded-[1.5rem] text-lg font-bold transition-all duration-300 ${activeTab === tab
                          ? 'bg-white text-[#0a1628] shadow-lg scale-[1.02]'
                          : 'text-gray-500 hover:text-gray-800'
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                )}

                {/* Accordion List */}
                <div className="space-y-5 mb-12">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={`${activeTab}-${index}`}
                      className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 border border-transparent hover:border-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-12 py-10 flex items-center justify-between text-left group"
                      >
                        <span className="text-2xl font-semibold text-[#0a1628] pr-10 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#0a1628] rotate-90' : 'bg-white shadow-md'}`}>
                          {openIndex === index ? (
                            <X size={24} className="text-white" />
                          ) : (
                            <Plus size={24} className="text-gray-400 group-hover:text-blue-600" />
                          )}
                        </div>
                      </button>
                      <div
                        className={`px-12 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index ? 'max-h-[600px] pb-12' : 'max-h-0'
                          }`}
                      >
                        <div className="h-px w-full bg-gray-100 mb-8" />
                        <p className="text-gray-500 leading-relaxed text-xl max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Card */}
                <div className="relative">
                  <div className="bg-[#eeede8] p-12 rounded-[3rem] relative overflow-visible max-w-md ml-auto">
                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
                      {locale === 'am' ? 'የጥያቄዎን መልስ አላገኙም?' : "Don't see your question answered?"}<br />
                      {locale === 'am' ? 'ቡድናችን ግላዊ መልሶችን እና መመሪያዎችን ሊሰጥዎ ይችላል።' : 'Our team can provide personalized answers and guidance.'}
                    </p>
                    <button className="bg-white text-[#0a1628] px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3">
                      {locale === 'am' ? 'ያግኙን' : 'Contact Us'}
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute -bottom-4 right-16 w-10 h-10 bg-[#eeede8] rotate-45 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-[#0a1628] py-20 px-6 mx-6 rounded-[3rem] mb-24">
        <div className="container mx-auto max-w-[1400px] text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            {locale === 'am' ? 'ቀጥታ ቦታ ማስያዝን ለማሳደግ ዝግጁ ነዎት?' : 'Ready to Boost Your Direct Bookings?'}
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {locale === 'am' ? 'ያለ ኮሚሽን ቀጥታ ቦታ ማስያዣዎችን ለመቀበል welebaን የሚጠቀሙ በሺዎች የሚቆጠሩ ሆቴሎችን ይቀላቀሉ' : 'Join thousands of hoteliers using weleba Booking Engine to capture commission-free direct bookings.'}
          </p>
          <button className="bg-white text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3 mx-auto">
            {locale === 'am' ? 'ማሳያ ያስይዙ' : 'Book A Demo'}
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BookingEngineHero;

