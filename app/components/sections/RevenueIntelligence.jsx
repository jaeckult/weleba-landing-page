// 'use client';

// import { TrendingUp, Award, Layers, Monitor, CheckCircle, BookOpen } from 'lucide-react';

// const RevenueIntelligence = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 lg:px-8">
//         {/* Bento Grid Layout - 2x2 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          
//           {/* Card 1: Helps Boost Revenue - Top Left */}
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
//             <div className="relative z-10">
//               <h3 className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4">
//                 Helps Boost Revenue
//               </h3>
//               <p className="text-gray-700 text-lg mb-8 max-w-md">
//                 Our integrated solutions help increase RevPAR by up to 35% with commission-free direct bookings and AI-powered pricing strategies.
//               </p>
              
//               {/* Revenue Card Visual */}
//               <div className="relative">
//                 <div className="absolute top-0 left-0 bg-[#0066FF] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-20">
//                   <TrendingUp className="w-5 h-5" />
//                   <div>
//                     <div className="text-xs opacity-80">RevPAR Increased</div>
//                     <div className="text-2xl font-bold">35%</div>
//                   </div>
//                   <div className="bg-white/20 px-2 py-1 rounded text-xs">Last Month</div>
//                 </div>
                
//                 <div className="absolute top-4 right-0 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 z-10">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   <span className="text-sm font-semibold">New Booking Confirmed</span>
//                 </div>
                
//                 <div className="mt-24 bg-white p-6 rounded-2xl shadow-xl">
//                   <div className="text-sm text-gray-500 mb-2">Revenue</div>
//                   <div className="text-3xl font-bold text-[#0a1628] mb-1">$612,893.00</div>
//                   <div className="text-sm text-green-600 font-semibold mb-4">+90%</div>
                  
//                   {/* Mini Chart */}
//                   <div className="relative h-24">
//                     <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
//                       <path
//                         d="M0,50 Q25,45 50,40 T100,35 Q125,30 150,25 T200,15"
//                         fill="none"
//                         stroke="#93C5FD"
//                         strokeWidth="2"
//                       />
//                       <path
//                         d="M0,50 Q25,45 50,40 T100,35 Q125,30 150,25 T200,15 L200,60 L0,60 Z"
//                         fill="url(#gradient1)"
//                         opacity="0.3"
//                       />
//                       <defs>
//                         <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
//                           <stop offset="0%" stopColor="#0066FF" />
//                           <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
//                         </linearGradient>
//                       </defs>
//                     </svg>
//                     <div className="absolute bottom-2 left-1/3 bg-[#0a1628] text-white px-3 py-1 rounded-lg text-xs">
//                       <div className="font-semibold">Oct 5, 2025</div>
//                       <div className="opacity-80">RevPAR Overview</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card 2: Built by Hoteliers for Hoteliers - Top Right */}
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
//             <div className="relative z-10">
//               <h3 className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4">
//                 Built by Hoteliers for Hoteliers
//               </h3>
//               <p className="text-gray-700 text-lg mb-8 max-w-md">
//                 Building on our 30+ years of providing hospitality software, weleba understands your operational challenges because we've lived them.
//               </p>
              
//               {/* Trust Badge Visual */}
//               <div className="relative flex items-center justify-center mt-12">
//                 <div className="absolute top-0 right-8 bg-[#0066FF] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
//                   <Award className="w-4 h-4" />
//                   <span className="text-sm font-semibold">Trusted Partner</span>
//                 </div>
                
//                 <div className="bg-white p-8 rounded-3xl shadow-2xl">
//                   <div className="flex items-center justify-center mb-3">
//                     <div className="text-yellow-500 text-4xl">🏆</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-5xl font-bold text-[#0a1628]">30+</div>
//                     <div className="text-gray-600 mt-2">Years Of Trust</div>
//                   </div>
//                 </div>
                
//                 {/* Decorative Elements */}
//                 <div className="absolute inset-0 opacity-10">
//                   <svg className="w-full h-full" viewBox="0 0 400 300">
//                     <path d="M100,150 Q200,50 300,150" stroke="#0066FF" strokeWidth="2" fill="none" opacity="0.3" />
//                     <path d="M50,200 Q200,100 350,200" stroke="#00d4a4" strokeWidth="2" fill="none" opacity="0.3" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card 3: All-in-One Platform - Bottom Left */}
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
//             <div className="relative z-10">
//               <div className="absolute -top-4 -left-4 bg-white/50 px-3 py-1 rounded-lg text-xs text-gray-600 flex items-center gap-1">
//                 <Monitor className="w-3 h-3" />
//                 <span>Website Builder</span>
//               </div>
//               <h3 className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4 mt-4">
//                 All-in-One Platform
//               </h3>
//               <p className="text-gray-700 text-lg mb-8">
//                 Everything you need to run your hotel in one seamless platform; connecting PMS, booking engine, channel manager, and payments.
//               </p>
              
//               {/* Platform Integration Visual */}
//               <div className="relative mt-8">
//                 <div className="absolute top-0 right-0 bg-[#0066FF] text-white px-3 py-2 rounded-lg shadow-lg text-xs flex items-center gap-2 z-20">
//                   <CheckCircle className="w-4 h-4" />
//                   <span>Save 50% Training Time</span>
//                 </div>
                
//                 <div className="space-y-3 mt-12">
//                   <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
//                     <div className="bg-blue-100 p-2 rounded-lg">
//                       <BookOpen className="w-5 h-5 text-[#0066FF]" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-sm font-semibold text-gray-800">Guide to Roommaster Platform</div>
//                       <div className="text-xs text-gray-500">⏱ 54 minutes</div>
//                       <div className="mt-1 bg-gray-200 rounded-full h-1.5">
//                         <div className="bg-[#0066FF] h-1.5 rounded-full" style={{ width: '75%' }}></div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
//                     <div className="bg-blue-100 p-2 rounded-lg">
//                       <Layers className="w-5 h-5 text-[#0066FF]" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-sm font-semibold text-gray-800">Channel Manager</div>
//                       <div className="text-xs text-gray-500">⏱ 54 minutes</div>
//                       <div className="mt-1 bg-gray-200 rounded-full h-1.5">
//                         <div className="bg-[#0066FF] h-1.5 rounded-full" style={{ width: '60%' }}></div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="bg-white p-4 rounded-xl shadow-md">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="bg-blue-100 p-2 rounded-lg">
//                         <BookOpen className="w-5 h-5 text-[#0066FF]" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-semibold text-gray-800">Payments & Processes</div>
//                         <div className="text-xs text-gray-500">⏱ 43 minutes</div>
//                       </div>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded-lg mt-2">
//                       <div className="text-xs text-gray-600 mb-1">Avg. Training Time per Employee</div>
//                       <div className="text-2xl font-bold text-[#0a1628]">2h 30m</div>
//                       <div className="text-xs text-green-600 font-semibold">-50%</div>
//                       <div className="mt-2">
//                         <svg className="w-full h-12" viewBox="0 0 100 30" preserveAspectRatio="none">
//                           <path d="M0,25 Q25,20 50,15 T100,5" fill="none" stroke="#10b981" strokeWidth="2" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card 4: Accessible Anywhere, Anytime - Bottom Right */}
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
//             <div className="relative z-10">
//               <h3 className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4">
//                 Accessible Anywhere, Anytime
//               </h3>
//               <p className="text-gray-700 text-lg mb-8">
//                 Access your property management system securely from anywhere, on any device. All updates and backups happen automatically with 99.95% uptime guaranteed.
//               </p>
              
//               {/* Multi-Device Visual */}
//               <div className="relative mt-8">
//                 <div className="absolute top-0 left-0 bg-[#0066FF] text-white px-3 py-2 rounded-lg shadow-lg text-xs flex items-center gap-2 z-20">
//                   <Monitor className="w-4 h-4" />
//                   <span>Access on Any Device</span>
//                 </div>
                
//                 <div className="mt-16 relative">
//                   {/* Laptop */}
//                   <div className="bg-gray-800 rounded-t-xl p-1 shadow-2xl">
//                     <div className="bg-white rounded-t-lg p-4 h-40">
//                       <div className="space-y-2">
//                         <div className="bg-blue-100 h-3 rounded w-3/4"></div>
//                         <div className="bg-blue-200 h-2 rounded w-1/2"></div>
//                         <div className="grid grid-cols-3 gap-2 mt-4">
//                           <div className="bg-[#0066FF] h-8 rounded"></div>
//                           <div className="bg-blue-200 h-8 rounded"></div>
//                           <div className="bg-blue-100 h-8 rounded"></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-gray-800 h-1 rounded-b-xl"></div>
//                   </div>
                  
//                   {/* Tablet & Phone Overlay */}
//                   <div className="absolute -bottom-8 -left-4 bg-gray-800 rounded-xl p-1 shadow-xl w-32 h-44 transform -rotate-6">
//                     <div className="bg-white rounded-lg p-2 h-full">
//                       <div className="space-y-1">
//                         <div className="bg-blue-100 h-2 rounded w-full"></div>
//                         <div className="bg-blue-200 h-1 rounded w-3/4"></div>
//                         <div className="grid grid-cols-2 gap-1 mt-2">
//                           <div className="bg-[#0066FF] h-12 rounded"></div>
//                           <div className="bg-blue-200 h-12 rounded"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute -bottom-4 right-4 bg-gray-800 rounded-2xl p-1 shadow-xl w-20 h-36 transform rotate-12">
//                     <div className="bg-white rounded-xl p-1 h-full">
//                       <div className="space-y-1">
//                         <div className="bg-blue-100 h-1 rounded w-full"></div>
//                         <div className="bg-[#0066FF] h-8 rounded"></div>
//                         <div className="bg-blue-200 h-1 rounded w-2/3"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default RevenueIntelligence;
