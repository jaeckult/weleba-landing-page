'use client';

import PMSHero from '../components/sections/PMSHero';
import TabbedFeatures from '../components/sections/TabbedFeatures';
import PMSTransform from '../components/sections/PMSTransform';
import {
    pmFeatureGrid as enGrid,
    pmTabbedFeatures as enTabbed,
    pmAlternatingFeatures as enAlt
} from '../lib/propertyManagementData';
import {
    pmFeatureGrid as amGrid,
    pmTabbedFeatures as amTabbed,
    pmAlternatingFeatures as amAlt
} from '../lib/propertyManagementData.am';
import { pmTransformContent as enTransform } from '../lib/newPmData';
import { pmTransformContent as amTransform } from '../lib/newPmData.am';
import { useLanguage } from '../context/LanguageContext';

import ContentBlock from '../components/sections/ContentBlock';
import Testimonials from '../components/sections/Testimonials';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import GetStarted from '../components/sections/GetStarted';

export default function PropertyManagementPage() {
    const { locale } = useLanguage();

    const grid = locale === 'am' ? amGrid : enGrid;
    const tabbed = locale === 'am' ? amTabbed : enTabbed;
    const alternating = locale === 'am' ? amAlt : enAlt;
    const transform = locale === 'am' ? amTransform : enTransform;

    return (
        <main className="bg-white">
            <PMSHero>
                <LogoSlideshow />

                {/* Testimonial Section */}
                <Testimonials />

                <PMSTransform content={transform} />

                <TabbedFeatures
                    title={tabbed.title}
                    subtitle={tabbed.subtitle}
                    tabs={tabbed.tabs}
                />

                {/* Alternating Detail Sections */}
                {alternating.map((feature, index) => (
                    <ContentBlock
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        lists={feature.lists}
                        imageLeft={feature.imageLeft}
                    />
                ))}
                <GetStarted />
            </PMSHero>
        </main>
    );
}
