import ResourceHero from '../components/sections/ResourceHero';
import ResourceGrid from '../components/sections/ResourceGrid';
import { calculatorsHeader, calculatorsList } from '../lib/resourcesData';

export const metadata = {
    title: 'Hotel Management Calculators | weleba Resources',
    description: 'Calculate RevPAR, ADR, and potential commission savings with our free interactive hotel performance tools.',
};

export default function CalculatorsPage() {
    const categories = [...new Set(calculatorsList.map(item => item.category))];

    return (
        <main className="bg-white">
            <ResourceHero
                tag={calculatorsHeader.tag}
                title={calculatorsHeader.title}
                description={calculatorsHeader.description}
            />

            <ResourceGrid
                items={calculatorsList}
                categories={categories}
                type="calculator"
                title="Management Tools"
            />
        </main>
    );
}
