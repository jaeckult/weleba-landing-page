import { getPostData, getAllPostSlugs, getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import RelatedPosts from '../components/RelatedPosts';
import BlogCTA from '../../components/sections/BlogCTA';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.params.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        return {
            title: 'Post Not Found | weleba',
        };
    }

    return {
        title: `${post.title} | weleba Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-[#0052ff] hover:underline">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const allPosts = getSortedPostsData();
    const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="bg-[#f8fafc] pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0052ff] mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Blog</span>
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-blue-50 text-[#0052ff] px-3 py-1 rounded-full font-medium">
                            {postData.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{postData.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{postData.readTime}</span>
                        </div>
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl text-[#0a1628] font-normal leading-[1.1] mb-8"
                        style={{ fontFamily: "'Recoleta M', serif" }}
                    >
                        {postData.title}
                    </h1>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                        <div>
                            <div className="font-semibold text-[#0a1628]">{postData.author}</div>
                            <div className="text-sm text-gray-500">Industry Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-blue max-w-none 
                        prose-headings:font-serif prose-headings:text-[#0a1628] prose-headings:font-normal
                        prose-p:text-gray-700 prose-p:leading-relaxed
                        prose-a:text-[#0052ff] prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-img:mx-auto
                        prose-strong:text-[#0a1628] prose-strong:font-semibold">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {postData.contentHtml}
                        </ReactMarkdown>
                    </div>

                    {/* Share / Tags section */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tags:</span>
                            <span className="text-sm text-gray-600 hover:text-[#0052ff] cursor-pointer">#{postData.category.replace(/\s+/g, '')}</span>
                            <span className="text-sm text-gray-600 hover:text-[#0052ff] cursor-pointer">#Hospitality2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <RelatedPosts posts={relatedPosts} />
            )}

            <BlogCTA />
        </article>
    );
}
