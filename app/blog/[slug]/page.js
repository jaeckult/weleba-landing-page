import { getPostData, getAllPostSlugs, getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import RelatedPosts from '../components/RelatedPosts';
import BlogCTA from '../../components/sections/BlogCTA';
import BlogContent from '../components/BlogContent';

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
    console.log('Fetching post for slug:', slug);
    let postData = null;
    try {
        postData = await getPostData(slug);
    } catch (error) {
        console.error('Error fetching post data:', error);
    }

    if (!postData) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center bg-gray-50 p-12 rounded-3xl max-w-lg w-full">
                    <h1 className="text-4xl font-serif text-[#0a1628] mb-6">Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog post you're looking for might have been moved or deleted.</p>
                    <Link href="/blog" className="inline-flex items-center gap-2 bg-[#0052ff] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
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
                <div className="max-w-[1200px] mx-auto">
                    <BlogContent contentHtml={postData.contentHtml} />

                    {/* Share / Tags section */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tags:</span>
                            <span className="text-sm text-gray-600 hover:text-[#0066FF] cursor-pointer">#{postData.category.replace(/\s+/g, '')}</span>
                            <span className="text-sm text-gray-600 hover:text-[#0066FF] cursor-pointer">#Hospitality2026</span>
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
