'use client';

import { Phone, MessageCircle, CreditCard, BookOpen, PlayCircle, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const iconMap = {
    Phone,
    MessageCircle,
    CreditCard,
    BookOpen,
    PlayCircle,
    Sparkles
};

export default function SupportContent({ contactMethods, resources }) {
    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {contactMethods.map((method, idx) => {
                        const Icon = iconMap[method.icon];
                        return (
                            <div key={idx} className="group p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all flex flex-col items-start bg-white">
                                <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-7 h-7 ${method.textColor}`} />
                                </div>

                                {method.badge && (
                                    <span className="mb-4 px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {method.badge}
                                    </span>
                                )}

                                <h3 className="text-2xl font-serif text-[#0a1628] mb-4">
                                    {method.title}
                                </h3>

                                <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                                    {method.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50 w-full">
                                    <div className="text-lg font-bold text-[#0a1628] mb-4">{method.value}</div>
                                    <Link
                                        href={method.href}
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                                    >
                                        {method.action}
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Knowledge Hub Branding */}
                <div className="bg-[#f9f7f2] rounded-[3rem] p-12 lg:p-20 mb-24 overflow-hidden relative">
                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1">
                            <h2 className="text-4xl lg:text-5xl font-serif text-[#0a1628] mb-8 leading-tight">
                                Self-Service Training & Documentation
                            </h2>
                            <p className="text-gray-600 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl">
                                Master the weleba platform at your own pace with our comprehensive library of technical guides, video tutorials, and industry best practices.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/knowledge-base" className="px-10 py-5 bg-[#0a1628] text-white rounded-2xl font-bold hover:bg-blue-900 transition-all flex items-center gap-2">
                                    Go to Knowledge Base
                                    <ExternalLink size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            {resources.map((res, idx) => {
                                const Icon = iconMap[res.icon];
                                return (
                                    <Link key={idx} href={res.href} className="bg-white p-8 rounded-3xl border border-gray-100/50 hover:shadow-xl transition-all group">
                                        <Icon className="w-8 h-8 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold text-[#0a1628] mb-2">{res.title}</h4>
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                            {res.description}
                                        </p>
                                        <span className="text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            {res.cta}
                                            <ArrowRight size={14} />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Newsletter / CTA */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-serif text-[#0a1628] mb-6">
                        Looking for something else?
                    </h2>
                    <p className="text-gray-600 text-lg mb-10">
                        If you have a partnership inquiry or need assistance with integrations, contact our business development team.
                    </p>
                    <Link href="/about-us" className="inline-flex items-center gap-2 text-blue-600 font-bold py-4 px-8 border-2 border-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                        Contact Sales
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
