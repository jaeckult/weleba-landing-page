import Link from 'next/link';
import { ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';

const BlogCTA = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                            Ready to study smarter with Burbly?
                        </h2>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            Join millions of learners who use Burbly to master new skills faster with AI and spaced repetition.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/book-a-demo">
                                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                 Get Started Free
                                </button>
                            </Link>
                            <Link href="/pricing">
                                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-all border-2 border-white/20">
                                    View Pricing
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">1M+</div>
                            <div className="text-blue-100">Active Learners</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">4×</div>
                            <div className="text-blue-100">Retention Boost</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">24/7</div>
                            <div className="text-blue-100">Offline Support</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">100K+</div>
                            <div className="text-blue-100">Community Decks</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogCTA;
