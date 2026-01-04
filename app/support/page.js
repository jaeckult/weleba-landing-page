'use client';

import ResourceHero from '../components/sections/ResourceHero';
import SupportContent from './components/SupportContent';
import GetStarted from '../components/sections/GetStarted';
import {
    supportHero as enHero,
    supportContactMethods as enMethods,
    supportResources as enResources
} from '../lib/supportDemoData';
import {
    supportHero as amHero,
    supportContactMethods as amMethods,
    supportResources as amResources
} from '../lib/supportDemoData.am';
import { useLanguage } from '../context/LanguageContext';

export default function SupportPage() {
    const { locale } = useLanguage();

    const hero = locale === 'am' ? amHero : enHero;
    const contactMethods = locale === 'am' ? amMethods : enMethods;
    const resources = locale === 'am' ? amResources : enResources;

    return (
        <main className="bg-white">
            <ResourceHero
                tag={hero.tag}
                title={hero.title}
                description={hero.description}
            />

            <SupportContent
                contactMethods={contactMethods}
                resources={resources}
            />

            <GetStarted />
        </main>
    );
}
