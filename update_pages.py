import os
import re

base_dir = '/home/jack/Burbly_Mobile_App/weleba-landing-page/app'

template = """'use client';

import PMSHero from '../../components/sections/PMSHero';
import TabbedFeatures from '../../components/sections/TabbedFeatures';
import PMSTransform from '../../components/sections/PMSTransform';
import ContentBlock from '../../components/sections/ContentBlock';
import Testimonials from '../../components/sections/Testimonials';
import LogoSlideshow from '../../components/sections/LogoSlideshow';
import { getGenericData } from '../../lib/pageData/genericData';

export default function GenericFeaturePage() {
    const data = getGenericData('{TITLE}', '{ICON}');
    return (
        <main className="bg-white">
            <PMSHero heroContent={data.heroContent}>
                <LogoSlideshow />
                <Testimonials />
                <PMSTransform content={data.transformContent} />
                <TabbedFeatures
                    title={data.tabbedContent.title}
                    subtitle={data.tabbedContent.subtitle}
                    tabs={data.tabbedContent.tabs}
                />
                {data.alternatingContent.map((feature, index) => (
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
"""

for root, _, files in os.walk(base_dir):
    for file in files:
        if file == 'page.js':
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Check if it uses ComingSoon
            if 'ComingSoon' in content:
                # Extract title and icon
                title_match = re.search(r'title="([^"]+)"', content)
                icon_match = re.search(r'icon="([^"]+)"', content)
                
                title = title_match.group(1) if title_match else 'Feature'
                icon = icon_match.group(1) if icon_match else '✨ Feature'
                
                new_content = template.replace('{TITLE}', title).replace('{ICON}', icon)
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")

