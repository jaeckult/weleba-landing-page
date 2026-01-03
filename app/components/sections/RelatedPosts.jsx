import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const RelatedPosts = ({ posts }) => {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        Related Articles
                    </h2>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.slice(0, 3).map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <span className="text-sm font-semibold text-blue-600">
                                    {post.category}
                                </span>
                                <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RelatedPosts;
