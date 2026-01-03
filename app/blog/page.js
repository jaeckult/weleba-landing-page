import BlogHero from './components/BlogHero';
import BlogList from './components/BlogList';
import BlogCTA from '../components/sections/BlogCTA';
import GetStarted from '../components/sections/GetStarted';
import RelatedPosts from './components/RelatedPosts';
import { blogCategories } from '../lib/blogData';
import { getSortedPostsData } from '../lib/posts.js';

export const metadata = {
    title: 'Blog | weleba - Hotel Management Insights & Tips',
    description: 'Expert insights, industry trends, and practical tips to help you optimize your hotel operations and maximize revenue.',
};

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main>
            <BlogHero />
            <BlogList posts={posts} categories={blogCategories} />
            <RelatedPosts posts={posts} />
        </main>
    );
}
