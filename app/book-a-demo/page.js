'use client';

import DemoForm from './components/DemoForm';
import Testimonials from '../components/sections/Testimonials';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import { useLanguage } from '../context/LanguageContext';

export default function BookADemoPage() {
    const { locale } = useLanguage();

    const strings = {
        en: {
            testimonialTitle: 'Hear What Our Customers Have To Say',
            testimonialSubtitle: 'Join thousands of hotels worldwide who rely on weleba every day.'
        },
        am: {
            testimonialTitle: 'ደንበኞቻችን ምን እንደሚሉ ይስሙ',
            testimonialSubtitle: 'በየቀኑ በweleba የሚተማመኑ በዓለም ዙሪያ ያሉ በሺዎች የሚቆጠሩ ሆቴሎችን ይቀላቀሉ።'
        }
    }[locale];

    return (
        <main className="bg-white">
            <DemoForm />
            <div className="py-24 bg-[#f9f7f2]">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0a1628] mb-6">{strings.testimonialTitle}</h2>
                    <p className="text-xl text-gray-600">{strings.testimonialSubtitle}</p>
                </div>
                <Testimonials />
            </div>
            <LogoSlideshow />
        </main>
    );
}
