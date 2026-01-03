'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
  ArrowLeftRight
} from 'lucide-react';
import { Button, Badge } from '../ui';
import { navigation, heroContent } from '../../lib/constants';
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

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

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

  return (
    <>
      {/* Backdrop Blur Overlay */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-200"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        {/* Announcement Banner */}
        <div className={
          isHomePage
            ? 'bg-[#0a1628] text-white py-2 px-4 text-center text-sm'
            : 'bg-white/95 backdrop-blur-sm text-gray-700 border-b border-gray-100 py-2 px-4 text-center text-sm'
        }>
          <Link href={heroContent.announcement.href} className="inline-flex items-center gap-2 hover:underline">
            <Sparkles className={`w-4 h-4 ${isHomePage ? 'text-[#00d4a4]' : 'text-[#0a1628]'}`} />
            <span>New Update: {heroContent.announcement.text}</span>
            <span className={isHomePage ? 'text-[#00d4a4]' : 'text-[#0a1628] font-semibold'}>Learn More</span>
          </Link>
        </div>

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
                        className="absolute top-full left-1/2 -translate-x-[45%] pt-8"
                      >
                        <div className="w-[1312px] h-[648px] bg-white rounded-xl shadow-2xl border border-gray-100 p-10">
                          <div className="grid grid-cols-4 gap-10">
                            {/* Operations */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Operations</h4>
                              <div className="space-y-2">
                                {navigation.products.operations.map((product) => {
                                  const Icon = productIcons[product.title] || LayoutDashboard;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-gray-900 text-sm">{product.title}</span>
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
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Marketing & Distribution</h4>
                              <div className="space-y-2">
                                {navigation.products.marketing.map((product) => {
                                  const Icon = productIcons[product.title] || Calendar;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-gray-900 text-sm">{product.title}</span>
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
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Revenue & Finance</h4>
                              <div className="space-y-2">
                                {navigation.products.revenue.map((product) => {
                                  const Icon = productIcons[product.title] || LineChart;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-gray-900 text-sm">{product.title}</span>
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
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Guest Experience</h4>
                              <div className="space-y-2">
                                {navigation.products.guest.map((product) => {
                                  const Icon = productIcons[product.title] || Bot;
                                  return (
                                    <Link
                                      key={product.title}
                                      href={product.href}
                                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-gray-900 text-sm">{product.title}</span>
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
                          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-gray-100">
                                <ArrowLeftRight className="w-4 h-4 text-gray-600" />
                              </div>
                              <div>
                                <Link href="/integrations" className="font-semibold text-gray-900 hover:text-[#00d4a4] transition-colors">
                                  All Integrations
                                </Link>
                                <p className="text-xs text-gray-500">Manage and grow your people.</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {/* Integration logos placeholder */}
                              <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                  <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white" />
                                ))}
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
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-8"
                      >
                        <div className="w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 p-10">
                          <div className="grid grid-cols-3 gap-8">
                            {/* By Property Type */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">By Property Type</h4>
                              <div className="space-y-2">
                                {navigation.solutions.byProperty.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                      <Building2 className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <span className="font-semibold text-gray-900 text-sm block">{item.title}</span>
                                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* By Role */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">By Role</h4>
                              <div className="space-y-2">
                                {navigation.solutions.byRole.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                      <Users className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <span className="font-semibold text-gray-900 text-sm block">{item.title}</span>
                                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Featured */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Featured</h4>
                              <div className="bg-gray-50 rounded-lg overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-[#0a1628] to-[#00d4a4] relative">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Hotel className="w-16 h-16 text-white/20" />
                                  </div>
                                </div>
                                <div className="p-4">
                                  <div className="inline-block px-2 py-1 bg-[#00d4a4] text-white text-xs font-semibold rounded mb-2">
                                    Customer Story
                                  </div>
                                  <h5 className="font-semibold text-gray-900 text-sm mb-2">
                                    How Wood River Inn Gained Confidence With weleba
                                  </h5>
                                  <Link
                                    href="/case-studies"
                                    className="text-[#00d4a4] text-xs font-semibold hover:underline inline-flex items-center gap-1"
                                  >
                                    Read All Stories
                                    <ChevronDown className="w-3 h-3 -rotate-90" />
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
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-8"
                      >
                        <div className="w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-10">
                          <div className="grid grid-cols-2 gap-8">
                            {/* Resource Type */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Resource Type</h4>
                              <div className="grid grid-cols-2 gap-3">
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
                                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                      <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <span className="font-semibold text-gray-900 text-sm block">{item.title}</span>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Featured Articles */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Featured Articles</h4>
                              <div className="space-y-4">
                                {/* Article 1 */}
                                <Link href="/blog/ai-front-desk" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                      <Bot className="w-8 h-8 text-white/80" />
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                                      AI Front Desk: How weleba Concierge Makes It Easy
                                    </h5>
                                    <p className="text-xs text-gray-500">July 18, 2025</p>
                                  </div>
                                </Link>

                                {/* Article 2 */}
                                <Link href="/blog/hotel-ai-agents" className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex-shrink-0 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                      <Smartphone className="w-8 h-8 text-white/80" />
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                                      How Hotel AI Agents Improve Service And Bookings in 2025?
                                    </h5>
                                    <p className="text-xs text-gray-500">July 15, 2025</p>
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

                <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors">
                  Pricing
                </Link>

                <Link href="/case-studies" className="px-4 py-2 text-gray-700 hover:text-[#0a1628] font-medium transition-colors">
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
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-8"
                      >
                        <div className="w-[320px] bg-white rounded-xl shadow-2xl border border-gray-100 p-8">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Company</h4>
                          <div className="space-y-2">
                            {navigation.company.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#00d4a4] group-hover:text-white transition-colors flex-shrink-0">
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
                                  className="block py-2 text-gray-600 hover:text-[#00d4a4]"
                                >
                                  {product.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link href="/pricing" className="block py-2 text-gray-700 font-medium">
                      Pricing
                    </Link>

                    <Link href="/case-studies" className="block py-2 text-gray-700 font-medium">
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
