'use client';

import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import {
    ebooksHeader as enHeader,
    ebooksList as enList
} from '../lib/resourcesData';
import {
    ebooksHeader as amHeader,
    ebooksList as amList
} from '../lib/resourcesData.am';
import { useLanguage } from '../context/LanguageContext';

export default function EbooksPage() {
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
                type="ebook"
                title={locale === 'am' ? 'ኢ-መጽሐፍት እና ጥናቶች' : 'E-Books & Whitepapers'}
            />
        </main>
    );
}
