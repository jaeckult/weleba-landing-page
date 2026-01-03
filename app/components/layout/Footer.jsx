'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Plus, Minus, Shield, Globe, Headphones, ArrowUpRight,
  Linkedin, Youtube, Facebook, Instagram, MapPin
} from 'lucide-react';


const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#f9f7f2] font-sans">


      {/* CTA SECTION */}
      <section className="relative px-6 pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#0066FF] rounded-[3rem] relative overflow-hidden min-h-[580px] flex items-center shadow-2xl">

            {/* Background Illustration - Replica of the Room Blueprint */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M700 150 L980 220 L980 580 L700 500 Z" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M740 320 L940 360" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="880" cy="280" r="30" stroke="white" strokeOpacity="0.2" />
                <rect x="750" y="400" width="120" height="60" stroke="white" strokeOpacity="0.2" />
              </svg>
            </div>

            <div className="relative z-10 px-12 lg:px-24 py-20 max-w-4xl">
              <h2 className="text-5xl lg:text-[5.5rem] font-serif text-white mb-10 leading-[1.05] tracking-tight">
                Join Thousands of Hotels Thriving with weleba
              </h2>
              <p className="text-white/80 text-lg lg:text-xl mb-12 max-w-xl font-light">
                See how weleba's unified platform can work for your property.
                Our team will walk you through features tailored to your specific needs.
              </p>
              <Link href="/book-a-demo" className="inline-block bg-white text-[#0066FF] px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg">
                Book a Demo
              </Link>
            </div>

            {/* Floating Labels - Exact Replica from image */}
            <div className="hidden lg:block absolute right-24 h-full w-1/3">
              <div className="absolute top-[22%] right-0 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform hover:translate-y-[-5px] transition-transform">
                <Shield className="text-blue-600" size={20} />
                <span className="text-sm font-bold text-[#0a1628]">100% safe & secure</span>
              </div>

              <div className="absolute top-[48%] left-[-10%] bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform hover:translate-y-[-5px] transition-transform">
                <Globe className="text-blue-600" size={20} />
                <span className="text-sm font-bold text-[#0a1628]">360° property management</span>
              </div>

              <div className="absolute bottom-[22%] right-10 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform hover:translate-y-[-5px] transition-transform">
                <Headphones className="text-blue-600" size={20} />
                <span className="text-sm font-bold text-[#0a1628]">24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER WRAPPER WITH BENTO WAVE */}
      <div className="relative">
        {/* THE WAVE TRANSITION - Maintains the cream gap across the whole intersection */}
        <div className="absolute top-[-10rem] left-0 w-full h-40 pointer-events-none z-20">
          <svg className="w-full h-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
            {/* The "Step" wave that rises up without touching the blue CTA */}
            <path
              fill="#0a1628"
              d="M0,160 L450,160 C580,160 630,80 780,80 L1440,80 L1440,160 L0,160 Z"
            ></path>
          </svg>
        </div>

        {/* FOOTER SECTION */}
        <footer className="bg-[#0a1628] text-white pt-20 pb-16 relative z-10">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12 border-b border-white/10 pb-20">

              {/* Branding & Newsletter */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-600/20">m</div>
                  <span className="text-4xl font-bold tracking-tighter">weleba</span>
                </div>

                <h4 className="text-xl font-medium mb-5">Subscribe to our newsletter</h4>
                <div className="flex gap-2 max-w-md bg-white rounded-2xl p-2 mb-10 shadow-xl">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 bg-transparent px-5 text-gray-900 outline-none placeholder:text-gray-400 font-medium"
                  />
                  <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95">
                    Subscribe
                  </button>
                </div>

                {/* Utility Links */}
                <div className="space-y-2 max-w-[280px]">
                  <Link href="/marketplace" className="flex items-center justify-between group border-b border-white/5 py-3.5 hover:border-white/20 transition-all">
                    <span className="text-gray-300 font-medium">Marketplace</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0a1628] transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                  <Link href="/pricing" className="flex items-center justify-between group border-b border-white/5 py-3.5 hover:border-white/20 transition-all">
                    <span className="text-gray-300 font-medium">Pricing</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0a1628] transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                </div>

                {/* Socials */}
                <div className="flex gap-4 mt-12">
                  {[Linkedin, Youtube, Facebook, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all text-white border border-white/5 hover:border-blue-500">
                      <Icon size={22} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link Columns */}
              <div className="space-y-8">
                <div>
                  <h5 className="font-bold text-gray-500 mb-8 uppercase text-xs tracking-[0.2em]">Operations</h5>
                  <ul className="space-y-5 text-gray-300 font-medium">
                    {['Hotel PMS', 'AI Concierge', 'Frontdesk', 'Housekeeping', 'Reservations', 'Reporting'].map(item => (
                      <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h5 className="font-bold text-gray-500 mb-8 uppercase text-xs tracking-[0.2em]">Solutions</h5>
                  <ul className="space-y-5 text-gray-300 font-medium">
                    {['Independent Hotels', 'Hotel Groups', 'Bed & Breakfast', 'Parks', 'Resorts', 'Motels'].map(item => (
                      <li key={item} className="hover:text-blue-400 cursor-pointer transition-colors">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h5 className="font-bold text-gray-500 mb-8 uppercase text-xs tracking-[0.2em]">Resources</h5>
                  <ul className="space-y-5 text-gray-300 font-medium">
                    {[
                      { name: 'Blogs', href: '/blog' },
                      { name: 'Templates', href: '/templates' },
                      { name: 'Webinars', href: '/webinar' },
                      { name: 'Calculators', href: '/calculators' },
                      { name: 'E-books', href: '/ebooks' },
                      { name: 'Alternatives', href: '/alternative' },
                      { name: 'FAQs', href: '/faqs' }
                    ].map(item => (
                      <li key={item.name}>
                        <Link href={item.href} className="hover:text-blue-400 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Location Bar */}
            <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-400">
              {[
                { loc: "19321 US Hwy 19 N, Suite 407, FL, 33764", country: "United States" },
                { loc: "7405 Rte Transcanadienne, QC, H4T 1Z2", country: "Canada" },
                { loc: "Level 1/32 W Thebarton Rd, SA, 5031", country: "Australia" },
                { loc: "20-22 Wenlock Road, London, N1 7GU", country: "UK" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">{item.country}</span>
                    <span className="leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{item.loc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Copyright Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500 pt-10 border-t border-white/5">
              <p>© 2026 weleba. All Rights Reserved.</p>
              <div className="flex gap-10 font-medium">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;