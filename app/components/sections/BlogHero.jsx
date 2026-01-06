import Image from 'next/image';

const BlogHero = () => {
    return (
        <section className="bg-[#f5f5f0] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Blog</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#1a1a1a] leading-[1.1] max-w-4xl">
                    weleba<br />
                    Blog & News<br />
                    Updates
                </h1>

                <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl text-balance">
                    Expert insights, industry trends, and practical tips to help you optimize your hotel operations and maximize revenue.
                </p>
            </div>

            {/* Decorative line illustration in background */}
            <div className="absolute top-0 right-0 h-full w-1/2 opacity-30 sm:opacity-100 pointer-events-none">
                <Image src="/weird_pics/image.png" alt="Decorative illustration" fill className="object-contain object-right" />
            </div>
        </section>
    );
};

export default BlogHero;
