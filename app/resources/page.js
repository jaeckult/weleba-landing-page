import ResourceHero from '../components/sections/ResourceHero';
import ResourceHub from './components/ResourceHub';
import { resourceHubHero, resourceCategories } from '../lib/resourceHubData';
import { blogPosts } from '../lib/blogData';
import { newsArticles } from '../lib/newsData';

export const metadata = {
    title: 'Resource Centre | weleba - Hotel Management Hub',
    description: 'The ultimate resource hub for hoteliers. Access free guides, templates, webinars, calculators, and industry news in one place.',
};

export default function ResourcesPage() {
    // Get the featured blog post
    const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

    // Get latest articles from both blog and news (trending)
    const latestArticles = [
        ...blogPosts.slice(1, 3).map(p => ({ ...p, href: `/blog/${p.slug}`, category: p.category })),
        ...newsArticles.slice(0, 1).map(n => ({ ...n, href: `/news/${n.slug}`, category: 'News' }))
    ];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={resourceHubHero.tag}
                title={resourceHubHero.title}
                description={resourceHubHero.description}
            />

            <ResourceHub
                categories={resourceCategories}
                featuredPost={featuredPost}
                latestArticles={latestArticles}
            />
        </main>
    );
}
