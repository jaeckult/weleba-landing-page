import Image from 'next/image';

const BlogHero = () => {
    return (
        <section className="bg-[#f5f5f0] pt-32 pb-16 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8 shadow-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Blog</span>
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#1a1a1a] leading-[1.1] max-w-4xl">
                    weleba<br />
                    Blog & News<br />
                    Updates
                </h1>

                <p className="mt-8 text-xl text-gray-600 max-w-2xl">
                    Expert insights, industry trends, and practical tips to help you optimize your hotel operations and maximize revenue.
                </p>
            </div>

            {/* Decorative line illustration in background */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
                <div className="relative w-full h-full">
                    <Image
                        src="/weird_pics/image.png"
                        alt="Decorative illustration"
                        fill
                        className="object-contain object-right"
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
