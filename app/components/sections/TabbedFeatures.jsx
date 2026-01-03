'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, LayoutDashboard, Sliders, Users, Smartphone, CreditCard, MessageSquare, BarChart3, Globe, Lock, Clock, Zap } from 'lucide-react';

const iconMap = {
    Calendar,
    LayoutDashboard,
    Sliders,
    Users,
    Smartphone,
    CreditCard,
    MessageSquare,
    BarChart3,
    Globe,
    Lock,
    Clock,
    Zap,
};

const TabbedFeatures = ({ title, subtitle, tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-sm font-medium text-blue-600">Features</span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl text-[#0a1628] mb-6 leading-tight max-w-3xl"
                        style={{ fontFamily: 'Recoleta, Georgia, serif' }}
                    >
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl">
                        {subtitle}
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-8">
                    {tabs.map((tab, index) => {
                        const Icon = iconMap[tab.icon] || Calendar;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === index
                                    ? 'bg-[#0a1628] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <Icon className={`w-4 h-4 ${activeTab === index ? 'text-[#0066FF]' : 'text-gray-400'}`} />
                                {tab.title}
                            </button>
                        );
                    })}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image Preview */}
                    <div className="rounded-3xl relative min-h-[400px] h-[500px] overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl">
                        <Image
                            src={tabs[activeTab].image}
                            alt={tabs[activeTab].title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content Info */}
                    <div className="lg:pl-8">
                        <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">highlight</span>
                        </div>

                        <h3 className="text-3xl font-bold text-[#0a1628] mb-6" style={{ fontFamily: 'Recoleta, Georgia, serif' }}>
                            {tabs[activeTab].title}
                        </h3>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {tabs[activeTab].description}
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="text-blue-600 font-semibold hover:gap-3 transition-all flex items-center gap-2">
                                Learn more about {tabs[activeTab].title} <span className="text-xl">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabbedFeatures;
