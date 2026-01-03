'use client';

import { useState, useMemo } from 'react';
import { Plus, X } from 'lucide-react';

const allFaqs = [
  // FEATURES TAB
  {
    category: 'Features',
    question: 'What makes weleba different from other property management systems?',
    answer: 'weleba offers a truly unified platform that connects your PMS, booking engine, channel manager, and payments in one seamless interface. It reduces the need for multiple disparate systems by providing everything in one dashboard.'
  },
  {
    category: 'Features',
    question: 'What Features Are Most Important in a Hotel PMS?',
    answer: 'Key features include reservation management, front desk operations, reporting, and channel management integration. A robust PMS like weleba is essential for optimizing operations and boosting revenue.'
  },
  {
    category: 'Features',
    question: 'What Types of Properties Can Be Managed with weleba\'s Property Management Software?',
    answer: 'Our software is built for every property type, including independent hotels, hotel groups, B&B and Inns, parks, resorts, and motels.'
  },
  {
    category: 'Features',
    question: 'What is a Property Management System?',
    answer: 'A Property Management System (PMS) is a software solution that streamlines hotel operations by automating tasks like reservations, check-ins, billing, and reporting.'
  },
  // SETUP TAB
  {
    category: 'Setup',
    question: 'How long does the implementation process take?',
    answer: 'Our system is so easy to use that staff can learn essential functions in hours, not weeks, reducing training time by up to 50%.'
  },
  {
    category: 'Setup',
    question: 'What kind of hardware do I need?',
    answer: 'None! Access your property management system securely from anywhere, on any device. Our cloud-based solution eliminates the need for expensive on-site servers.'
  },
  // SUPPORT TAB
  {
    category: 'Support',
    question: 'What is your uptime guarantee?',
    answer: 'We provide a 99.95% uptime guarantee to ensure your hotel operations never stop.'
  },
  {
    category: 'Support',
    question: 'Do you offer 24/7 technical support?',
    answer: 'Yes, we provide 360° property management with 24/7 support across all our global offices.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('Features');

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter(faq => faq.category === activeTab);
  }, [activeTab]);

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
                <span className="text-sm font-bold text-[#0a1628] uppercase tracking-[0.15em]">Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#0a1628] leading-tight">
                Answers to Your Questions About weleba
              </h2>
            </div>

            {/* Support/Contact Card - Matches beige bubble in image */}
            <div className="bg-[#eeede8] p-12 rounded-[3.5rem] relative overflow-visible max-w-[460px]">
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Don't see your question answered? Our team can provide personalized answers and guidance.
              </p>
              <button className="bg-white text-[#0a1628] px-8 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                Contact Us
              </button>
              {/* Decorative Speech Bubble Tip */}
              <div className="absolute -bottom-4 right-20 w-12 h-12 bg-[#eeede8] rotate-45 rounded-sm" />
            </div>
          </div>

          {/* RIGHT SIDE: Content scrolls naturally */}
          <div className="lg:w-[58%] w-full">
            {/* Pill-shaped Tab Navigation */}
            <div className="bg-[#eeede8] p-2.5 rounded-[2.5rem] flex mb-12 w-full lg:max-w-xl border border-black/5">
              {['Features', 'Setup', 'Support'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex-1 py-4 rounded-[2rem] text-base font-semibold transition-all duration-300 ${
                    activeTab === tab 
                    ? 'bg-white text-[#0a1628] shadow-md' 
                    : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab}
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
                    className={`px-8 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      openIndex === index ? 'max-h-[800px] pb-8' : 'max-h-0'
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