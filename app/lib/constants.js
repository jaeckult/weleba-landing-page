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
      marketing: 'Marketing',
      revenue: 'Revenue',
      guest: 'Guest',
      byProperty: 'By Property Type',
      byRole: 'By Role',
      resourceType: 'Resource Type',
      featuredArticles: 'Featured Articles',
      marketingDistribution: 'Marketing & Distribution',
      revenueFinance: 'Revenue & Finance',
      guestExperience: 'Guest Experience',
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
    trustText: 'Trusted by leading hotels worldwide',
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
        title: 'PMS',
        description: 'All-in-one platform for complete hotel operations.',
        href: '/property-management',
      },
    ],
    marketing: [
      {
        title: 'Booking Engine',
        description: 'Commission-free direct bookings made easy.',
        href: '/booking-engine',
      },
      {
        title: 'Channel Manager',
        description: 'Manage inventory & sync rates across hundreds of OTAs.',
        href: '/channel-manager',
      },
      // {
      //   title: 'Hotel Metasearch',
      //   description: 'Boost visibility on search engines & aggregators.',
      //   href: '/hotel-metasearch',
      //   badge: 'New',
      // },
      {
        title: 'Hotel Website Builder',
        description: 'Get help creating stunning websites.',
        href: '/hotel-website-builder',
      },
    ],
    revenue: [
      {
        title: 'Revenue Management',
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
        title: 'Guest Communication & Engagement',
        description: 'Automate personalized messaging throughout guest journey.',
        href: '/guest-engagement-software',
      },
      {
        title: 'Hotel Guest App',
        description: 'Hotel services management & mobile check-in with digital keys.',
        href: '/hotel-guest-app',
      },
    ],
  },
  solutions: {
    byProperty: [
      { title: 'Independent Hotels', description: 'Tailored solutions for standalone properties.', href: '/independent-hotels-software' },
      { title: 'Hotel Groups', description: 'Scalable platform for multiple locations.', href: '/pms-hotel-groups' },
      { title: 'Motels', description: 'Efficient solutions for roadside hospitality businesses.', href: '/motel' },
      { title: 'Resorts', description: 'Comprehensive platform for destination hospitality properties.', href: '/resorts-pms-software' },
      { title: 'Bed & Breakfast', description: 'Simple hospitality management for smaller properties.', href: '/bed-breakfast-software' },
      { title: 'Parks', description: 'Management tools for outdoor accommodation facilities.', href: '/parks' },
    ],
    byRole: [
      { title: 'General Managers', description: 'Strategic oversight and business intelligence tools.', href: '/general-managers' },
      { title: 'Front Desk Managers', description: 'Daily operations and guest service solutions.', href: '/front-desk-managers' },
      { title: 'Revenue Managers', description: 'Pricing optimization and financial performance tools.', href: '/revenue-managers' },
      { title: 'IT Managers', description: 'Technical platform management and system integration.', href: '/it-managers' },
    ],
  },
  resources: [
    { title: 'Blogs', description: 'Expert insights to optimize your property performance.', href: '/blog' },
    { title: 'News', description: 'Stay ahead with the latest hospitality trends.', href: '/news' },
    // { title: 'Templates', description: 'Download ready-to-use operational tools and forms.', href: '/templates' },
    { title: 'Webinars', description: 'Access exclusive webinars for smarter hotel management.', href: '/webinar' },
    // { title: 'Calculators', description: 'Calculate ROI, pricing, and revenue potential instantly.', href: '/calculators' },
    // { title: 'eBooks & Guides', description: 'Complete strategies for hospitality business growth.', href: '/ebooks' },
    // { title: 'Alternatives', description: 'Compare hotel software solutions to find your perfect fit.', href: '/alternative' },
  ],
  company: [
    { title: 'About Us', description: 'The hospitality experts behind weleba technology.', href: '/about-us' },
  ],
};

// Hero Section
export const heroContent = {
  announcement: {
    text: 'innQuest is rebranding to weleba - Hospitality, Simplified.',
    href: '/hospitality-simplified',
  },
  title: 'The complete hospitality platform built for the way you actually work',
  subtitle: 'weleba frees your team to focus on creating exceptional guest experiences while intelligent tools work behind the scenes to maximize your revenue and operational efficiency.',
  cta: {
    primary: { text: 'Book A Demo', href: '/book-a-demo' },
    secondary: { text: 'View Pricing', href: '/pricing' },
  },
};

// Why Choose Section
export const whyChooseContent = {
  title: 'Why hoteliers choose weleba as their hotel management software',
  features: [
    {
      title: 'Helps Boost Revenue',
      description: 'Our integrated solutions help increase RevPAR by up to 35% with commission-free direct bookings and AI-powered pricing strategies.',
      icon: 'TrendingUp',
    },
    {
      title: 'Built by Hoteliers for Hoteliers',
      description: 'Building on our years of providing hospitality software, weleba understands your operational challenges because we\'ve lived them.',
      icon: 'Users',
    },
    {
      title: 'All-in-One Platform',
      description: 'Everything you need to run your hotel in one seamless platform; connecting PMS, booking engine, channel manager, and payments.',
      icon: 'Layers',
    },
    {
      title: 'Easy to Learn',
      description: 'Our system is so easy to use that staff can learn essential functions in hours, not weeks, reducing training time by up to 50%.',
      icon: 'Zap',
    },
    {
      title: 'Accessible Anywhere, Anytime',
      description: 'Access your property management system securely from anywhere, on any device. All updates and backups happen automatically with 99.95% uptime guaranteed.',
      icon: 'Globe',
    },
  ],
};

// Daily Operations Section
export const dailyOperationsContent = {
  title: 'Daily Operations & Guest Experience Management',
  subtitle: 'Essential tools that streamline your day-to-day operations while delivering exceptional guest experiences.',
  features: [
    {
      title: 'PMS',
      description: 'Streamline property operations, manage reservations, and optimize workflows effortlessly.',
      href: '/property-management',
      icon: 'LayoutDashboard',
    },

    {
      title: 'Payments',
      description: 'Secure, fast payment processing for hassle-free guest transactions.',
      href: '/weleba-payments',
      icon: 'CreditCard',
    },
    {
      title: 'Hotel Guest App',
      description: 'Enhance guest experience with a mobile app for bookings, requests, and more.',
      href: '/hotel-guest-app',
      icon: 'Smartphone',
    },
  ],
};

// Revenue Intelligence Section
export const revenueIntelligenceContent = {
  title: 'AI Revenue Intelligence & Hotel Visibility',
  subtitle: 'Powerful tools to maximize your revenue potential and expand your online presence.',
  features: [
    {
      title: 'Booking Engine',
      description: 'Enable direct bookings with a seamless, user-friendly interface for guests.',
      href: '/booking-engine',
      icon: 'Calendar',
    },
    {
      title: 'Channel Manager',
      description: 'Sync inventory across OTAs in real-time to maximize occupancy and revenue.',
      href: '/channel-manager',
      icon: 'Share2',
    },
    {
      title: 'Revenue Intelligence',
      description: 'Pricing intelligence that monitors demand & market conditions to adjust your rates in real-time.',
      href: '/revenue-management',
      icon: 'LineChart',
    },
    {
      title: 'Hotel Website Builder',
      description: 'Create a stunning, SEO-optimized website to attract and convert guests.',
      href: '/hotel-website-builder',
      icon: 'Globe',
    },
  ],
};

// Property Types Section
export const propertyTypesContent = {
  title: 'Hotel Management Software for Every Property Type',
  types: [
    { title: 'Independent Hotels', href: '/independent-hotels-software', icon: 'Building2' },
    { title: 'Hotel Groups', href: '/pms-hotel-groups', icon: 'Buildings' },
    { title: 'B & B and Inns', href: '/bed-breakfast-software', icon: 'Home' },
    { title: 'Parks', href: '/parks', icon: 'Trees' },
    { title: 'Resorts', href: '/resorts-pms-software', icon: 'Palmtree' },
    { title: 'Motels', href: '/motel', icon: 'Hotel' },
  ],
};

// Customer Stories Section
export const customerStoriesContent = {
  title: 'Our customers say it the best',
  stories: [
    {
      title: 'How Harrison Hall Hotel Streamlined Operations With 25 Years Of weleba Partnership',
      name: 'Stacy Dadson',
      role: 'General Manager',
      videoId: 'CE1FbxwX0po',
    },
    {
      title: 'How NUVO Suites Used weleba PMS to Elevate Their Guest Experience',
      name: 'Yamlak Negash',
      role: 'General Manager at NUVO Suites',
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
  subtitle: 'Connect weleba with 100+ third-party solutions from door locks, and point of sale to accounting systems, and marketing tools, so your hotel runs like a well-oiled machine.',
  cta: { text: 'Visit Marketplace', href: '/marketplace' },
  logos: [
    'Expedia', 'Booking.com', 'Airbnb', 'TripAdvisor', 'Google', 'Stripe',
    'QuickBooks', 'Xero', 'Mailchimp', 'Zapier', 'Slack', 'HubSpot',
  ],
};

// Support Section
export const supportContent = {
  title: '24/7 Available Expert Assistance When You Need It Most',
  features: [
    {
      title: 'Hospitality-Focused Support Specialists',
      description: 'Our team has extensive experience in hotel operations, ensuring they understand your business challenges.',
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
          question: 'What makes weleba different from other property management systems?',
          answer: 'weleba was built specifically for hotels, not as a scaled-down enterprise system. We focus on reducing clicks and simplifying workflows to eliminate administrative burden. Our unified platform brings together PMS, booking engine, channel manager, and payments in one system giving hoteliers the operational backbone they need without unnecessary complexity or enterprise-level pricing.',
        },
        {
          question: 'Can weleba integrate with our existing hotel technology stack?',
          answer: 'Yes, weleba connects with over 100 third-party hospitality systems through our marketplace, including revenue management tools, guest communication platforms, and point-of-sale systems. Our open API architecture also allows for custom integrations tailored to your unique operational needs.',
        },
        {
          question: 'Does weleba offer AI-powered features?',
          answer: 'Yes, weleba incorporates AI technology in multiple areas: Revenue Intelligence automatically optimizes pricing based on demand patterns, and smart automation reduces manual tasks by up to 80%.',
        },
      ]
    },
    {
      id: 'setup',
      name: 'Setup',
      items: [
        {
          question: 'How difficult is it to switch from our current PMS to weleba?',
          answer: 'The transition to weleba is straightforward and efficient. Our implementation team handles data migration including reservations, guest profiles, and historical information. Most front desk staff become proficient with essential functions within a few hours of training.',
        },
        {
          question: 'How long does implementation typically take?',
          answer: 'Most properties are fully operational within 3-5 business days of signing up. Our implementation team handles data migration, system configuration, and staff training. For larger properties or complex integrations, the timeline may extend to 1-2 weeks.',
        },
        {
          question: 'Do you provide training for our staff?',
          answer: 'Yes, we provide comprehensive training tailored to each role at your property. Front desk staff typically become proficient with essential functions within hours, while managers receive advanced training on reporting and revenue management features.',
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
          answer: 'Yes, our global support team operates 24/7/365 with specialists in North America, Europe, and Asia-Pacific regions. This ensures you always reach a live support agent familiar with your local hospitality practices and business hours.',
        },
        {
          question: 'Can weleba handle seasonal fluctuations in our business?',
          answer: 'Yes, weleba is designed for the cyclical nature of hospitality businesses. The intuitive interface means seasonal staff can be trained quickly. The system scales to accommodate fluctuations in booking volume.',
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
    title: 'Join Thousands of Hotels Thriving with weleba',
    subtitle: "See how weleba's unified platform can work for your property. Our team will walk you through features tailored to your specific needs.",
    buttonText: 'Book a Demo',
    features: [
      '100% safe & secure',
      '360° property management',
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
        { text: 'Hotel PMS', href: '/property-management' },

        { text: 'Booking Engine', href: '/booking-engine' },
        { text: 'Channel Manager', href: '/channel-manager' },
        { text: 'Revenue Intelligence', href: '/revenue-management' },
        { text: 'Payments', href: '/weleba-payments' },
        { text: 'Hotel Guest App', href: '/hotel-guest-app' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Independent Hotels', href: '/independent-hotels-software' },
        { text: 'Hotel Groups', href: '/pms-hotel-groups' },
        { text: 'Bed & Breakfast', href: '/bed-breakfast-software' },
        { text: 'Parks', href: '/parks' },
        { text: 'Resorts', href: '/resorts-pms-software' },
        { text: 'Motels', href: '/motel' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blogs', href: '/blog' },
        { text: 'Templates', href: '/templates' },
        { text: 'Webinars', href: '/webinar' },
        { text: 'Calculators', href: '/calculators' },
        { text: 'E-books & Guides', href: '/ebooks' },
        { text: 'FAQs', href: '/faqs' },
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
