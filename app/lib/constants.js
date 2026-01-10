export const labels = {
  navigation: {
    products: 'Products',
    solutions: 'Solutions',
    resources: 'Resources',
    pricing: 'Pricing',
    caseStudies: 'Customer Stories',
    company: 'Company',
    categories: {
      operations: 'Operations',
      marketing: 'Sales & Marketing',
      revenue: 'Revenue & Finance',
      guest: 'Customer Experience',
      byProperty: 'By Business Type',
      byRole: 'By Role',
      resourceType: 'Resource Type',
      featuredArticles: 'Featured Articles',
      marketingDistribution: 'Sales & Distribution',
      revenueFinance: 'Revenue & Finance',
      guestExperience: 'Customer Experience',
      featured: 'Featured',
    }
  },
  blog: {
    newUpdate: 'New Update:',
    readPost: 'Read Post',
  },
  buttons: {
    bookDemo: 'Book A Demo',
    getStarted: 'Get Started',
    getFreeDemo: 'Get A Free Demo',
    subscribe: 'Subscribe',
    readAllStories: 'Read All Stories',
  },
  common: {
    allRightsReserved: 'All Rights Reserved.',
    trustText: 'Trusted by leading businesses worldwide',
    customerStory: 'Customer Story',
  },
  legal: {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  }
};

// Navigation Data
export const navigation = {
  products: {
    operations: [
      {
        title: 'Operations Management',
        description: 'All-in-one platform for complete business operations.',
        href: '/operations-management',
      },
      {
        title: 'Channel Manager',
        description: 'Manage inventory & sync across all sales channels.',
        href: '/channel-manager',
      },
    ],
    marketing: [
      {
        title: 'Sales Platform',
        description: 'Commission-free direct sales made easy.',
        href: '/booking-engine',
      },
      {
        title: 'Website Builder',
        description: 'Create stunning, conversion-optimized websites.',
        href: '/website-builder',
      },
    ],
    revenue: [
      {
        title: 'Revenue Intelligence',
        description: 'AI-powered pricing optimizes rates automatically.',
        href: '/revenue-management',
      },
      {
        title: 'Payments',
        description: 'Secure processing with automated billing.',
        href: '/weleba-payments',
        badge: 'Updated',
      },
    ],
    guest: [
      {
        title: 'Customer Communication',
        description: 'Automate personalized messaging throughout customer journey.',
        href: '/customer-engagement-software',
      },
      {
        title: 'Mobile App',
        description: 'Customer-facing mobile app for seamless experiences.',
        href: '/customer-app',
      },
      {
        title: 'AI Agent',
        description: '24/7 AI-powered customer support and assistance.',
        href: '/customer-ai-agent',
        badge: 'New',
      },
    ],
  },
  solutions: {
    byProperty: [
      { title: 'Service Businesses', description: 'Solutions for salons, spas, and consultants.', href: '/service-business-software' },
      { title: 'Retail Stores', description: 'POS and inventory for retail shops.', href: '/retail-software' },
      { title: 'Ecommerce', description: 'Tools to manage online stores and inventory.', href: '/ecommerce-management' },
      { title: 'Hotels & Resorts', description: 'Comprehensive hospitality management.', href: '/hotels-software' },
      { title: 'Restaurants', description: 'Table management and ordering systems.', href: '/restaurant-management' },
      { title: 'Multi-Location', description: 'Scalable platform for multi-unit enterprises.', href: '/multi-location-management' },
    ],
    byRole: [
      { title: 'General Managers', description: 'Strategic oversight and business intelligence tools.', href: '/general-managers' },
      { title: 'Operations Managers', description: 'Daily operations and customer service solutions.', href: '/front-desk-managers' },
      { title: 'Revenue Managers', description: 'Pricing optimization and financial performance tools.', href: '/revenue-managers' },
      { title: 'IT Managers', description: 'Technical platform management and system integration.', href: '/it-managers' },
    ],
  },
  resources: [
    { title: 'Blogs', description: 'Expert insights to optimize your business performance.', href: '/blog' },
    { title: 'News', description: 'Stay ahead with the latest business and technology trends.', href: '/news' },
    // { title: 'Templates', description: 'Download ready-to-use operational tools and forms.', href: '/templates' },
    { title: 'Webinars', description: 'Access exclusive webinars for smarter business management.', href: '/webinar' },
    // { title: 'Calculators', description: 'Calculate ROI, pricing, and revenue potential instantly.', href: '/calculators' },
    // { title: 'eBooks & Guides', description: 'Complete strategies for business growth.', href: '/ebooks' },
    // { title: 'Alternatives', description: 'Compare management software solutions to find your perfect fit.', href: '/alternative' },
  ],
  company: [
    { title: 'About Us', description: 'The business management experts behind weleba technology.', href: '/about-us' },
  ],
};

// Hero Section
export const heroContent = {
  announcement: {
    text: 'innQuest is rebranding to weleba - Business Management, Simplified.',
    href: '/about-us',
  },
  title: 'The complete management platform built for the way your business actually work',
  subtitle: 'Weleba empowers your team to focus on what matters most while intelligent tools work behind the scenes to maximize your revenue and operational efficiency across hotels, ecommerce, retail, and more.',
  cta: {
    primary: { text: 'Book A Demo', href: '/book-a-demo' },
    secondary: { text: 'View Pricing', href: '/pricing' },
  },
};

// Why Choose Section
export const whyChooseContent = {
  title: 'Why businesses choose weleba as their management software',
  features: [
    {
      title: 'Helps Boost Revenue',
      description: 'Our integrated solutions help increase revenue by up to 35% with commission-free direct sales, AI-powered pricing strategies, and automated workflows.',
      icon: 'TrendingUp',
    },
    {
      title: 'Built by Experts for Businesses',
      description: 'Building on our years of providing business management software, weleba understands your operational challenges across multiple industries.',
      icon: 'Users',
    },
    {
      title: 'All-in-One Platform',
      description: 'Everything you need to run your business in one seamless platform; connecting operations, sales, inventory, payments, and customer management.',
      icon: 'Layers',
    },
    {
      title: 'Easy to Learn',
      description: 'Our system is so easy to use that staff can learn essential functions in hours, not weeks, reducing training time by up to 50%.',
      icon: 'Zap',
    },
    {
      title: 'Accessible Anywhere, Anytime',
      description: 'Access your management system securely from anywhere, on any device. All updates and backups happen automatically with 99.95% uptime guaranteed.',
      icon: 'Globe',
    },
  ],
};

// Daily Operations Section
export const dailyOperationsContent = {
  title: 'Daily Operations & Customer Experience Management',
  subtitle: 'Essential tools that streamline your day-to-day operations while delivering exceptional customer experiences.',
  features: [
    {
      title: 'Operations Management',
      description: 'Streamline business operations, manage orders, and optimize workflows effortlessly.',
      href: '/operations-management',
      icon: 'LayoutDashboard',
    },
    {
      title: 'Payments',
      description: 'Secure, fast payment processing for hassle-free customer transactions.',
      href: '/weleba-payments',
      icon: 'CreditCard',
    },
    {
      title: 'Customer Mobile App',
      description: 'Enhance customer experience with a mobile app for orders, requests, and more.',
      href: '/customer-app',
      icon: 'Smartphone',
    },
  ],
};

// Revenue Intelligence Section
export const revenueIntelligenceContent = {
  title: 'AI Revenue Intelligence & Business Visibility',
  subtitle: 'Powerful tools to maximize your revenue potential and expand your online presence.',
  features: [
    {
      title: 'Sales Platform',
      description: 'Enable direct sales with a seamless, user-friendly interface for customers.',
      href: '/booking-engine',
      icon: 'Calendar',
    },
    {
      title: 'Multi-Channel Manager',
      description: 'Sync inventory across all sales channels in real-time to maximize revenue.',
      href: '/channel-manager',
      icon: 'Share2',
    },
    {
      title: 'Revenue Intelligence',
      description: 'Pricing intelligence that monitors demand & market conditions to adjust your prices in real-time.',
      href: '/revenue-management',
      icon: 'LineChart',
    },
    {
      title: 'Website Builder',
      description: 'Create a stunning, SEO-optimized website to attract and convert customers.',
      href: '/website-builder',
      icon: 'Globe',
    },
  ],
};

// Business Types Section
export const propertyTypesContent = {
  title: 'Management Software for Every Business Type',
  types: [
    { title: 'Hotels & Resorts', href: '/hotels-software', icon: 'Building2' },
    { title: 'Ecommerce', href: '/ecommerce-management', icon: 'ShoppingCart' },
    { title: 'Retail Stores', href: '/retail-software', icon: 'Store' },
    { title: 'Restaurants', href: '/restaurant-management', icon: 'UtensilsCrossed' },
    { title: 'Service Businesses', href: '/service-business-software', icon: 'Briefcase' },
    { title: 'Multi-Location', href: '/multi-location-management', icon: 'Buildings' },
  ],
};

// Customer Stories Section
export const customerStoriesContent = {
  title: 'Our customers say it the best',
  stories: [
    {
      title: 'How Harrison Hall Business Center Streamlined Operations With 25 Years Of weleba Partnership',
      name: 'Stacy Dadson',
      role: 'General Manager',
      videoId: 'CE1FbxwX0po',
    },
    {
      title: 'How NUVO Enterprise Used weleba System to Elevate Their Customer Experience',
      name: 'Yamlak Negash',
      role: 'General Manager at NUVO Enterprise',
      videoId: '21iGVj1UGq8',
    },
    {
      title: 'How Wood River Inn Gained Confidence In Running Their Business With weleba',
      name: 'Ryan Allison',
      role: 'Owner, Wood River Inn',
      videoId: 'Wo-D4it48lI',
    },
    {
      title: 'Seaboard Hotels keeps operations smooth with weleba managing all properties',
      name: 'Alex Moore',
      role: 'President & CEO of Seaboard Hotels',
      videoId: 'ioXFopWwXG4',
    },
  ],
};

// Integrations Section
export const integrationsContent = {
  title: 'Create your perfect technology ecosystem',
  subtitle: 'Connect weleba with 100+ third-party solutions from payment processors and point of sale to accounting systems, marketing tools, and sales channels, so your business runs like a well-oiled machine.',
  cta: { text: 'Visit Marketplace', href: '/marketplace' },
  logos: [
    'Shopify', 'WooCommerce', 'Amazon', 'Stripe', 'PayPal', 'Square',
    'QuickBooks', 'Xero', 'Mailchimp', 'Zapier', 'Slack', 'HubSpot',
  ],
};

// Support Section
export const supportContent = {
  title: '24/7 Available Expert Assistance When You Need It Most',
  features: [
    {
      title: 'Industry-Focused Support Specialists',
      description: 'Our team has extensive experience across multiple industries, ensuring they understand your unique business challenges.',
      icon: 'HeadphonesIcon',
    },
    {
      title: 'Multiple Support Channels',
      description: 'Get help via chat, phone, email, or our comprehensive online knowledge base.',
      icon: 'MessageCircle',
    },
  ],
  steps: [
    { number: '01', title: 'Set up a 30-minute call with a weleba expert.' },
    { number: '02', title: 'See a personalized demo of what weleba can do for you.' },
    { number: '03', title: 'Get onboarded quickly with support from our experts and start earning revenue.' },
  ],
};

// FAQ Section
export const faqContent = {
  title: 'Answers to Your Questions About weleba',
  categories: [
    {
      id: 'features',
      name: 'Features',
      items: [
        {
          question: 'What makes weleba different from other management systems?',
          answer: 'weleba is a unified platform built for multiple industries including hotels, ecommerce, retail, and service businesses. We focus on reducing clicks and simplifying workflows to eliminate administrative burden. Our platform brings together operations management, sales channels, inventory control, and payments in one system, providing businesses the operational backbone they need without unnecessary complexity or enterprise-level pricing.',
        },
        {
          question: 'Can weleba integrate with our existing technology stack?',
          answer: 'Yes, weleba connects with over 100 third-party systems through our marketplace, including payment processors, ecommerce platforms, accounting software, marketing tools, and point-of-sale systems. Our open API architecture also allows for custom integrations tailored to your unique operational needs.',
        },
        {
          question: 'Does weleba offer AI-powered features?',
          answer: 'Yes, weleba incorporates AI technology in multiple areas: Revenue Intelligence automatically optimizes pricing based on demand patterns and market conditions, smart automation reduces manual tasks by up to 80%, and predictive analytics help you make data-driven decisions.',
        },
      ]
    },
    {
      id: 'setup',
      name: 'Setup',
      items: [
        {
          question: 'How difficult is it to switch from our current system to weleba?',
          answer: 'The transition to weleba is straightforward and efficient. Our implementation team handles data migration including customer records, transaction history, inventory data, and historical information. Most staff become proficient with essential functions within a few hours of training.',
        },
        {
          question: 'How long does implementation typically take?',
          answer: 'Most businesses are fully operational within 3-5 business days of signing up. Our implementation team handles data migration, system configuration, and staff training. For larger organizations or complex integrations, the timeline may extend to 1-2 weeks.',
        },
        {
          question: 'Do you provide training for our staff?',
          answer: 'Yes, we provide comprehensive training tailored to each role in your business. Staff typically become proficient with essential functions within hours, while managers receive advanced training on reporting, analytics, and optimization features.',
        },
      ]
    },
    {
      id: 'support',
      name: 'Support',
      items: [
        {
          question: 'What kind of support do you provide after implementation?',
          answer: 'We offer 24/7 technical support via phone, email, and chat. All clients receive access to our knowledge base with video tutorials and guides, regular training webinars for new features, and a dedicated account manager.',
        },
        {
          question: 'Is support available in different time zones?',
          answer: 'Yes, our global support team operates 24/7/365 with specialists in North America, Europe, and Asia-Pacific regions. This ensures you always reach a live support agent familiar with your industry and local business practices.',
        },
        {
          question: 'Can weleba handle seasonal fluctuations in our business?',
          answer: 'Yes, weleba is designed to handle seasonal variations across all industries. The intuitive interface means seasonal staff can be trained quickly, and the system scales automatically to accommodate fluctuations in transaction volume and customer demand.',
        },
      ]
    }
  ]
};

// SUPPORT ...
export const getStartedContent = {
  tag: 'Experience weleba',
  title: 'Get started with weleba in three easy steps',
  steps: [
    {
      number: '01',
      title: 'Set up a 30-minute call with a weleba expert.',
    },
    {
      number: '02',
      title: 'See a personalized demo of what weleba can do for you.',
    },
    {
      number: '03',
      title: 'Get onboarded quickly with support from our experts and start earning revenue.',
    },
  ]
};

// Footer Content
export const footerContent = {
  cta: {
    title: 'Join Thousands of Businesses Thriving with weleba',
    subtitle: "See how weleba's unified platform can work for your organization. Our team will walk you through features tailored to your specific needs.",
    buttonText: 'Book a Demo',
    features: [
      '100% safe & secure',
      '360° business management',
      '24/7 support'
    ]
  },
  subscribe: {
    title: 'Subscribe to our newsletter',
    placeholder: 'Enter email address',
    buttonText: 'Subscribe'
  },
  sections: [
    {
      title: 'Products',
      links: [
        { text: 'Operations Management', href: '/operations-management' },

        { text: 'Booking Engine', href: '/booking-engine' },
        { text: 'Channel Manager', href: '/channel-manager' },
        { text: 'Revenue Intelligence', href: '/revenue-management' },
        { text: 'Payments', href: '/weleba-payments' },
        { text: 'Customer App', href: '/customer-app' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Independent Businesses', href: '/service-business-software' },
        { text: 'Multi-Location Groups', href: '/multi-location-management' },
        { text: 'Small Businesses', href: '/small-business-software' },
        // { text: 'Parks', href: '/ecommerce-management' },
        // { text: 'Resorts', href: '/hotels-software' },
        { text: 'Retailers', href: '/retail-software' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blogs', href: '/blog' },
        // { text: 'Templates', href: '/templates' },
        { text: 'Webinars', href: '/webinar' },
        // { text: 'Calculators', href: '/calculators' },
        // { text: 'E-books & Guides', href: '/ebooks' },
        // { text: 'FAQs', href: '/faqs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about-us' },
        { text: 'Support', href: '/support' },
        { text: 'Marketplace', href: '/marketplace' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
  ],
  legal: [
    { text: 'Privacy Policies', href: '/privacy-policy' },
    { text: 'Terms of Service', href: '/terms-of-service' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: 'Twitter' },
    { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { name: 'Facebook', href: '#', icon: 'Facebook' },
    { name: 'YouTube', href: '#', icon: 'Youtube' },
  ],
};
