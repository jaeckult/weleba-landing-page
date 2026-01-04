'use client';

import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import {
    calculatorsHeader as enHeader,
    calculatorsList as enList
} from '../lib/resourcesData';
import {
    calculatorsHeader as amHeader,
    calculatorsList as amList
} from '../lib/resourcesData.am';
import { useLanguage } from '../context/LanguageContext';

export default function CalculatorsPage() {
    const { locale } = useLanguage();

    const header = locale === 'am' ? amHeader : enHeader;
    const list = locale === 'am' ? amList : enList;

    const categories = [...new Set(list.map(item => item.category))];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={header.tag}
                title={header.title}
                description={header.description}
            />

            <ResourceGrid
                items={list}
                categories={categories}
                type="calculator"
                title={locale === 'am' ? 'የአስተዳደር መሳሪያዎች' : 'Management Tools'}
            />
        </main>
    );
}
