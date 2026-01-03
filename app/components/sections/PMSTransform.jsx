'use client';

import { Clock, Coins, Smile, Users, Home, ArrowRight, Share2, Building2, Zap, Map, Search, Layers, Plus, Bot, Lock, Sliders, PieChart, LineChart, CreditCard, CircleDollarSign, Hotel, Crown, Coffee, Tent, Headphones, MessageCircle, Check, Smartphone, BarChart3, Globe, ShieldCheck, LayoutDashboard, Languages, ShoppingBag, Tag, Percent, FileText, Settings, Sparkles, TrendingUp } from 'lucide-react';

const iconMap = {
    Clock,
    Coins,
    Smile,
    Users,
    Home,
    Share2,
    Building2,
    Zap,
    Map,
    Search,
    Layers,
    Plus,
    Bot,
    Lock,
    Sliders,
    PieChart,
    LineChart,
    CreditCard,
    CircleDollarSign,
    Hotel,
    Crown,
    Coffee,
    Tent,
    Headphones,
    MessageCircle,
    Check,
    Smartphone,
    BarChart3,
    Globe,
    ShieldCheck,
    LayoutDashboard,
    Languages,
    ShoppingBag,
    Tag,
    Percent,
    FileText,
    Settings,
    Sparkles,
    TrendingUp
};

const PMSTransform = ({ content }) => {
    return (
        <section className="py-24 px-6 bg-[#f9f7f2]">
            <div className="container mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#dce6f2] px-4 py-2 rounded-lg mb-6">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-sm font-medium text-[#0a1628]">
                            {content.tag}
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif text-[#0a1628]">
                        {content.title}
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {content.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Clock;
                        return (
                            <div
                                key={index}
                                className={`${feature.className} p-10 rounded-[2rem] flex flex-col justify-between`}
                            >
                                <div>
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8">
                                        <Icon size={24} className="text-blue-600" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-[#0a1628] mb-6">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                    {/* CTA Block */}
                    <div className={`${content.cta.className} p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group`}>
                        <div>
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8">
                                <Home size={24} className="text-blue-600" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif text-[#0a1628] max-w-lg leading-tight">
                                {content.cta.title}
                            </h3>
                        </div>

                        <div className="mt-8">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                                {content.cta.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PMSTransform;
