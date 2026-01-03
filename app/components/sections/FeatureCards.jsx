import Link from 'next/link';
import { ArrowRight, Zap, LayoutDashboard, CreditCard, Smartphone, Bot, Lock, BarChart3, MessageSquare, Globe, Sliders, CircleDollarSign, Palette, ShieldCheck, Languages, TrendingUp, ShoppingBag, Tag, Percent, PieChart, Calendar, FileText, Map, Building2, Share2, Settings, Search, Layers, Clock, Plus, Hotel, Crown, Coffee, Tent, Headphones, MessageCircle, Check, Sparkles, Home, Smile, Users, Coins, LineChart } from 'lucide-react';
// Badge import removed as it is unused

// Icon map to handle string icon names from data
const iconMap = {
    Zap,
    LayoutDashboard,
    CreditCard,
    Smartphone,
    Bot,
    Lock,
    BarChart3,
    MessageSquare,
    Globe,
    Sliders,
    CircleDollarSign,
    Palette,
    ShieldCheck,
    Languages,
    TrendingUp,
    ShoppingBag,
    Tag,
    Percent,
    PieChart,
    Calendar,
    FileText,
    Map,
    Building2,
    Share2,
    Settings,
    Search,
    Layers,
    Clock,
    Plus,
    Hotel,
    Crown,
    Coffee,
    Tent,
    Headphones,
    MessageCircle,
    Check,
    Sparkles,
    Home,
    Smile,
    Users,
    Coins,
    LineChart
};

const FeatureCards = ({ title, subtitle, features }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6" style={{ fontFamily: 'Recoleta, Georgia, serif' }}>
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Zap;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group duration-300"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                {/* <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;