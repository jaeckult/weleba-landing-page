import NewsHero from './components/NewsHero';
import NewsList from './components/NewsList';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import BlogCTA from '../components/sections/BlogCTA';
import { newsArticles, newsCategories } from '../lib/newsData';

export const metadata = {
    title: 'News | weleba - Latest Updates & Announcements',
    description: 'Stay informed with the latest weleba product updates, company announcements, and hospitality industry news. Get insights that matter to your hotel.',
};

export default function NewsPage() {
    return (
        <main>
            <NewsHero />
            <NewsList articles={newsArticles} categories={newsCategories} />
            <NewsletterSubscribe />
            <BlogCTA />
        </main>
    );
}
