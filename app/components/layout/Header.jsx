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
import { navigation, heroContent } from '../../lib/constants';
import { blogPosts } from '../../lib/blogData';
import { motion, AnimatePresence } from 'framer-motion';

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
                <span className="font-medium">New Update:</span>
                <Link href="/blog" className="hover:underline opacity-90">
                  {newBlogPost.title}
                </Link>
                <Link
                  href={`/blog/${newBlogPost.slug}`}
                  className={`${isHomePage ? 'text-[#0066FF]' : 'text-[#0a1628]'} font-bold ml-2 inline-flex items-center gap-1 hover:underline`}
                >
                  Read Post <ArrowRight className="w-3 h-3" />
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
                {/* Products Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                  >
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                        style={{ width: 'min(1312px, 95vw)' }}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                          <div className="grid grid-cols-4 gap-10">
                            {/* Operations */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">Operations</h4>
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
                    Solutions
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
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">By Property Type</h4>
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

                {/* Pricing Link */}
                <Link
                  href="/pricing"
                  onMouseEnter={() => setActiveDropdown(null)}
                  className="px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                >
                  Pricing
                </Link>

                {/* Case Studies Link */}
                <Link
                  href="/case-studies"
                  onMouseEnter={() => setActiveDropdown(null)}
                  className="px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors"
                >
                  Customer Stories
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
                    Company
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

          {/* Mobile Menu */}
          {
            mobileMenuOpen && (
              <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
                <div className="lg:hidden py-4 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown('products-mobile')}
                        className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                      >
                        Products
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'products-mobile' && (
                        <div className="pl-4 mt-2 space-y-3">
                          {Object.entries(navigation.products).map(([category, products]) => (
                            <div key={category}>
                              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                                {category === 'operations' ? 'Operations' :
                                  category === 'marketing' ? 'Marketing & Distribution' :
                                    category === 'revenue' ? 'Revenue & Finance' : 'Guest Experience'}
                              </h5>
                              {products.map((product) => (
                                <Link
                                  key={product.title}
                                  href={product.href}
                                  className="block py-2 text-gray-600 hover:text-[#0066FF]"
                                >
                                  {product.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link href="/pricing" className="block py-3 text-[#0a1628] font-bold border-b border-gray-50">
                      Pricing
                    </Link>

                    <Link href="/case-studies" className="block py-3 text-[#0a1628] font-bold border-b border-gray-50">
                      Customer Stories
                    </Link>

                    <div className="pt-4 space-y-3">
                      <Link href="/book-a-demo" className="block">
                        <Button fullWidth>Get A Free Demo</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </nav >
      </header >
    </>
  );
};

export default Header;
