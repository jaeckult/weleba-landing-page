import { newsArticles } from '../../lib/newsData';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import RelatedNews from '../components/RelatedNews';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import NewsContent from '../components/NewsContent';

export async function generateStaticParams() {
    return newsArticles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = newsArticles.find(p => p.slug === slug);

    if (!article) {
        return {
            title: 'News Not Found | weleba',
        };
    }

    return {
        title: `${article.title} | weleba News`,
        description: article.excerpt,
    };
}

export default async function NewsPostPage({ params }) {
    const { slug } = await params;
    const article = newsArticles.find(p => p.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center bg-gray-50 p-12 rounded-3xl max-w-lg w-full">
                    <h1 className="text-4xl font-serif text-[#0a1628] mb-6">News Not Found</h1>
                    <p className="text-gray-600 mb-8">The news article you're looking for might have been moved or deleted.</p>
                    <Link href="/news" className="inline-flex items-center gap-2 bg-[#0052ff] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                        Back to News
                    </Link>
                </div>
            </div>
        );
    }

    const relatedNews = newsArticles.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="bg-[#f8fafc] pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0052ff] mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Back to News</span>
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-blue-50 text-[#0052ff] px-3 py-1 rounded-full font-medium">
                            {article.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl text-[#0a1628] font-normal leading-[1.1] mb-8"
                        style={{ fontFamily: "'Recoleta M', serif" }}
                    >
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                        <div>
                            <div className="font-semibold text-[#0a1628]">{article.author?.name || 'weleba Team'}</div>
                            <div className="text-sm text-gray-500">{article.author?.role || 'Contributor'}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-16">
                <div className="max-w-[1200px] mx-auto">
                    <NewsContent contentHtml={article.content} />

                    {/* Share / Tags section */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tags:</span>
                            <span className="text-sm text-gray-600 hover:text-[#0066FF] cursor-pointer">#{article.category.replace(/\s+/g, '')}</span>
                            <span className="text-sm text-gray-600 hover:text-[#0066FF] cursor-pointer">#Hospitality2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related News */}
            {relatedNews.length > 0 && (
                <RelatedNews articles={relatedNews} />
            )}

            <NewsletterSubscribe />
        </article>
    );
}
