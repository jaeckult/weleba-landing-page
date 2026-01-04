'use client';

import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import {
    webinarsHeader as enHeader,
    webinarsList as enList
} from '../lib/resourcesData';
import {
    webinarsHeader as amHeader,
    webinarsList as amList
} from '../lib/resourcesData.am';
import { useLanguage } from '../context/LanguageContext';

export default function WebinarsPage() {
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
                type="webinar"
                title={locale === 'am' ? 'ቪዲዮ ትምህርቶች (Webinars)' : 'On-Demand Webinars'}
            />
        </main>
    );
}
