'use client';

  import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PropertyTypes = () => {
  const properties = [
    { 
      title: 'Independent Hotels', 
      image: '/HOTELS/image.png',
      href: '/independent-hotels-software'
    },
    { 
      title: 'Hotel Groups', 
      image: '/HOTELS/image copy.png',
      href: '/pms-hotel-groups'
    },
    { 
      title: 'B & B and Inns', 
      image: '/HOTELS/image copy 2.png',
      href: '/bed-breakfast-software'
    },
    { 
      title: 'Parks', 
      image: '/HOTELS/image copy 3.png',
      href: '/parks'
    },
    { 
      title: 'Resorts', 
      image: '/HOTELS/image copy 4.png',
      href: '/resorts-pms-software'
    },
    { 
      title: 'Motels', 
      image: '/HOTELS/image copy 5.png',
      href: '/motel'
    },
  ];

  return (
    <section className="py-20 bg-[#fbf9f4]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header with Tag */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Properties Supported
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
            Hotel Management Software for<br className="hidden md:block" /> Every Property Type
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="group cursor-pointer"
            >
              {/* Image Container with Inset Hover Effect */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* The Inset Cut-out (Top Right) */}
                <div className="absolute top-0 right-0 w-0 h-0 bg-[#fbf9f4] transition-all duration-300 ease-in-out group-hover:w-32 group-hover:h-20 rounded-bl-[2rem] z-10" />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              {/* Label Area */}
              <div className="mt-6 flex items-center justify-between px-2">
                <h3 className="text-2xl font-bold text-[#0a1628] transition-colors duration-300 group-hover:text-[#0066FF]">
                  {item.title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0066FF] group-hover:border-[#0066FF]">
                  <ArrowUpRight className="w-5 h-5 text-gray-600 transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
