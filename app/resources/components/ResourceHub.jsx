'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Globe, FileText, PlayCircle, Divide, BookOpen, ArrowRight, MousePointerClick } from 'lucide-react';

const iconMap = {
    MessageSquare,
    Globe,
    FileText,
    PlayCircle,
    Divide,
    BookOpen
};

const ResourceHub = ({ categories, featuredPost, latestArticles }) => {
    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">

                {/* Featured Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
                    {/* Main Featured Article (Left) */}
                    <div className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-gray-900 aspect-[4/3] lg:aspect-auto min-h-[500px]">
                        {featuredPost.image && (
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent flex flex-col justify-end p-10 lg:p-16">
                            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block w-fit">Featured Article</span>
                            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 line-clamp-3">
                                {featuredPost.excerpt || featuredPost.description}
                            </p>
                            <Link href={featuredPost.href || `/blog/${featuredPost.slug}`} className="flex items-center gap-3 text-white font-bold group/btn text-lg">
                                Read Article
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-blue-600 transition-colors">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </Link>
                        </div>
                        <Link href={featuredPost.href || `/blog/${featuredPost.slug}`} className="absolute inset-0 z-10" />
                    </div>

                    {/* Trending Articles (Right) */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <h3 className="text-2xl font-serif text-[#0a1628] mb-2 flex items-center gap-3">
                            Trending Now
                            <div className="h-0.5 flex-1 bg-gray-100" />
                        </h3>
                        {latestArticles.map((article, idx) => (
                            <Link key={idx} href={article.href || `/blog/${article.slug}`} className="group flex flex-col gap-4 py-4 border-b border-gray-100 last:border-0 hover:-translate-y-1 transition-transform">
                                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{article.category}</span>
                                <h4 className="text-xl font-serif text-[#0a1628] group-hover:text-blue-600 transition-colors leading-snug">
                                    {article.title}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.readTime || '5 min read'}</span>
                                </div>
                            </Link>
                        ))}

                        <div className="mt-auto bg-blue-50 p-8 rounded-[2rem] relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold text-blue-900 mb-2">Grow Your Hotel</h4>
                                <p className="text-blue-700/80 mb-6 font-medium">Get our best resources delivered weekly.</p>
                                <button className="w-full bg-[#0a1628] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="mb-24">
                    <h3 className="text-3xl font-serif text-[#0a1628] mb-12">Browse by Category</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => {
                            const Icon = iconMap[cat.icon] || MessageSquare;
                            return (
                                <Link
                                    key={idx}
                                    href={cat.href}
                                    className="group p-8 rounded-[2.5rem] border border-gray-100 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all flex flex-col items-start"
                                >
                                    <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-7 h-7 ${cat.textColor}`} />
                                    </div>
                                    <h4 className="text-2xl font-serif text-[#0a1628] mb-3 group-hover:text-blue-600 transition-colors">
                                        {cat.title}
                                    </h4>
                                    <p className="text-gray-500 mb-10 leading-relaxed font-medium">
                                        {cat.description}
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#0a1628] group-hover:gap-4 transition-all uppercase tracking-widest">
                                        Explore {cat.title}
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Newsletter / CTA */}
                <div className="bg-[#0a1628] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
                            Ready to transform your hotel management?
                        </h2>
                        <p className="text-gray-400 text-lg lg:text-xl mb-12">
                            Join over 50,000 hoteliers who receive our weekly insights and operational tools.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                            />
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 active:scale-95">
                                Join Now
                            </button>
                        </form>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default ResourceHub;
