'use client';

import ResourceHero from '../components/sections/ResourceHero';
import ResourceHub from './components/ResourceHub';
import { resourceHubHero as enHero, resourceCategories as enCategories } from '../lib/resourceHubData';
import { resourceHubHero as amHero, resourceCategories as amCategories } from '../lib/resourceHubData.am';
import { blogPosts as enBlogPosts } from '../lib/blogData';
import { blogPosts as amBlogPosts } from '../lib/blogData.am';
import { newsArticles as enNewsArticles } from '../lib/newsData';
import { newsArticles as amNewsArticles } from '../lib/newsData.am';
import { useLanguage } from '../context/LanguageContext';

export default function ResourcesPage() {
    const { locale } = useLanguage();

    const hero = locale === 'am' ? amHero : enHero;
    const categories = locale === 'am' ? amCategories : enCategories;
    const blogPosts = locale === 'am' ? amBlogPosts : enBlogPosts;
    const newsArticles = locale === 'am' ? amNewsArticles : enNewsArticles;

    // Get the featured blog post
    const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

    // Get latest articles from both blog and news (trending)
    const latestArticles = [
        ...blogPosts.slice(1, 3).map(p => ({ ...p, href: `/blog/${p.slug}`, category: p.category })),
        ...newsArticles.slice(0, 1).map(n => ({ ...n, href: `/news/${n.slug}`, category: locale === 'am' ? 'ዜና' : 'News' }))
    ];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={hero.tag}
                title={hero.title}
                description={hero.description}
            />

            <ResourceHub
                categories={categories}
                featuredPost={featuredPost}
                latestArticles={latestArticles}
            />
        </main>
    );
}
