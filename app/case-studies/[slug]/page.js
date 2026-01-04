'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { caseStudies as enCaseStudies, caseStudiesPageContent as enPageContent } from '../../lib/caseStudiesData';
import { caseStudies as amCaseStudies, caseStudiesPageContent as amPageContent } from '../../lib/caseStudiesData.am';
import { useLanguage } from '../../context/LanguageContext';
import BlogContent from '../../blog/components/BlogContent';
import CTA from '../../components/sections/CTA';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function CaseStudyDetailsPage() {
    const { locale } = useLanguage();
    const caseStudies = locale === 'am' ? amCaseStudies : enCaseStudies;
    const pageContent = locale === 'am' ? amPageContent : enPageContent;
    const { detailPage } = pageContent;

    const { slug } = useParams();
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center bg-gray-50 p-12 rounded-3xl max-w-lg w-full">
                    <h1 className="text-4xl font-serif text-[#0a1628] mb-6">{detailPage.notFound.title}</h1>
                    <p className="text-gray-600 mb-8">{detailPage.notFound.message}</p>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                        {detailPage.notFound.buttonText}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="bg-gray-50 pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0066FF] mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>{detailPage.backToGallery}</span>
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-blue-100 text-[#0066FF] px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider">
                            {study.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{study.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{study.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0a1628] font-serif font-normal leading-tight mb-8">
                        {study.title}
                    </h1>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                {study.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-[#0a1628]">{study.author}</div>
                                <div className="text-xs text-gray-500">{study.hotel}</div>
                            </div>
                        </div>

                        <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

                        <div className="hidden sm:flex flex-wrap gap-4">
                            {study.stats.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                                    <span className="text-lg font-bold text-[#0066FF] leading-none">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-20">
                <div className="max-w-[1200px] mx-auto">
                    <ScrollReveal>
                        <BlogContent contentHtml={study.contentHtml} />
                    </ScrollReveal>
                </div>
            </section>

            {/* Final CTA */}
            <ScrollReveal>
                <CTA
                    title={detailPage.cta.title}
                    subtitle={detailPage.cta.subtitle}
                    primaryCTA={{ text: detailPage.cta.buttonText, href: "/pricing" }}
                />
            </ScrollReveal>
        </article>
    );
}
