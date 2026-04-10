export const heroContent = {
  announcement: { text: 'For Exam Takers' },
  title: 'Crush High-Stakes Exams',
  subtitle: 'Whether you\'re preparing for the SAT, GRE, MCAT, or Bar Exam, Burbly\'s science-backed spaced repetition ensures you walk into the testing center with 95%+ recall confidence.',
  cta: { primary: { text: 'Find Your Exam Deck' } },
  image: '/image copy 12.png'
};

export const transformContent = {
  tag: 'Test Prep Architecture',
  title: 'Engineered for test day',
  cta: {
    title: 'Stop cramming, start retaining.',
    buttonText: 'Try Burbly for Exams',
    className: 'bg-red-50 border border-red-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Deadline Mode',
      description: 'Input your exact test date. Our algorithm reverse-engineers a daily card quota so you hit peak mastery 48 hours before the exam.',
      icon: 'Target',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Community Curated Decks',
      description: 'Access massive, highly-vetted community decks built specifically to cover every permutation of standardized test questions.',
      icon: 'Database',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Socratic AI Tutor',
      description: 'When you get a practice question wrong, the AI Tutor won\'t just give you the answer—it guides you to understand the underlying principle.',
      icon: 'Bot',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Replace expensive courses',
  subtitle: 'Everything you need, built into a flashcard app.',
  tabs: [
    {
      title: 'Image Occlusion for Diagrams',
      description: 'Studying anatomy or complex logic trees? Quickly hide labels on diagrams to force visual recall.',
      icon: 'EyeOff',
      image: '/image copy 9.png'
    },
    {
      title: 'Detailed Analytics',
      description: 'Identify your weak domains (e.g., scoring low on organic chemistry cards) so you can focus your review time efficiently.',
      icon: 'BarChart',
      image: '/geminirm.png'
    },
    {
      title: 'Subdeck Organization',
      description: 'Keep thousands of cards organized impeccably. Review specific sections or hit the master deck for interleaved practice.',
      icon: 'FolderTree',
      image: '/image copy 8.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'The end of the all-nighter',
    description: 'Cramming works for the test tomorrow, but fails for the comprehensive final next month. Burbly permanently moves knowledge into your long-term memory with surprisingly little daily effort.',
    image: '/image-copy-11-no-money.png',
    imageLeft: false,
    lists: [
      'Proven up to 3x more effective than re-reading.',
      'Prevents the illusion of competence.',
      'Active recall builds genuine understanding.'
    ]
  }
];
