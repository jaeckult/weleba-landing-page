'use client';

import NewsHero from './components/NewsHero';
import NewsList from './components/NewsList';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import RelatedNews from './components/RelatedNews';
import {
    newsArticles as enArticles,
    newsCategories as enCategories
} from '../lib/newsData';
import {
    newsArticles as amArticles,
    newsCategories as amCategories
} from '../lib/newsData.am';
import { useLanguage } from '../context/LanguageContext';

export default function NewsPage() {
    const { locale } = useLanguage();

    const articles = locale === 'am' ? amArticles : enArticles;
    const categories = locale === 'am' ? amCategories : enCategories;

    return (
        <main>
            <NewsHero />
            <NewsList articles={articles} categories={categories} />
            <RelatedNews articles={articles} />
            <NewsletterSubscribe />
        </main>
    );
}
