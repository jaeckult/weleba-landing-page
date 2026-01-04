'use client';

import BlogHero from './components/BlogHero';
import BlogList from './components/BlogList';
import RelatedPosts from './components/RelatedPosts';
import {
    blogCategories as enCategories,
    blogPosts as enPosts
} from '../lib/blogData';
import {
    blogCategories as amCategories,
    blogPosts as amPosts
} from '../lib/blogData.am';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPage() {
    const { locale } = useLanguage();

    const posts = locale === 'am' ? amPosts : enPosts;
    const categories = locale === 'am' ? amCategories : enCategories;

    return (
        <main>
            <BlogHero />
            <BlogList posts={posts} categories={categories} />
            <RelatedPosts posts={posts} />
        </main>
    );
}
