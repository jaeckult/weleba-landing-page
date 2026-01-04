'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { caseStudiesPageContent } from '../../lib/caseStudiesData';

const CaseStudyCard = ({ study }) => {
    const { card } = caseStudiesPageContent;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#0066FF] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {study.category}
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg p-1.5 border border-gray-100 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-gray-400">{study.hotel.split(' ')[0]}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">{study.hotel}</h4>
                        <p className="text-[11px] text-gray-500">{study.location}</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                    {study.title}
                </h3>

                <p className="text-sm text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                    {study.summary}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
                    {study.stats.map((stat, index) => (
                        <div key={index} className="bg-blue-50/50 rounded-xl p-3 border border-blue-100/50">
                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-lg font-bold text-[#0066FF]">{stat.value}</p>
                        </div>
                    ))}
                </div>

                <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-[#0066FF] font-bold text-sm group/link"
                >
                    {card.readMore}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default CaseStudyCard;
