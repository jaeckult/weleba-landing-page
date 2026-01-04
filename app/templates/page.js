'use client';

import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import {
    templatesHeader as enHeader,
    templatesList as enList
} from '../lib/resourcesData';
import {
    templatesHeader as amHeader,
    templatesList as amList
} from '../lib/resourcesData.am';
import { useLanguage } from '../context/LanguageContext';

export default function TemplatesPage() {
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
                type="template"
                title={locale === 'am' ? 'ንድፎች እና መመሪያዎች' : 'Templates & Guides'}
            />
        </main>
    );
}
