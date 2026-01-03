'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Filter, Search, Calendar, ChevronRight } from 'lucide-react';

const ResourceCard = ({ item, type }) => {
    // Determine CTA text based on type
    const getCtaText = () => {
        if (type === 'template') return 'See Checklist';
        if (type === 'calculator') return 'Calculate Now';
        if (type === 'alternative') return 'Compare Now';
        if (type === 'webinar') return 'Watch Now';
        if (type === 'ebook') return 'Download Now';
        return 'Read More';
    };

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gray-50">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50">
                        {/* Placeholder icon if no image */}
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                            <span className="text-2xl font-bold">{item.title[0]}</span>
                        </div>
                    </div>
                )}

                {/* Type/Category Badge */}
                {(item.type || item.category) && (
                    <div className="absolute top-6 left-6">
                        <span className="bg-white/95 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                            {item.type || item.category}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-8">
                {item.date && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                    </div>
                )}

                <h3 className="text-2xl font-serif text-[#0a1628] leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>

                {item.description && (
                    <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                        {item.description}
                    </p>
                )}

                {/* Comparison Logos for Alternatives */}
                {type === 'alternative' && item.comparisonLogos && (
                    <div className="flex items-center gap-6 mb-8 py-4 border-y border-gray-50">
                        {item.comparisonLogos.map((logo, idx) => (
                            <div key={idx} className="flex-1 flex justify-center grayscale group-hover:grayscale-0 transition-all">
                                <span className="font-bold text-gray-400">{logo}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex items-center text-blue-600 font-bold group-hover:gap-3 gap-2 transition-all">
                    <span>{getCtaText()}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* Link Overlay */}
            <Link href={item.href || '#'} className="absolute inset-0 z-10">
                <span className="sr-only">View {item.title}</span>
            </Link>
        </div>
    );
};

const ResourceGrid = ({ items, categories = [], type, title = "Latest Resources" }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [items, selectedCategory, searchQuery]);

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0a1628] mb-4">
                            {title}
                        </h2>
                        {categories.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-6">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${selectedCategory === 'all'
                                            ? 'bg-[#0a1628] text-white shadow-xl'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    All
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                                                ? 'bg-[#0a1628] text-white shadow-xl'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-900"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {filteredItems.map((item, index) => (
                            <ResourceCard key={index} item={item} type={type} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-[3rem]">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-serif text-[#0a1628] mb-2">No results found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResourceGrid;
