'use client';

import { useState, useMemo } from 'react';
import { Plus, X } from 'lucide-react';
import { faqContent as enFaq } from '../../lib/constants';
import { faqContent as amFaq } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

const FAQSection = () => {
  const { locale } = useLanguage();
  const content = locale  === 'am' ? amFaq : enFaq;
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(content.categories[0].id);

  const filteredFaqs = useMemo(() => {
    return content.categories.find(c => c.id === activeTab)?.items || [];
  }, [activeTab, content]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section className="bg-[#f9f7f2] py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* LEFT SIDE: Sticky content remains in view while right side scrolls */}
          <div className="lg:w-[42%] lg:sticky lg:top-12 space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 bg-[#e8e9e1] px-5 py-2.5 rounded-full mb-10 border border-black/5">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-[#0a1628] uppercase tracking-[0.15em]">{locale === 'am' ? 'ተደጋጋሚ ጥያቄዎች' : 'Frequently Asked Questions'}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#0a1628] leading-tight">
                {content.title}
              </h2>
            </div>

            {/* Support/Contact Card - Matches beige bubble in image */}
            <div className="bg-[#eeede8] p-12 rounded-[3.5rem] relative overflow-visible max-w-[460px]">
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {locale === 'am' ? 'የጥያቄዎን መልስ አላገኙም? ቡድናችን ግላዊ መልሶችን እና መመሪያዎችን ሊሰጥዎ ይችላል።' : "Don't see your question answered? Our team can provide personalized answers and guidance."}
              </p>
              <button className="bg-white text-[#0a1628] px-8 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                {locale === 'am' ? 'ያግኙን' : 'Contact Us'}
              </button>
              {/* Decorative Speech Bubble Tip */}
              <div className="absolute -bottom-4 right-20 w-12 h-12 bg-[#eeede8] rotate-45 rounded-sm" />
            </div>
          </div>

          {/* RIGHT SIDE: Content scrolls naturally */}
          <div className="lg:w-[58%] w-full">
            {/* Pill-shaped Tab Navigation */}
            <div className="bg-[#eeede8] p-2.5 rounded-[2.5rem] flex mb-12 w-full lg:max-w-xl border border-black/5">
              {content.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={`flex-1 py-4 rounded-[2rem] text-base font-semibold transition-all duration-300 ${activeTab === category.id
                    ? 'bg-white text-[#0a1628] shadow-md'
                    : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Accordion list filtered by active category */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="bg-white rounded-[2.8rem] overflow-hidden transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-medium text-[#0a1628] pr-12 leading-tight group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-[#0a1628] rotate-180' : 'bg-white shadow-sm'}`}>
                      {openIndex === index ? (
                        <X size={18} className="text-white" />
                      ) : (
                        <Plus size={18} className="text-gray-400 group-hover:text-blue-600" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`px-8 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${openIndex === index ? 'max-h-[800px] pb-8' : 'max-h-0'
                      }`}
                  >
                    <div className="h-px w-full bg-gray-100 mb-10" />
                    <p className="text-gray-600 leading-relaxed text-base max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;