import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const ContentBlock = ({ title, description, image, lists, imageLeft = false }) => {
    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-16 ${imageLeft ? '' : 'lg:flex-row-reverse'}`}>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className={`absolute inset-0 bg-blue-100 rounded-3xl transform ${imageLeft ? '-rotate-3' : 'rotate-3'} scale-95 opacity-50`}></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                            <Image
                                src={image}
                                alt={title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6 leading-tight"
                            style={{ fontFamily: 'Recoleta, Georgia, serif' }}
                        >
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {description}
                        </p>

                        {lists && (
                            <ul className="space-y-4">
                                {lists.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#0066FF] flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentBlock;
