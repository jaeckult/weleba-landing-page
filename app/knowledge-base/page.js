'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

export default function KnowledgeBaseComingSoon() {
    return (
        <div className="min-h-screen bg-[#f9f7f2] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                <div className="bg-white rounded-[3rem] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/50 backdrop-blur-sm">
                    {/* Icon Bubble */}
                    <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm relative group">
                        <BookOpen className="w-10 h-10 text-blue-600 relative z-10" />
                        <div className="absolute inset-0 bg-blue-100/50 rounded-3xl rotate-6 transition-transform group-hover:rotate-12" />
                    </div>

                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-800 uppercase tracking-wider">Coming Soon</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#0a1628] mb-6 leading-tight">
                        Knowledge Base
                    </h1>

                    <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg mx-auto">
                        We're building a comprehensive library of guides, tutorials, and resources to help you master weleba. Stay tuned!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a1628] text-white rounded-xl font-bold hover:bg-blue-900 transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/10">
                            <ArrowLeft size={20} />
                            Return Home
                        </Link>
                        <Link href="/support" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a1628] border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all">
                            Contact Support
                        </Link>
                    </div>
                </div>

                <p className="mt-8 text-gray-400 text-sm font-medium">
                    &copy; {new Date().getFullYear()} weleba. All rights reserved.
                </p>
            </div>
        </div>
    );
}
