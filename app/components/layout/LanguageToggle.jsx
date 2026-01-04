'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
    const { locale, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#0066FF] hover:bg-gray-50 transition-all group"
            title={locale === 'en' ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ይቀይሩ'}
        >
            <Globe className={`w-4 h-4 ${locale === 'am' ? 'text-[#0066FF]' : 'text-gray-500'} group-hover:text-[#0066FF] transition-colors`} />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0066FF] transition-colors uppercase">
                {locale === 'en' ? 'EN' : 'AM'}
            </span>
        </button>
    );
};

export default LanguageToggle;
