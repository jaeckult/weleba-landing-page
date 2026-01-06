'use client';

import { CheckCircle } from 'lucide-react';
import PricingForm from './PricingForm';
import { pricingHeroContent as enPricingHero } from '../../lib/pricingData';
import { pricingHeroContent as amPricingHero } from '../../lib/pricingData.am';
import { useLanguage } from '../../context/LanguageContext';

const PricingHero = () => {
    const { locale } = useLanguage();
    const pricingHeroContent = locale === 'am' ? amPricingHero : enPricingHero;
    const { tag, title, description, benefits } = pricingHeroContent;

    return (
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1320px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                                <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">
                                    {tag}
                                </span>
                            </div>
                            <h1
                                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal text-[#0a1628] leading-tight mb-4 sm:mb-6"
                                dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br />') }}
                            />
                            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed max-w-xl">
                                {description}
                            </p>

                            <div className="space-y-3 sm:space-y-4 mb-8 lg:mb-0">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                            <PricingForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingHero;
