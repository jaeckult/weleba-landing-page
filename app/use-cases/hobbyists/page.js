'use client';

import PMSHero from '@/app/components/sections/PMSHero';
import TabbedFeatures from '@/app/components/sections/TabbedFeatures';
import PMSTransform from '@/app/components/sections/PMSTransform';
import ContentBlock from '@/app/components/sections/ContentBlock';
import Testimonials from '@/app/components/sections/Testimonials';
import LogoSlideshow from '@/app/components/sections/LogoSlideshow';
import { heroContent, transformContent, tabbedContent, alternatingContent } from '@/app/lib/pageData/hobbyistsData';

export default function GenericFeaturePage() {
    return (
        <main className="bg-white">
            <PMSHero heroContent={heroContent}>
                <LogoSlideshow />
                <Testimonials />
                <PMSTransform content={transformContent} />
                <TabbedFeatures
                    title={tabbedContent.title}
                    subtitle={tabbedContent.subtitle}
                    tabs={tabbedContent.tabs}
                />
                {alternatingContent.map((feature, index) => (
                    <ContentBlock
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        lists={feature.lists}
                        imageLeft={feature.imageLeft}
                    />
                ))}
            </PMSHero>
        </main>
    );
}
