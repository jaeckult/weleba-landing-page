'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const BlogList = ({ posts, categories }) => {
    const { locale } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())) ?? false;
        return matchesCategory && matchesSearch;
    });

    const strings = {
        en: {
            searchPlaceholder: 'Search articles...',
            showing: 'Showing',
            records: filteredPosts.length === 1 ? 'article' : 'articles',
            readMore: 'Read More',
            noResults: 'No articles found',
            noResultsDesc: "Try adjusting your search or filter to find what you're looking for.",
            clearFilters: 'Clear Filters'
        },
        am: {
            searchPlaceholder: 'ጽሁፎችን ይፈልጉ...',
            showing: 'የሚታዩት',
            records: 'ጽሁፎች',
            readMore: 'ተጨማሪ ያንብቡ',
            noResults: 'ምንም ጽሁፍ አልተገኘም',
            noResultsDesc: 'እባክዎን ፍለጋዎን ወይም ምድብዎን በማስተካከል ይሞክሩ።',
            clearFilters: 'ሁሉንም አሳይ'
        }
    }[locale];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Search and Filter Bar */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="relative max-w-2xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder={strings.searchPlaceholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.slug}
                                onClick={() => setSelectedCategory(category.slug)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category.slug
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-gray-600">
                        {strings.showing} <span className="font-semibold text-gray-900">{filteredPosts.length}</span> {strings.records}
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                                >
                                    {strings.readMore}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <Search className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{strings.noResults}</h3>
                        <p className="text-gray-600 mb-6">{strings.noResultsDesc}</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {strings.clearFilters}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogList;
