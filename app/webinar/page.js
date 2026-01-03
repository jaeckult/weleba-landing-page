import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import { webinarsHeader, webinarsList } from '../lib/resourcesData';

export const metadata = {
    title: 'Hospitality Webinars | weleba Resources',
    description: 'Watch on-demand webinars on hotel revenue management, AI in hospitality, and direct booking strategies from industry experts.',
};

export default function WebinarsPage() {
    const categories = [...new Set(webinarsList.map(item => item.category))];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={webinarsHeader.tag}
                title={webinarsHeader.title}
                description={webinarsHeader.description}
            />

            <ResourceGrid
                items={webinarsList}
                categories={categories}
                type="webinar"
                title="On-Demand Webinars"
            />
        </main>
    );
}
