export const caseStudiesPageContent = {
    hero: {
        tag: 'Customer Success',
        title: 'Hear From the <span className="text-[#0066FF]">Hoteliers</span> \nWho Trust weleba',
        description: 'Discover how properties of all sizes use our platform to streamline operations, enhance guest experiences, and grow their bottom line.',
        featured: {
            tag: 'Featured Story',
            title: 'Yamlak Negash, Manager',
            image: '/featured/wood-river-inn.png'
        }
    },
    card: {
        readMore: 'Read Case Study'
    },
    trustedBy: 'Trusted by thousands worldwide',
    cta: {
        title: 'Ready to write your own success story?',
        subtitle: 'Explore our platform and see how we can help your property thrive.',
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
            title: 'Achieve similar results for your property',
            subtitle: 'Join the thousands of hotels that trust weleba to power their success.',
            buttonText: 'Get Your Quote'
        }
    }
};

export const caseStudies = [
    {
        id: 1,
        slug: "nuvo-suites-revpar-boost",
        title: "How NUVO Suites Boosted RevPAR by 25% with weleba",
        hotel: "NUVO Suites",
        location: "Miami, Florida",
        image: "/featured/wood-river-inn.png",
        logo: "/nuvo-logo.png",
        category: "Full-Service Hotel",
        stats: [
            { label: "RevPAR Growth", value: "+25%" },
            { label: "Bookings", value: "+15%" }
        ],
        summary: "NUVO Suites needed a unified system to manage their complex operations. weleba provided an all-in-one solution that streamlined guest engagement and boosted revenue.",
        author: "Yamlak Negash",
        date: "Dec 15, 2025",
        readTime: "6 min read",
        contentHtml: `
## The Challenge
NUVO Suites, a premier full-service hotel in Miami, was struggling with fragmented systems. Their property management, guest communication, and revenue mapping were all handled by different, non-communicating tools. This led to operational silos and missed revenue opportunities.

## The Solution
By implementing weleba's all-in-one platform, NUVO Suites was able to centralize their operations. The AI Concierge handled guest requests instantly, while the integrated RMS provided real-time pricing adjustments based on local Miami demand patterns.

> "weleba makes running Nuvo Suites so much easier, everything's in one place, from bookings to housekeeping. It's extremely customisable - they customised everything according to our needs."
> 
> — Yamlak Negash, General Manager

## The Results
Within the first six months, NUVO Suites saw a significant transformation in their key performance indicators. Direct bookings increased by 15%, reducing their reliance on high-commission OTAs. Most impressively, their RevPAR grew by 25% year-over-year.
    `
    },
    {
        id: 2,
        slug: "wood-river-inn-efficiency",
        title: "Wood River Inn: Gaining Confidence in Operations",
        hotel: "Wood River Inn",
        location: "Hailey, Idaho",
        image: "/featured/wood-river-inn.png",
        logo: "/wood-river-logo.png",
        category: "Independent Inn",
        stats: [
            { label: "Staff Efficiency", value: "+40%" },
            { label: "Direct Bookings", value: "+20%" }
        ],
        summary: "By switching to weleba, Wood River Inn was able to automate manual tasks, allowing their staff to focus more on guest experience.",
        author: "Ryan Allison",
        date: "Nov 10, 2025",
        readTime: "4 min read",
        contentHtml: `
## Operations Done Right
For a small independent inn like Wood River, efficiency is everything. Before weleba, the staff spent hours every day manually syncing calendars across booking channels and responding to basic guest FAQs.

## Automation with a Human Touch
weleba's automation tools took over the heavy lifting. Automated check-in emails and the AI-powered guest app allowed guests to self-serve for common requests, freeing up the front desk to provide a more personalized welcome.

> "weleba gave us the confidence to run our business efficiently. The system is intuitive and the training was quick. Our staff adapted within days."
> 
> — Ryan Allison, Owner

## Measurable Impact
The inn reported a 40% increase in staff efficiency, measured by hours saved on administrative tasks. This efficiency directly translated to better guest reviews and a 20% lift in direct bookings.
    `
    },
    {
        id: 3,
        slug: "harrison-hall-hotel-long-term-success",
        title: "Harrison Hall Hotel: 25 Years of Success",
        hotel: "Harrison Hall Hotel",
        location: "Ocean City, Maryland",
        image: "/featured/wood-river-inn.png",
        logo: "/harrison-logo.png",
        category: "Boutique Hotel",
        stats: [
            { label: "Retention Rate", value: "98%" },
            { label: "System Uptime", value: "99.9%" }
        ],
        summary: "A decades-long partnership that has seen Harrison Hall Hotel evolve alongside weleba's cutting-edge hospitality technology.",
        author: "Stacy Dadson",
        date: "Oct 5, 2025",
        readTime: "5 min read",
        contentHtml: `
## The Evolution of Hospitality
Harrison Hall Hotel has been a staple in Ocean City for decades. Their partnership with weleba (formerly roomMaster) spans 25 years, witnessing the transition from paper logs to cloud-based AI systems.

## Staying Ahead of the Curve
While many legacy properties struggle with technology, Harrison Hall has always stayed ahead by leveraging our latest features. From being early adopters of our mobile guest app to utilizing our advanced revenue intelligence, they have maintained a 98% guest retention rate.

> "We've been using weleba for 25 years and it continues to streamline our operations. The support team is exceptional and always there when we need them."
> 
> — Stacy Dadson, General Manager
    `
    }
];
