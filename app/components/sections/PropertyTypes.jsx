'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { propertyTypesContent as enProps } from '../../lib/constants';
import { propertyTypesContent as amProps } from '../../lib/constants.am';
import { useLanguage } from '../../context/LanguageContext';

const PropertyTypes = () => {
  const { locale } = useLanguage();
  const content = locale === 'am' ? amProps : enProps;

  const propertyImages = {
    'Independent Hotels': '/HOTELS/image.png',
    'Hotel Groups': '/HOTELS/image copy.png',
    'B & B and Inns': '/HOTELS/image copy 2.png',
    'Parks': '/HOTELS/image copy 3.png',
    'Resorts': '/HOTELS/image copy 4.png',
    'Motels': '/HOTELS/image copy 5.png',
    // Amharic keys
    'ገለልተኛ ሆቴሎች': '/HOTELS/image.png',
    'የሆቴል ቡድኖች': '/HOTELS/image copy.png',
    'አልጋ እና ቁርስ (B&B)': '/HOTELS/image copy 2.png',
    'ፓርኮች': '/HOTELS/image copy 3.png',
    'ሪዞርቶች': '/HOTELS/image copy 4.png',
    'ሞቴሎች': '/HOTELS/image copy 5.png'
  };

  const properties = (content.types || []).map(f => ({
    ...f,
    image: propertyImages[f.title] || '/HOTELS/image.png'
  }));

  const tag = content.tag || (locale === 'am' ? 'የሚደገፉ ንብረቶች' : 'Properties Supported');

  return (
    <section className="py-20 bg-[#fbf9f4]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header with Tag */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            {tag}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight"
            dangerouslySetInnerHTML={{ __html: content.title.replace('\n', '<br />') }}
          />
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
