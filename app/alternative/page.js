import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import { alternativesHeader, alternativesList } from '../lib/resourcesData';

export const metadata = {
    title: 'weleba Comparisons | How We Stack Up Against Other Hotel PMS',
    description: 'Compare weleba with Cloudbeds, Mews, Opera, and other property management systems to see why hoteliers are making the switch.',
};

export default function AlternativesPage() {
    const categories = [...new Set(alternativesList.map(item => item.category))];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={alternativesHeader.tag}
                title={alternativesHeader.title}
                description={alternativesHeader.description}
            />

            <ResourceGrid
                items={alternativesList}
                categories={categories}
                type="alternative"
                title="Compare and Switch"
            />
        </main>
    );
}
