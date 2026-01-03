'use client';

import Image from 'next/image';

const ResourceHero = ({ tag, title, description, imageSrc = '/weird_pics/image.png' }) => {
    return (
        <section className="bg-[#f5f5f0] pt-32 pb-16 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8 shadow-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">{tag}</span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a1a1a] leading-[1.1] max-w-4xl">
                    {title}
                </h1>

                {description && (
                    <p className="mt-8 text-xl text-gray-600 max-w-2xl">
                        {description}
                    </p>
                )}
            </div>

            {/* Decorative illustration */}
            <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
                <Image
                    src={imageSrc}
                    alt="Decorative illustration"
                    fill
                    className="object-contain object-right opacity-80"
                />
            </div>
        </section>
    );
};

export default ResourceHero;
