'use client';

import CaseStudyCard from '../components/sections/CaseStudyCard';
import { caseStudies as enCaseStudies, caseStudiesPageContent as enPageContent } from '../lib/caseStudiesData';
import { caseStudies as amCaseStudies, caseStudiesPageContent as amPageContent } from '../lib/caseStudiesData.am';
import { useLanguage } from '../context/LanguageContext';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import CTA from '../components/sections/CTA';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function CaseStudiesPage() {
    const { locale } = useLanguage();
    const caseStudies = locale === 'am' ? amCaseStudies : enCaseStudies;
    const pageContent = locale === 'am' ? amPageContent : enPageContent;
    const { hero, trustedBy, cta } = pageContent;

    return (
        <main className="bg-[#F7F6F3]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white border-b border-gray-100">
                <div className="px-6 lg:px-8">
                    <div className="max-w-[1320px] mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                                {hero.tag}
                            </span>
                        </div>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#0a1628] leading-tight mb-6"
                            dangerouslySetInnerHTML={{ __html: hero.title.replace('\n', '<br />') }}
                        />
                        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            {hero.description}
                        </p>

                        {/* Featured Video Placeholder */}
                        <div className="max-w-4xl mx-auto relative group cursor-pointer">
                            <div className="aspect-video bg-gray-900 rounded-[2rem] overflow-hidden relative shadow-2xl">
                                <Image
                                    src={hero.featured.image}
                                    alt={hero.featured.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-[#0066FF] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 text-left">
                                    <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">{hero.featured.tag}</p>
                                    <h3 className="text-white text-2xl font-bold">{hero.featured.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Cloud Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="px-6 lg:px-8">
                    <div className="max-w-[1320px] mx-auto text-center mb-10">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">{trustedBy}</p>
                    </div>
                    <LogoSlideshow showHeader={false} />
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24">
                <div className="px-6 lg:px-8">
                    <div className="max-w-[1320px] mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {caseStudies.map((study, index) => (
                                <ScrollReveal key={study.id} delay={index * 0.1}>
                                    <CaseStudyCard study={study} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <ScrollReveal>
                <CTA
                    title={cta.title}
                    subtitle={cta.subtitle}
                    primaryCTA={{ text: cta.buttonText, href: "/book-a-demo" }}
                />
            </ScrollReveal>
        </main>
    );
}
