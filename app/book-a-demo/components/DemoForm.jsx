'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const expectations = [
    'Live, personalized tour of the weleba platform',
    'Direct answers to your specific operational questions',
    'Discover revenue growth and ROI potential',
    'Custom success path mapping for your property'
];

const logos = [
    { name: 'NUVO Suites', path: '/HOTELS/image.png' },
    { name: 'ExplorUS', path: '/HOTELS/image copy.png' },
    { name: 'Harrison Hall', path: '/HOTELS/image copy 2.png' },
    { name: 'Seaboard Hotels', path: '/HOTELS/image copy 3.png' }
];

export default function DemoForm() {
    const [numRooms, setNumRooms] = useState('');

    return (
        <section className="bg-[#0066FF] min-h-screen pt-40 pb-24 px-6 overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 100 L400 200 L400 600 L100 700 Z" stroke="white" strokeWidth="2" />
                    <circle cx="300" cy="400" r="150" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Side: Content */}
                    <div className="flex-1 text-white lg:pt-12">
                        <h1 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">
                            Experience weleba Live
                        </h1>
                        <p className="text-xl text-blue-100 mb-12 max-w-xl leading-relaxed">
                            See how our unified platform can transform your property operations and guest experience. Our experts will show you exactly what you need.
                        </p>

                        <div className="space-y-6 mb-16">
                            <h3 className="text-2xl font-bold mb-4">What to expect:</h3>
                            {expectations.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 bg-white/10 rounded-full p-1">
                                        <CheckCircle2 className="w-5 h-5 text-blue-200" />
                                    </div>
                                    <span className="text-lg text-blue-50 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-8">Trusted by hoteliers worldwide</p>
                            <div className="flex flex-wrap gap-8 items-center opacity-70">
                                {logos.map((logo, idx) => (
                                    <div key={idx} className="relative h-8 w-32 filter grayscale brightness-200">
                                        <span className="font-bold text-lg text-white">{logo.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex-1 w-full max-w-2xl">
                        <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-2xl">
                            <h2 className="text-3xl font-serif text-[#0a1628] mb-8">Personalize your demo</h2>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">First Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900" placeholder="Jane" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Last Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Work Email</label>
                                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900" placeholder="jane@hotel.com" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900" placeholder="+1 (555) 000-0000" required />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Property Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900" placeholder="Grand Hotel" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Job Title</label>
                                        <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 appearance-none">
                                            <option>General Manager</option>
                                            <option>Owner</option>
                                            <option>IT Manager</option>
                                            <option>Revenue Manager</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <label className="text-sm font-bold text-gray-700">Number of Rooms</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['< 25', '25-50', '51-100', '101-250', '250+'].map((rooms) => (
                                            <button
                                                key={rooms}
                                                type="button"
                                                onClick={() => setNumRooms(rooms)}
                                                className={`px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all ${numRooms === rooms
                                                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                        : 'border-gray-100 text-gray-600 hover:border-blue-200'
                                                    }`}
                                            >
                                                {rooms}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-[#0066FF] text-white py-6 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-3 group mt-8">
                                    Schedule Your Demo
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-xs text-gray-500 mt-6 px-4">
                                    By clicking "Schedule Your Demo", you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
