import { newsArticles } from '../../lib/newsData';
import NewsArticle from './NewsArticle';

export async function generateStaticParams() {
    return newsArticles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = newsArticles.find(p => p.slug === slug);

    if (!article) {
        return {
            title: 'News Not Found | weleba',
        };
    }

    return {
        title: `${article.title} | weleba News`,
        description: article.excerpt,
    };
}

export default async function NewsPostPage({ params }) {
    const { slug } = await params;
    return <NewsArticle slug={slug} />;
}

