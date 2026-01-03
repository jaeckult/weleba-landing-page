import ResourceHero from '../components/sections/ResourceHero';
import SupportContent from './components/SupportContent';
import GetStarted from '../components/sections/GetStarted';
import { supportHero, supportContactMethods, supportResources } from '../lib/supportDemoData';

export const metadata = {
    title: 'Support | weleba - 24/7 Hospitality Expert Assistance',
    description: 'Get 24/7 expert support for weleba. Access our knowledge base, contact our technical team, or explore training videos.',
};

export default function SupportPage() {
    return (
        <main className="bg-white">
            <ResourceHero
                tag={supportHero.tag}
                title={supportHero.title}
                description={supportHero.description}
            />

            <SupportContent
                contactMethods={supportContactMethods}
                resources={supportResources}
            />

            <GetStarted />
        </main>
    );
}
