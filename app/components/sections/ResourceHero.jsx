'use client';

import Image from 'next/image';

const ResourceHero = ({ tag, title, description, imageSrc = '/weird_pics/image.png' }) => {
    return (
        <section className="bg-[#f5f5f0] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">{tag}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a1a1a] leading-[1.1] max-w-4xl">
                    {title}
                </h1>

                {description && (
                    <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl text-balance">
                        {description}
                    </p>
                )}
            </div>

            {/* Decorative illustration */}
            <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full hidden sm:block pointer-events-none">
                <Image
                    src={imageSrc}
                    alt="Decorative illustration"
                    fill
                    className="object-contain object-right opacity-30 sm:opacity-80"
                />
            </div>
        </section>
    );
};

export default ResourceHero;
