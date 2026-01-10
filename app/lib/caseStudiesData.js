export const caseStudiesPageContent = {
    hero: {
        tag: 'Customer Success',
        title: 'Hear From the <span className="text-[#0066FF]">Business Owners</span> \nWho Trust weleba',
        description: 'Discover how businesses of all sizes use our platform to streamline operations, enhance customer experiences, and grow their bottom line.',
        featured: {
            tag: 'Featured Story',
            title: 'Yamlak Negash, Manager',
            image: '/HOTELS/image copy 3.png'
        }
    },
    card: {
        readMore: 'Read Case Study'
    },
    trustedBy: 'TRUSTED BY THOUSANDS WORLDWIDE',
    cta: {
        title: 'Ready to write your own success story?',
        subtitle: 'Explore our platform and see how we can help your business thrive.',
        buttonText: 'Book a Demo'
    },
    detailPage: {
        backToGallery: 'Back to Customer Stories',
        notFound: {
            title: 'Story Not Found',
            message: "The customer story you're looking for might have been moved or deleted.",
            buttonText: 'Back to Customer Stories'
        },
        cta: {
            title: 'Achieve similar results for your business',
            subtitle: 'Join the thousands of businesses that trust weleba to power their success.',
            buttonText: 'Get Your Quote'
        }
    }
};

export const caseStudies = [
    {
        id: 1,
        slug: "nuvo-suites-revenue-boost",
        title: "How NUVO Enterprise Boosted Revenue by 25% with weleba",
        company: "NUVO Enterprise",
        location: "Addis Ababa, Ethiopia",
        image: "/HOTELS/image.png",
        logo: "/nuvo-logo.png",
        category: "Full-Service Business",
        stats: [
            { label: "Revenue Growth", value: "+25%" },
            { label: "Orders/Bookings", value: "+15%" }
        ],
        summary: "NUVO Suites needed a unified system to manage their complex operations. weleba provided an all-in-one solution that streamlined customer engagement and boosted revenue.",
        author: "Yamlak Negash",
        date: "Dec 15, 2025",
        readTime: "6 min read",
        contentHtml: `
## The Challenge
NUVO Suites, a premier full-service business in Addis Ababa, was struggling with fragmented systems. Their operations management, customer communication, and revenue mapping were all handled by different, non-communicating tools. This led to operational silos and missed revenue opportunities.

## The Solution
By implementing weleba's all-in-one platform, NUVO Suites was able to centralize their operations. The AI Assistant handled customer requests instantly, while the integrated system provided real-time pricing adjustments based on local Addis Ababa demand patterns.

> "weleba makes running Nuvo Suites so much easier, everything's in one place, from sales to maintenance. It's extremely customisable - they customised everything according to our needs."
> 
> — Yamlak Negash, General Manager

## The Results
Within the first six months, NUVO Suites saw a significant transformation in their key performance indicators. Direct sales increased by 15%, reducing their reliance on high-commission platforms. Most impressively, their Revenue grew by 25% year-over-year.
    `
    },
    {
        id: 2,
        slug: "skylight-efficiency",
        title: "Skylight Enterprise: Gaining Confidence in Operations",
        company: "Skylight Enterprise",
        location: "Bahir Dar, Ethiopia",
        image: "/HOTELS/image copy 2.png",
        logo: "/logo/canvas.png",
        category: "Independent Business",
        stats: [
            { label: "Staff Efficiency", value: "+40%" },
            { label: "Direct Sales", value: "+20%" }
        ],
        summary: "By switching to weleba, Skylight Hotel was able to automate manual tasks, allowing their staff to focus more on customer experience.",
        author: "Abebe Tadesse",
        date: "Nov 10, 2025",
        readTime: "4 min read",
        contentHtml: `
## Operations Done Right
For a boutique business like Skylight, efficiency is everything. Before weleba, the staff spent hours every day manually syncing calendars across sales channels and responding to basic FAQs.

## Automation with a Human Touch
weleba's automation tools took over the heavy lifting. Automated emails and the AI-powered app allowed customers to self-serve for common requests, freeing up the front desk to provide a more personalized welcome.

> "weleba gave us the confidence to run our business efficiently. The system is intuitive and the training was quick. Our staff adapted within days."
> 
> — Abebe Tadesse, General Manager

## Measurable Impact
The business reported a 40% increase in staff efficiency, measured by hours saved on administrative tasks. This efficiency directly translated to better reviews and a 20% lift in direct sales.
    `
    },
    {
        id: 3,
        slug: "habesha-long-term-success",
        title: "Habesha Business Hub: Years of Excellence",
        company: "Habesha Business Hub",
        location: "Hawassa, Ethiopia",
        image: "/HOTELS/image copy 5.png",
        logo: "/logo/canvas.png",
        category: "Boutique Business",
        stats: [
            { label: "Retention Rate", value: "98%" },
            { label: "System Uptime", value: "99.9%" }
        ],
        summary: "A successful partnership that has seen Habesha Hotel evolve alongside weleba's cutting-edge business technology.",
        author: "Yetmgeta Ewunetu",
        date: "Oct 5, 2025",
        readTime: "5 min read",
        contentHtml: `
## The Evolution of Business Management
Habesha Hotel has been a staple in Hawassa for years. Their partnership with weleba has witnessed the transition from paper logs to cloud-based AI systems.

## Staying Ahead of the Curve
While many businesses struggle with technology, Habesha Hotel has always stayed ahead by leveraging our latest features. From being early adopters of our mobile app to utilizing our advanced revenue intelligence, they have maintained a 98% customer retention rate.

> "We've been using weleba and it continues to streamline our operations. The support team is exceptional and always there when we need them."
> 
> — Yetmgeta Ewunetu, General Manager
    `
    }
];
