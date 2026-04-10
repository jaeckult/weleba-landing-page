export const labels = {
  navigation: {
    products: 'Features',
    solutions: 'For Learners',
    resources: 'Resources',
    pricing: 'Pricing',
    caseStudies: 'Success Stories',
    company: 'Company',
    categories: {
      operations: 'Study & Review',
      marketing: 'AI & Automation',
      revenue: 'Progress & Analytics',
      guest: 'Social & Community',
      byProperty: 'By Learning Goal',
      byRole: 'By Learner Type',
      resourceType: 'Resource Type',
      featuredArticles: 'Featured Articles',
      marketingDistribution: 'AI & Automation',
      revenueFinance: 'Progress & Analytics',
      guestExperience: 'Social & Community',
      featured: 'Featured',
    }
  },
  blog: {
    newUpdate: 'New Post:',
    readPost: 'Read Post',
  },
  buttons: {
    bookDemo: 'See It In Action',
    getStarted: 'Get Started Free',
    getFreeDemo: 'Try Burbly Free',
    subscribe: 'Subscribe',
    readAllStories: 'Read All Stories',
  },
  common: {
    allRightsReserved: 'All Rights Reserved.',
    trustText: 'Trusted by learners worldwide',
    customerStory: 'Success Story',
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
        title: 'Flashcard Study',
        description: 'Smart flashcard sessions powered by powerful algorithm',
        href: '/features/flashcards',
      },
      {
        title: 'Study Planner',
        description: 'AI-generated study schedules that adapt to your progress.',
        href: '/features/study-path',
      },
      {
        title: 'Deck Library',
        description: 'Create, organize, and browse thousands of community decks.',
        href: '/features/community',
      },
    ],
    marketing: [
      {
        title: 'AI Card Generator',
        description: 'Paste any text or topic and let AI build your deck instantly.',
        href: '/features/ai-tutor',
        badge: 'New',
      },
      {
        title: 'AI Tutor Mode',
        description: 'Get Socratic hints and explanations while you review.',
        href: '/features/ai-tutor',
        badge: 'New',
      },
    ],
    revenue: [
      {
        title: 'Study Analytics',
        description: 'Detailed stats: retention rate, streaks, accuracy, XP earned.',
        href: '/features/analytics',
      },
      {
        title: 'Badges & XP',
        description: 'Earn experience points and unlock achievement badges.',
        href: '/features/badges',
        badge: 'Updated',
      },
    ],
    guest: [
      {
        title: 'Social Feed',
        description: 'See what your friends are studying and celebrate their wins.',
        href: '/features/social',
      },
      {
        title: 'Community Challenges',
        description: 'Join weekly group challenges and compete on leaderboards.',
        href: '/features/challenges',
      },
      {
        title: 'Deck Sharing',
        description: 'Publish your decks for millions of learners to import.',
        href: '/features/community',
      },
    ],
  },
  solutions: {
    byProperty: [
      { title: 'Language Learning', description: 'Vocabulary, grammar, and phrases—all in one deck.', href: '/use-cases/languages' },
      { title: 'Medical Students', description: 'High-volume card review built for USMLE and board exams.', href: '/use-cases/medical' },
      { title: 'Law Students', description: 'Case law, statutes, and concepts organized by subject.', href: '/use-cases/professionals' },
      { title: 'Exam Prep', description: 'GRE, SAT, LSAT, MCAT—curated decks to crush your test.', href: '/goals/exams' },
      { title: 'Professional Skills', description: 'Tech, finance, and certifications for working professionals.', href: '/use-cases/professionals' },
      { title: 'K–12 Students', description: 'Engaging, gamified review for younger learners.', href: '/use-cases/students' },
    ],
    byRole: [
      { title: 'Self-Learners', description: 'Build and master any skillset at your own pace.', href: '/goals/self-learning' },
      { title: 'Students', description: 'Ace exams with science-backed spaced repetition.', href: '/use-cases/students' },
      { title: 'Teachers & Educators', description: 'Create and share decks with your entire class.', href: '/goals/educators' },
      { title: 'Fluency Seekers', description: 'Reach conversational fluency faster than any app.', href: '/use-cases/languages' },
    ],
  },
  resources: [
    { title: 'Blog', description: 'Learning science, study tips, and Burbly news.', href: '/blog' },
    { title: 'Webinars', description: 'Live and on-demand sessions on effective studying.', href: '/webinar' },
    { title: 'Study Guides', description: 'In-depth guides for every major subject and exam.', href: '/guides' },
    { title: 'Community', description: 'Connect with millions of Burbly learners worldwide.', href: '/community' },
  ],
  company: [
    { title: 'About Us', description: 'The team behind Burbly and our mission for better learning.', href: '/about-us' },
    { title: 'Careers', description: 'Help us build the future of intelligent learning.', href: '/careers' },
  ],
};

// Hero Section
export const heroContent = {
  tag: 'Powered by powerful algorithm',
  title: 'The flashcard app that actually learns with you',
  subtitle: 'Burbly uses AI and proven memory science to schedule your reviews at exactly the right moment—so you remember more with less effort. Study smarter with adaptive decks, social challenges, and real-time progress analytics.',
  cta: {
    primary: { text: 'Get Started Free', href: '/signup' },
    secondary: { text: 'See How It Works', href: '/features' },
  },
};

// Why Choose Section (maps to FeaturesGrid via whyChooseContent.features[])
export const whyChooseContent = {
  title: 'Why learners choose Burbly over every other flashcard app',
  features: [
    {
      title: 'Remembers What You Forget',
      description: 'Burbly\'s FSRS algorithm predicts exactly when you\'re about to forget each card and schedules it for review before it slips—boosting long-term retention by up to 4×.',
      icon: 'Brain',
    },
    {
      title: 'AI Builds Your Decks',
      description: 'Paste any text, textbook chapter, or topic name and our AI generates polished, well-structured flashcard decks in seconds—no manual card creation required.',
      icon: 'Sparkles',
    },
    {
      title: 'Study With Friends',
      description: 'Follow friends, join community challenges, climb weekly leaderboards, and share decks. Learning is more fun—and more effective—when it\'s social.',
      icon: 'Users',
    },
    {
      title: 'Progress That Motivates',
      description: 'Earn XP, unlock achievement badges, maintain daily streaks, and watch your retention stats climb. Burbly turns every study session into a rewarding experience.',
      icon: 'Trophy',
    },
    {
      title: 'Study Anywhere, Anytime',
      description: 'Full offline support on iOS, Android, and web. Your progress syncs instantly across all devices, so you never lose a review session.',
      icon: 'Globe',
    },
  ],
};

// Daily Operations Section (rendered by WhyChoose.jsx)
export const dailyOperationsContent = {
  title: 'Everything you need for a complete study routine',
  subtitle: 'From your first card flip to mastering an entire subject, Burbly guides every step of your learning journey.',
  features: [
    {
      title: 'Smart Flashcard Review',
      description: 'Review cards scheduled by FSRS at the optimal moment. Flip, rate, and move on—your review queue is always perfectly calibrated.',
      href: '/features/flashcards',
      icon: 'LayoutDashboard',
    },
    {
      title: 'AI Card Generator',
      description: 'generate entire decks from any text, PDF, or topic in seconds. Context-aware AI creates cards that actually help you understand.',
      href: '/features/ai-generator',
      icon: 'Sparkles',
    },
    {
      title: 'Community Challenges',
      description: 'Join weekly challenges, race on leaderboards, and celebrate milestones with a global community of learners.',
      href: '/features/challenges',
      icon: 'Smartphone',
    },
  ],
};

// Revenue Intelligence Section (rendered by RevenueVisibility.jsx)
export const revenueIntelligenceContent = {
  title: 'Analytics & AI that accelerate your mastery',
  subtitle: 'Burbly\'s smart tools do the heavy lifting so you can focus entirely on learning.',
  features: [
    {
      title: 'Adaptive Scheduling',
      description: 'FSRS calculates each card\'s forgetting curve in real time, serving reviews at the scientifically optimal moment for maximum retention.',
      href: '/features/flashcards',
      icon: 'Calendar',
    },
    {
      title: 'AI Deck Builder',
      description: 'Turn any source material into a structured deck instantly. Supports text, topics, and soon—PDFs and web pages.',
      href: '/features/ai-generator',
      icon: 'Share2',
    },
    {
      title: 'Retention Analytics',
      description: 'Track accuracy, retention rate, XP, streaks, and card maturity across all your decks with beautiful, actionable dashboards.',
      href: '/features/analytics',
      icon: 'LineChart',
    },
    {
      title: 'Study Path Planner',
      description: 'AI generates a personalized study plan so you always know exactly which deck to tackle next.',
      href: '/features/study-planner',
      icon: 'Globe',
    },
  ],
};

// "For Every Learner" Section (replaces PropertyTypes)
export const propertyTypesContent = {
  tag: 'Who Uses Burbly',
  title: 'Built for every kind\nof learner',
  types: [
    { title: 'Language Learners', href: '/for/language-learners', icon: 'Globe' },
    { title: 'Medical Students', href: '/for/medical-students', icon: 'Building2' },
    { title: 'Exam Preppers', href: '/for/exam-prep', icon: 'ShoppingCart' },
    { title: 'Law Students', href: '/for/law-students', icon: 'Store' },
    { title: 'K–12 Students', href: '/for/students', icon: 'UtensilsCrossed' },
    { title: 'Professionals', href: '/for/professionals', icon: 'Briefcase' },
  ],
};

// Customer Stories Section
export const customerStoriesContent = {
  title: 'Our learners say it the best',
  stories: [
    {
      title: 'How Sarah Passed Her Medical Boards Using Burbly\'s Spaced Repetition',
      name: 'Sarah M.',
      role: 'Medical Student',
      videoId: '',
    },
    {
      title: 'How Marcus Became Conversational in Japanese in 8 Months with Burbly',
      name: 'Marcus T.',
      role: 'Language Learner',
      videoId: '',
    },
  ],
};

// Integrations Section (repurposed as Ecosystem/Platforms)
export const integrationsContent = {
  title: 'Your learning, everywhere you go',
  subtitle: 'Burbly works seamlessly across all your devices. Study on mobile during your commute, switch to desktop for deep focus sessions—your progress syncs instantly wherever you are.',
  cta: { text: 'Download the App', href: '/download' },
  logos: [
    'iOS', 'Android', 'Web', 'Offline Mode', 'Cloud Sync', 'Dark Mode',
  ],
};

// Support / Get Started Section
export const supportContent = {
  title: 'Start learning smarter in under 60 seconds',
  features: [
    {
      title: 'No setup required',
      description: 'Sign up, pick a subject, and your first AI-generated deck is ready to study instantly.',
      icon: 'Zap',
    },
    {
      title: 'Science-backed from day one',
      description: 'FSRS spaced repetition starts working the moment you flip your first card.',
      icon: 'Brain',
    },
  ],
  steps: [
    { number: '01', title: 'Create your free Burbly account in seconds.' },
    { number: '02', title: 'Pick a subject or let AI build your first deck from any text.' },
    { number: '03', title: 'Study daily, earn XP, and watch your retention soar.' },
  ],
};

// FAQ Section
export const faqContent = {
  title: 'Everything you wanted to know about Burbly',
  categories: [
    {
      id: 'features',
      name: 'Features',
      items: [
        {
          question: 'What makes Burbly different from Anki or Quizlet?',
          answer: 'Burbly combines the gold-standard FSRS spaced repetition algorithm with AI-powered deck generation, social challenges, and real-time analytics—all in a polished, modern app. Unlike Anki, there\'s no steep learning curve. Unlike Quizlet, your review schedule is adaptive and scientifically optimized, not just a simple timer.',
        },
        {
          question: 'What is FSRS spaced repetition?',
          answer: 'FSRS (Free Spaced Repetition Scheduler) is the most accurate open-source memory algorithm available. It models your personal forgetting curve for each card and schedules reviews at precisely the right time—maximizing retention while minimizing total study time. Burbly uses FSRS so you study smarter, not harder.',
        },
        {
          question: 'Can AI really build good flashcards?',
          answer: 'Yes. Burbly\'s AI understands context, not just keywords. It generates cards with clear questions, concise answers, and useful hints—not just copy-pasted text. You can always edit, delete, or add cards after generation, giving you full control over your deck quality.',
        },
      ]
    },
    {
      id: 'setup',
      name: 'Getting Started',
      items: [
        {
          question: 'How do I get started with Burbly?',
          answer: 'Sign up for free at burbly.app—no credit card needed. You can start studying immediately using community decks, or paste any topic into the AI generator to create your first custom deck in seconds. Your review schedule begins automatically from your first session.',
        },
        {
          question: 'Is Burbly free to use?',
          answer: 'Burbly offers a generous free tier that includes unlimited flashcard study, community deck access, and social features. Premium unlocks the AI card generator, advanced analytics, prioritized AI tutor responses, and exclusive badge categories.',
        },
        {
          question: 'Does Burbly work offline?',
          answer: 'Yes. Burbly caches your decks and review queue locally so you can study without an internet connection. Your progress syncs to the cloud automatically the next time you come online—never losing a session.',
        },
      ]
    },
    {
      id: 'support',
      name: 'Support',
      items: [
        {
          question: 'How can I contact Burbly support?',
          answer: 'Reach us anytime through the in-app help center, via email at support@burbly.app, or in our community Discord. We typically respond within a few hours.',
        },
        {
          question: 'Can I import decks from Anki or Quizlet?',
          answer: 'Burbly supports importing Anki decks (.apkg) and CSV files, making it easy to bring your existing cards over. Quizlet import support is on our roadmap.',
        },
        {
          question: 'Is my data private and secure?',
          answer: 'Absolutely. Your study data and personal information are encrypted in transit and at rest. We never sell your data to third parties. You can export or delete your account and all associated data at any time from your profile settings.',
        },
      ]
    }
  ]
};

// Get Started Steps
export const getStartedContent = {
  tag: 'Experience Burbly',
  title: 'Start learning smarter in three simple steps',
  steps: [
    {
      number: '01',
      title: 'Create your free account—no card required.',
    },
    {
      number: '02',
      title: 'Pick a subject or paste any text to generate your first AI deck.',
    },
    {
      number: '03',
      title: 'Study daily, earn XP and badges, and watch your mastery grow.',
    },
  ]
};

// Footer Content
export const footerContent = {
  cta: {
    title: 'Join millions of learners mastering new skills with Burbly',
    subtitle: "See how Burbly's adaptive flashcard engine, AI tools, and social challenges can transform the way you learn—starting today.",
    buttonText: 'Get Started Free',
    features: [
      'Free to start',
      'AI-powered decks',
      'Science-backed retention'
    ]
  },
  subscribe: {
    title: 'Get learning tips in your inbox',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe'
  },
  sections: [
    {
      title: 'Features',
      links: [
        { text: 'Flashcard Study', href: '/features/flashcards' },
        { text: 'AI Card Generator', href: '/features/ai-generator' },
        { text: 'Study Planner', href: '/features/study-planner' },
        { text: 'Analytics', href: '/features/analytics' },
        { text: 'Social Challenges', href: '/features/challenges' },
        { text: 'Badges & XP', href: '/features/gamification' },
      ],
    },
    {
      title: 'For Learners',
      links: [
        { text: 'Language Learners', href: '/for/language-learners' },
        { text: 'Medical Students', href: '/for/medical-students' },
        { text: 'Exam Prep', href: '/for/exam-prep' },
        { text: 'K–12 Students', href: '/for/students' },
        { text: 'Professionals', href: '/for/professionals' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Study Guides', href: '/guides' },
        { text: 'Webinars', href: '/webinar' },
        { text: 'Community', href: '/community' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about-us' },
        { text: 'Careers', href: '/careers' },
        { text: 'Support', href: '/support' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
  ],
  legal: [
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Terms of Service', href: '/terms-of-service' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: 'Twitter' },
    { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { name: 'Discord', href: '#', icon: 'MessageCircle' },
    { name: 'YouTube', href: '#', icon: 'Youtube' },
  ],
};
