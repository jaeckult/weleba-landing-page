'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const NewsList = ({ articles, categories }) => {
    const { locale } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [displayCount, setDisplayCount] = useState(6);

    const filteredArticles = articles.filter(article => {
        return selectedCategory === 'all' || article.category === selectedCategory;
    });

    const displayedArticles = filteredArticles.slice(0, displayCount);
    const hasMore = displayedArticles.length < filteredArticles.length;

    const loadMore = () => {
        setDisplayCount(prev => prev + 6);
    };

    const strings = {
        en: {
            latestPosts: 'Latest Posts',
            filterByCategory: 'Filter by category',
            readMore: 'Read More',
            loadMore: 'Load More',
            noArticles: 'No news articles found',
            tryDifferent: 'Try selecting a different category.',
            viewAll: 'View All News'
        },
        am: {
            latestPosts: 'የቅርብ ጊዜ ዜናዎች',
            filterByCategory: 'በምድብ ይለዩ',
            readMore: 'ተጨማሪ ያንብቡ',
            loadMore: 'ተጨማሪ አሳይ',
            noArticles: 'ምንም ዜና አልተገኘም',
            tryDifferent: 'እባክዎን ሌላ ምድብ ይምረጡ።',
            viewAll: 'ሁሉንም ዜናዎች አሳይ'
        }
    }[locale];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header with Category Filter */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                            {strings.latestPosts}
                        </h2>
                        <div className="hidden md:flex items-center gap-2 text-gray-600">
                            <Filter className="w-5 h-5" />
                            <span className="text-sm font-medium">{strings.filterByCategory}</span>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.slug}
                                onClick={() => {
                                    setSelectedCategory(category.slug);
                                    setDisplayCount(6); // Reset display count when changing category
                                }}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category.slug
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Articles (First 2) */}
                {displayedArticles.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {displayedArticles.slice(0, 2).map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden bg-gray-100">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-sm font-semibold">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-4">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                                        <Link href={`/news/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <Link
                                        href={`/news/${article.slug}`}
                                        className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        {strings.readMore}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Regular Grid (Remaining Articles) */}
                {displayedArticles.length > 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedArticles.slice(2).map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{article.date}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                                        <Link href={`/news/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <Link
                                        href={`/news/${article.slug}`}
                                        className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        {strings.readMore}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Load More Button */}
                {hasMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={loadMore}
                            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            {strings.loadMore}
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <Filter className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{strings.noArticles}</h3>
                        <p className="text-gray-600 mb-6">{strings.tryDifferent}</p>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            {strings.viewAll}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsList;
