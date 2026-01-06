export const supportHero = {
    tag: 'weleba Support',
    title: '24/7 Expert Support When You Need It Most',
    description: 'Our team of hospitality experts is here to ensure your technology runs smoothly, so you can focus on your guests. Get the help you need, when you need it.'
};

export const supportContactMethods = [
    {
        title: 'Immediate Assistance',
        description: 'Available 24/7 for critical operational issues and emergency front desk support.',
        icon: 'Phone',
        value: '+251929839303',
        action: 'Call Now',
        href: 'tel:+251929839303',
        badge: 'Critical Support',
        color: 'bg-red-50',
        textColor: 'text-red-600'
    },
    {
        title: 'General Support',
        description: 'For feature questions, training, and non-critical technical inquiries. Typical response: 2 hours.',
        icon: 'MessageCircle',
        value: 'info@weleba.com',
        action: 'Email Us',
        href: 'mailto:info@weleba.com',
        color: 'bg-blue-50',
        textColor: 'text-blue-600'
    },
    {
        title: 'Billing & Account',
        description: 'For subscription updates, billing inquiries, and contract management. Typical response: 1 business day.',
        icon: 'CreditCard',
        value: 'info@weleba.com',
        action: 'Email Billing',
        href: 'mailto:info@weleba.com',
        color: 'bg-green-50',
        textColor: 'text-green-600'
    }
];

export const webinars = [
    {
        title: 'Revenue Management Essentials',
        date: 'March 15, 2024',
        description: 'Learn the basics of hotel revenue management.',
        image: '/images/webinars/revenue-management.png',
        link: '/knowledge-base'
    },
    {
        title: 'Enhancing Guest Experience',
        date: 'March 22, 2024',
        description: 'Strategies to improve guest satisfaction scores.',
        image: '/images/webinars/guest-experience.png',
        link: '/knowledge-base'
    },
    {
        title: 'Optimizing Hotel Operations',
        date: 'March 29, 2024',
        description: 'Streamline your daily operations for efficiency.',
        image: '/images/webinars/operations.png',
        link: '/knowledge-base'
    }
];

export const supportResources = [
    {
        title: 'Knowledge Base',
        description: 'Access 500+ articles, step-by-step guides, and technical documentation.',
        icon: 'BookOpen',
        href: '/knowledge-base',
        cta: 'Browse Articles'
    },
    {
        title: 'Training Videos',
        description: 'Watch comprehensive walkthroughs of every feature in the weleba platform.',
        icon: 'PlayCircle',
        href: '/webinar',
        cta: 'Watch Videos'
    },
    {
        title: 'Feature Requests',
        description: 'Have an idea to make weleba better? We listen to our hotelier community.',
        icon: 'Sparkles',
        href: '/feedback',
        cta: 'Suggest Feature'
    }
];

// Demo Page Data
export const demoHero = {
    title: 'Experience weleba Live',
    subtitle: 'See how our unified platform can transform your property operations and guest experience.',
    expectations: [
        'Live, personalized tour of the weleba platform',
        'Direct answers to your specific operational questions',
        'Discover revenue growth and ROI potential',
        'Custom success path mapping for your property'
    ],
    trustedLogos: [
        'Nuvo Suites', 'ExplorUS', 'Harrison Hall', 'Seaboard Hotels', 'Wood River Inn'
    ]
};
