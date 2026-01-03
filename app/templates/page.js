import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import { templatesHeader, templatesList } from '../lib/resourcesData';

export const metadata = {
    title: 'Hotel Templates & Checklists | weleba Resources',
    description: 'Download free hotel housekeeping checklists, shift handover templates, and operational guides to improve your hotel management.',
};

export default function TemplatesPage() {
    const categories = [...new Set(templatesList.map(item => item.category))];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={templatesHeader.tag}
                title={templatesHeader.title}
                description={templatesHeader.description}
            />

            <ResourceGrid
                items={templatesList}
                categories={categories}
                type="template"
                title="Templates & Guides"
            />
        </main>
    );
}
