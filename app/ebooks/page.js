import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import { ebooksHeader, ebooksList } from '../lib/resourcesData';

export const metadata = {
    title: 'Hotel Management E-Books & Guides | weleba Resources',
    description: 'Download comprehensive guides on hotel revenue management, contactless hospitality, and scaling hotel groups.',
};

export default function EbooksPage() {
    const categories = [...new Set(ebooksList.map(item => item.category))];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={ebooksHeader.tag}
                title={ebooksHeader.title}
                description={ebooksHeader.description}
            />

            <ResourceGrid
                items={ebooksList}
                categories={categories}
                type="ebook"
                title="E-Books & Whitepapers"
            />
        </main>
    );
}
