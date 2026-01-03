'use client';

import Link from 'next/link';
import { LayoutDashboard, Bot, CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import { Badge } from '../ui';
import { dailyOperationsContent } from '../../lib/constants';

const iconMap = {
  LayoutDashboard,
  Bot,
  CreditCard,
  Smartphone,
};

const DailyOperations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6">
            {dailyOperationsContent.title}
          </h2>
          <p className="text-lg text-gray-600">
            {dailyOperationsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyOperationsContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Link
                key={index}
                href={feature.href}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0066FF] hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0a1628] flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {feature.badge && (
                    <Badge variant="new" size="sm">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-[#0066FF] font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DailyOperations;
