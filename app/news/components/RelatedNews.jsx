'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const RelatedNews = ({ articles }) => {
    const { locale } = useLanguage();

    const strings = {
        en: {
            title: 'Related News',
            viewAll: 'View All News'
        },
        am: {
            title: 'ተዛማጅ ዜናዎች',
            viewAll: 'ሁሉንም ዜናዎች አሳይ'
        }
    }[locale];

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        {strings.title}
                    </h2>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        {strings.viewAll}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.slice(0, 3).map((article) => (
                        <article
                            key={article.slug}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <span className="text-sm font-semibold text-blue-600">
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href={`/news/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-gray-500">{article.date}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        {strings.viewAll}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RelatedNews;
