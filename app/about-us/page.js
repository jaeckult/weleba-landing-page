import AboutHero from './components/AboutHero';
import ScrollStack from './components/ScrollStack';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContentBlock from '../components/sections/ContentBlock';

export const metadata = {
    title: 'About Us | weleba - Building the Future of Hotel Management',
    description: 'Discover our story, mission, and the team behind weleba. We\'re revolutionizing how hotels operate, one innovation at a time.',
};

const aboutImages = [
    {
        src: '/about/image.png',
        alt: 'About weleba - Our Mission',
    },
    {
        src: '/about/image copy.png',
        alt: 'About weleba - Our Team',
    },
    {
        src: '/about/image copy 2.png',
        alt: 'About weleba - Our Values',
    },
    {
        src: '/about/image copy 3.png',
        alt: 'About weleba - Our Vision',
    },
];

const aboutSections = [
    {
        title: 'Our Mission',
        description: 'To empower hotels worldwide with cutting-edge technology that simplifies operations, maximizes revenue, and enhances guest experiences. We believe every hotel deserves tools that work as hard as they do.',
        image: '/about/image.png',
        lists: [
            'Simplify complex hotel operations',
            'Maximize revenue opportunities',
            'Enhance guest satisfaction',
            'Empower hotel teams worldwide',
        ],
        imageLeft: false,
    },
    {
        title: 'Our Team',
        description: 'Our diverse team of hospitality experts, engineers, and designers work together to create solutions that transform how hotels operate. We combine deep industry knowledge with cutting-edge technology to deliver exceptional results.',
        image: '/about/image copy.png',
        lists: [
            'Industry-leading experts',
            'Innovative engineers and designers',
            'Dedicated support specialists',
            'Passionate about hospitality',
        ],
        imageLeft: true,
    },
    {
        title: 'Our Values',
        description: 'At weleba, we operate with integrity, innovation, and a relentless focus on customer success. These core values guide everything we do and shape how we build products and serve our clients.',
        image: '/about/image copy 2.png',
        lists: [
            'Customer-first approach',
            'Continuous innovation',
            'Transparency and integrity',
            'Excellence in execution',
        ],
        imageLeft: false,
    },
    {
        title: 'Our Vision',
        description: 'To become the global leader in hotel management solutions, recognized for innovation, reliability, and exceptional customer support. We envision a future where hotel management is seamless, intuitive, and rewarding.',
        image: '/about/image copy 3.png',
        lists: [
            'Global leadership in hotel technology',
            'Continuous innovation and improvement',
            'Exceptional customer support',
            'Seamless hotel operations worldwide',
        ],
        imageLeft: true,
    },
];

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            {/* <ScrollStack images={aboutImages} /> */}
            {aboutSections.map((section, index) => (
                <ScrollReveal key={index} delay={0.1}>
                    <ContentBlock
                        title={section.title}
                        description={section.description}
                        image={section.image}
                        lists={section.lists}
                        imageLeft={section.imageLeft}
                    />
                </ScrollReveal>
            ))}
            <ScrollReveal delay={0.1}>
                <Testimonials />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <GetStarted />
            </ScrollReveal>
        </main>
    );
}
