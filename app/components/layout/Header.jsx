'use client';


import { useState, useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  LayoutDashboard,
  Calendar,
  Share2,
  Search,
  Globe,
  LineChart,
  CreditCard,
  Bot,
  MessageCircle,
  Smartphone,
  Building2,
  Home,
  TreePine,
  Hotel,
  Users,
  UserCog,
  Wallet,
  Monitor,
  BookOpen,
  Newspaper,
  FileText,
  Video,
  Calculator,
  Book,
  ArrowLeftRight,
  ArrowRight
} from 'lucide-react';
import { Button, Badge } from '../ui';
import { navigation as enNavigation, heroContent as enHeroContent, labels as enLabels } from '../../lib/constants';
import { navigation as amNavigation, heroContent as amHeroContent, labels as amLabels } from '../../lib/constants.am';
import { blogPosts as enBlogPosts } from '../../lib/blogData';
import { blogPosts as amBlogPosts } from '../../lib/blogData.am';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const productIcons = {
  'PMS': LayoutDashboard,
  'Booking Engine': Calendar,
  'Channel Manager': Share2,
  'Hotel Metasearch': Search,
  'Hotel Website Builder': Globe,
  'Revenue Management': LineChart,
  'Payments': CreditCard,
  'AI Concierge': Bot,
  'Guest Communication & Engagement': MessageCircle,
  'Hotel Guest App': Smartphone,
};

const integrations = [
  '/INTEGRATION/image.png',
  '/INTEGRATION/image copy.png',
  '/INTEGRATION/image copy 2.png',
  '/INTEGRATION/image copy 3.png',
  '/INTEGRATION/image copy 4.png',
  '/INTEGRATION/image copy 5.png',
  '/INTEGRATION/image copy 6.png',
  '/INTEGRATION/image copy 7.png',
  '/INTEGRATION/image copy 8.png',
  '/INTEGRATION/image copy 9.png',
  '/INTEGRATION/image copy 10.png',
  '/INTEGRATION/image copy 11.png',
  '/INTEGRATION/image copy 12.png',
  '/INTEGRATION/image copy 13.png',
  '/INTEGRATION/image copy 14.png',
  '/INTEGRATION/image copy 15.png',
  '/INTEGRATION/image copy 16.png',
  '/INTEGRATION/image copy 17.png',
  '/INTEGRATION/image copy 18.png',
  '/INTEGRATION/image copy 19.png',
  '/INTEGRATION/image copy 20.png',
  '/INTEGRATION/image copy 21.png',
  '/INTEGRATION/image copy 22.png',
];

const Header = () => {
  const { locale } = useLanguage();
  const labels = locale === 'am' ? amLabels : enLabels;
  const navigation = locale === 'am' ? amNavigation : enNavigation;
  const blogPosts = locale === 'am' ? amBlogPosts : enBlogPosts;

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dismissedSlug, setDismissedSlug] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    const dismissed = localStorage.getItem('dismissed-announcement-slug');
    if (dismissed) setDismissedSlug(dismissed);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const newBlogPost = useMemo(() => {
    if (!blogPosts || blogPosts.length === 0) return null;

    // Sort by date descending
    const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = sorted[0];

    const postDate = new Date(latest.date);
    const now = new Date();
    const diffTime = Math.abs(now - postDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= 2 ? latest : null;
  }, []);

  const showBanner = newBlogPost && dismissedSlug !== newBlogPost.slug;

  const handleDismiss = () => {
    if (newBlogPost) {
      localStorage.setItem('dismissed-announcement-slug', newBlogPost.slug);
      setDismissedSlug(newBlogPost.slug);
    }
  };

  const handleMouseEnter = (dropdown) => {
    // Clear any pending close timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
    setCloseTimeout(timeout);
  };

  const toggleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop Blur Overlay */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40 transition-all duration-300"
          onMouseEnter={handleMouseLeave}
          onClick={closeMenus}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        {/* Dynamic Announcement Banner */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={
                isHomePage
                  ? 'bg-[#0a1628] text-white py-2 px-4 text-center text-sm relative'
                  : 'bg-white/95 backdrop-blur-sm text-gray-700 border-b border-gray-100 py-2 px-4 text-center text-sm relative'
              }
            >
              <div className="flex items-center justify-center gap-2 pr-8">
                <Sparkles className={`w-4 h-4 ${isHomePage ? 'text-[#0066FF]' : 'text-[#0a1628]'}`} />
                <span className="font-medium">{labels.blog.newUpdate}</span>
                <Link href="/blog" className="hover:underline opacity-90">
                  {newBlogPost.title}
                </Link>
                <Link
                  href={`/blog/${newBlogPost.slug}`}
                  className={`${isHomePage ? 'text-[#0066FF]' : 'text-[#0a1628]'} font-bold ml-2 inline-flex items-center gap-1 hover:underline`}
                >
                  {labels.blog.readPost} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDismiss();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
                title="Dismiss"
              >
                <X className={`w-4 h-4 ${isHomePage ? 'text-white/60' : 'text-gray-400'}`} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation */}
        <nav>
          <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-[#0a1628]">weleba</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {/* {labels.navigation.products} Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                  >
                    {labels.navigation.products}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-[35%] pt-6"
                        style={{ width: 'min(1312px, 95vw)' }}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                          <div className="grid grid-cols-4 gap-10">
                            {/* Operations */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">{labels.navigation.categories.operations}</h4>
                              <div className="space-y-1">
                                {navigation.products.operations.map((product) => {
                                  const Icon = productIcons[product.title] || LayoutDashboard;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      onClick={closeMenus}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-gray-900 text-[15px]">{product.title}</span>
                                          {product.badge && (
                                            <Badge variant={product.badge === 'New' ? 'new' : 'updated'} size="sm">
                                              {product.badge}
                                            </Badge>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{product.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Marketing & Distribution */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Marketing & Distribution</h4>
                              <div className="space-y-1">
                                {navigation.products.marketing.map((product) => {
                                  const Icon = productIcons[product.title] || Calendar;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      onClick={closeMenus}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-gray-900 text-[15px]">{product.title}</span>
                                          {product.badge && (
                                            <Badge variant={product.badge === 'New' ? 'new' : 'updated'} size="sm">
                                              {product.badge}
                                            </Badge>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{product.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Revenue & Finance */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Revenue & Finance</h4>
                              <div className="space-y-1">
                                {navigation.products.revenue.map((product) => {
                                  const Icon = productIcons[product.title] || LineChart;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      onClick={closeMenus}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-gray-900 text-[15px]">{product.title}</span>
                                          {product.badge && (
                                            <Badge variant={product.badge === 'New' ? 'new' : 'updated'} size="sm">
                                              {product.badge}
                                            </Badge>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{product.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Guest Experience */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Guest Experience</h4>
                              <div className="space-y-1">
                                {navigation.products.guest.map((product) => {
                                  const Icon = productIcons[product.title] || Bot;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      onClick={closeMenus}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-gray-900 text-[15px]">{product.title}</span>
                                          {product.badge && (
                                            <Badge variant={product.badge === 'New' ? 'new' : 'updated'} size="sm">
                                              {product.badge}
                                            </Badge>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{product.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Footer with integrations */}
                          <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-8">
                              <div className="flex items-center gap-3 pr-8 border-r border-gray-100">
                                <div className="p-2 rounded-lg bg-gray-100">
                                  <ArrowLeftRight className="w-5 h-5 text-[#0a1628]" />
                                </div>
                                <div className="min-w-max">
                                  <Link href="/integrations" onClick={closeMenus} className="font-bold text-gray-900 hover:text-[#0066FF] transition-colors block leading-tight">
                                    All Integrations
                                  </Link>
                                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">Connect Your Stack</p>
                                </div>
                              </div>

                              <div className="flex-1 overflow-hidden relative">
                                <div className="flex gap-8 items-center animate-scroll">
                                  {[...integrations, ...integrations].map((src, index) => (
                                    <div key={index} className="relative h-6 w-20 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                                      <Image src={src} alt="Integration" fill className="object-contain" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Solutions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                  >
                    {labels.navigation.solutions}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'solutions' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-[45%] lg:-translate-x-1/2 pt-6"
                        style={{ width: 'min(1000px, 95vw)' }}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                          <div className="grid grid-cols-3 gap-12">
                            {/* By Property Type */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">{labels.navigation.categories.byProperty}</h4>
                              <div className="space-y-1">
                                {navigation.solutions.byProperty.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={closeMenus}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                                  >
                                    <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                      <Building2 className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <span className="font-bold text-gray-900 text-[15px] block">{item.title}</span>
                                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* By Role */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">By Role</h4>
                              <div className="space-y-1">
                                {navigation.solutions.byRole.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={closeMenus}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                                  >
                                    <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                      <Users className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <span className="font-bold text-gray-900 text-[15px] block">{item.title}</span>
                                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Featured Card */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Featured</h4>
                              <div className="bg-gray-50 rounded-2xl overflow-hidden group/card relative shadow-sm border border-gray-100">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                  <Image
                                    src="/featured/wood-river-inn.png"
                                    alt="Customer Story"
                                    fill
                                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute top-4 left-4">
                                    <div className="px-3 py-1 bg-blue-100 text-[#0066FF] text-[10px] font-bold rounded-full uppercase tracking-wider backdrop-blur-md">
                                      Customer Story
                                    </div>
                                  </div>
                                </div>
                                <div className="p-6">
                                  <h5 className="font-bold text-gray-900 text-lg leading-tight mb-4 group-hover/card:text-[#0066FF] transition-colors">
                                    How Wood River Inn Gained Confidence With weleba
                                  </h5>
                                  <Link
                                    href="/case-studies"
                                    onClick={closeMenus}
                                    className="text-[#0066FF] text-sm font-bold flex items-center gap-2 group/btn"
                                  >
                                    Read All Stories
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                  >
                    Resources
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'resources' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-[40%] lg:-translate-x-1/2 pt-6"
                        style={{ width: 'min(900px, 95vw)' }}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                          <div className="grid grid-cols-2 gap-12">
                            {/* Resource Type */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Resource Type</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {navigation.resources.map((item) => {
                                  const iconMap = {
                                    'Blogs': Newspaper,
                                    'News': FileText,
                                    'Templates': FileText,
                                    'Webinars': Video,
                                    'Calculators': Calculator,
                                    'eBooks & Guides': Book,
                                    'Alternatives': ArrowLeftRight
                                  };
                                  const Icon = iconMap[item.title] || BookOpen;
                                  return (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={closeMenus}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-[#0a1628] flex-shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <span className="font-bold text-gray-900 text-[15px] block">{item.title}</span>
                                        <p className="text-[11px] text-gray-500 mt-1 leading-tight">{item.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Featured Articles */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Featured Articles</h4>
                              <div className="space-y-6">
                                {/* Article 1 */}
                                <Link
                                  href="/blog/ai-front-desk"
                                  onClick={closeMenus}
                                  className="flex gap-5 items-center group/art transition-all"
                                >
                                  <div className="w-24 h-24 rounded-2xl bg-gray-100 flex-shrink-0 overflow-hidden relative shadow-sm">
                                    <Image src="/HOTELS/image.png" alt="AI Front Desk" fill className="object-cover group-hover/art:scale-110 transition-transform duration-500" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-bold text-gray-900 text-[15px] mb-2 leading-snug group-hover/art:text-[#0066FF] transition-colors">
                                      AI Front Desk: How weleba Concierge Makes It Easy
                                    </h5>
                                    <p className="text-xs text-gray-400 font-medium">July 18, 2025</p>
                                  </div>
                                </Link>

                                {/* Article 2 */}
                                <Link
                                  href="/blog/hotel-ai-agents"
                                  onClick={closeMenus}
                                  className="flex gap-5 items-center group/art transition-all"
                                >
                                  <div className="w-24 h-24 rounded-2xl bg-gray-100 flex-shrink-0 overflow-hidden relative shadow-sm">
                                    <Image src="/HOTELS/image copy.png" alt="AI Agents" fill className="object-cover group-hover/art:scale-110 transition-transform duration-500" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-bold text-gray-900 text-[15px] mb-2 leading-snug group-hover/art:text-[#0066FF] transition-colors">
                                      How Hotel AI Agents Improve Service And Bookings in 2025?
                                    </h5>
                                    <p className="text-xs text-gray-400 font-medium">July 15, 2025</p>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* {labels.navigation.pricing} Link */}
                <Link
                  href="/pricing"
                  onMouseEnter={() => setActiveDropdown(null)}
                  className="px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                >
                  {labels.navigation.pricing}
                </Link>

                {/* Case Studies Link */}
                <Link
                  href="/case-studies"
                  onMouseEnter={() => setActiveDropdown(null)}
                  className="px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                >
                  {labels.navigation.caseStudies}
                </Link>

                {/* Company Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('company')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                  >
                    {labels.navigation.company}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'company' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 pt-6"
                        style={{ width: 'min(320px, 95vw)' }}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Company</h4>
                          <div className="space-y-2">
                            {navigation.company.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#0066FF] group-hover:text-white transition-colors flex-shrink-0">
                                  {item.title === 'About Us' ? (
                                    <Users className="w-4 h-4" />
                                  ) : (
                                    <UserCog className="w-4 h-4" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-semibold text-gray-900 text-sm block">{item.title}</span>
                                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <LanguageToggle />
                <Link href="/support">
                  <Button variant="ghost" size="sm">Support</Button>
                </Link>
                <Link href="/book-a-demo">
                  <Button size="sm">Get A Free Demo</Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div >
          </div >

          {/* Mobile Menu has been moved to a Drawer */}
        </nav >
      </header >

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-[340px] bg-white shadow-2xl z-50 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col min-h-full">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                  <span className="text-xl font-bold text-[#0a1628]">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 p-5 space-y-2">
                  {/* Products */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileDropdown('products')}
                      className="flex items-center justify-between w-full p-4 bg-gray-50/50 hover:bg-gray-50 font-bold text-[#0a1628] text-sm"
                    >
                      {labels.navigation.products}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'products' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white space-y-6">
                            {Object.entries(navigation.products).map(([category, products]) => (
                              <div key={category}>
                                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                  {category === 'operations' ? 'Operations' :
                                    category === 'marketing' ? 'Marketing' :
                                      category === 'revenue' ? 'Revenue' : 'Experience'}
                                </h5>
                                <div className="space-y-3">
                                  {products.map((product) => {
                                    const Icon = productIcons[product.title] || LayoutDashboard;
                                    return (
                                      <Link
                                        key={product.title}
                                        href={product.href}
                                        onClick={closeMenus}
                                        className="flex items-center gap-3 group"
                                      >
                                        <div className="p-1.5 rounded-md bg-blue-50 text-[#0066FF] opacity-80 group-hover:opacity-100">
                                          <Icon className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-600 group-hover:text-[#0066FF]">{product.title}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileDropdown('solutions')}
                      className="flex items-center justify-between w-full p-4 bg-gray-50/50 hover:bg-gray-50 font-bold text-[#0a1628] text-sm"
                    >
                      {labels.navigation.solutions}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'solutions' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white space-y-6">
                            <div>
                              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">By Property</h5>
                              <div className="space-y-3">
                                {navigation.solutions.byProperty.map(item => (
                                  <Link key={item.title} href={item.href} onClick={closeMenus} className="block text-sm font-medium text-gray-600 hover:text-[#0066FF]">{item.title}</Link>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">By Role</h5>
                              <div className="space-y-3">
                                {navigation.solutions.byRole.map(item => (
                                  <Link key={item.title} href={item.href} onClick={closeMenus} className="block text-sm font-medium text-gray-600 hover:text-[#0066FF]">{item.title}</Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Pricing link */}
                  <Link
                    href="/pricing"
                    onClick={closeMenus}
                    className="flex items-center gap-3 w-full p-4 border border-gray-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/50 font-bold text-[#0a1628] text-sm transition-all"
                  >
                    {labels.navigation.pricing}
                  </Link>

                  {/* Case Studies link */}
                  <Link
                    href="/case-studies"
                    onClick={closeMenus}
                    className="flex items-center gap-3 w-full p-4 border border-gray-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/50 font-bold text-[#0a1628] text-sm transition-all"
                  >
                    {labels.navigation.caseStudies}
                  </Link>

                  {/* Resources */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileDropdown('resources')}
                      className="flex items-center justify-between w-full p-4 bg-gray-50/50 hover:bg-gray-50 font-bold text-[#0a1628] text-sm"
                    >
                      Resources
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'resources' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white grid grid-cols-2 gap-3">
                            {navigation.resources.map(item => (
                              <Link key={item.title} href={item.href} onClick={closeMenus} className="text-sm font-medium text-gray-600 hover:text-[#0066FF]">{item.title}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Company */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileDropdown('company')}
                      className="flex items-center justify-between w-full p-4 bg-gray-50/50 hover:bg-gray-50 font-bold text-[#0a1628] text-sm"
                    >
                      {labels.navigation.company}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'company' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white space-y-3">
                            {navigation.company.map(item => (
                              <Link key={item.title} href={item.href} onClick={closeMenus} className="block text-sm font-medium text-gray-600 hover:text-[#0066FF]">{item.title}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 border-t border-gray-100 bg-gray-50">
                  <div className="space-y-3">
                    <Link href="/book-a-demo" onClick={closeMenus}>
                      <Button fullWidth size="lg">Get A Free Demo</Button>
                    </Link>
                    <div className="flex items-center justify-between gap-3">
                      <Link href="/support" onClick={closeMenus} className="flex-1">
                        <Button variant="outline" fullWidth size="default">Support</Button>
                      </Link>
                      <LanguageToggle />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
