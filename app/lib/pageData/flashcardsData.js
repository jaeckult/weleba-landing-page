export const heroContent = {
  announcement: { text: 'Spaced Repetition Engine' },
  title: 'Smart Flashcard Review',
  subtitle: 'Master any subject using the FSRS algorithm. Burbly predicts exactly when you are about to forget a card and schedules it for review—minimizing your study time while maximizing long-term retention.',
  cta: { primary: { text: 'Start Studying For Free' } },
  image: '/image copy 12.png'
};

export const transformContent = {
  tag: 'Core Engine',
  title: 'Why our flashcards work better',
  cta: {
    title: 'Ready to remember forever?',
    buttonText: 'Try Flashcards',
    className: 'bg-blue-50 border border-blue-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'FSRS Algorithm',
      description: 'The Free Spaced Repetition Scheduler models your personal memory, achieving up to 95% retention with fewer reviews.',
      icon: 'Brain',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Rich Media formatted',
      description: 'Add images, audio, math formulas (LaTeX), and rich formatting to your cards.',
      icon: 'Image',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Cross Device Sync',
      description: 'Study on your phone during your commute and pick up right where you left off on your desktop.',
      icon: 'Smartphone',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Everything you need to master your cards',
  subtitle: 'Powerful tools working behind the scenes to optimize your study routine.',
  tabs: [
    {
      title: 'Customizable Intervals',
      description: 'Fine-tune your retention goals. Tell Burbly if you need 90% or 95% retention, and the algorithm adapts your intervals automatically.',
      icon: 'Settings',
      image: '/image copy 8.png'
    },
    {
      title: 'Offline Mode',
      description: 'Download your decks and your review queue. Study anywhere without an internet connection, and your progress syncs when you reconnect.',
      icon: 'Globe',
      image: '/image copy 9.png'
    },
    {
      title: 'Tagging & Search',
      description: 'Organize massive collections with tags. Instantly filter and search through thousands of cards to find exactly what you need.',
      icon: 'Search',
      image: '/geminirm.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Study smarter, not harder',
    description: 'Stop wasting time reviewing cards you already know. Burbly targets your weak points so every minute counts.',
    image: '/image copy 13.png',
    imageLeft: true,
    lists: [
      'Focus strictly on cards you are about to forget',
      'Track your mature vs learning cards',
      'Visual breakdown of your daily review burden'
    ]
  },
  {
    title: 'Keyboard Shortcuts for Flow State',
    description: 'Keep your hands on the keyboard. Rate your cards lightning fast so you can burn through your daily review queue in record time.',
    image: '/image-copy-13-no-money.png',
    imageLeft: false,
    lists: [
      'Space to flip, 1-4 to rate',
      'Undo functionality for accidental swipes',
      'Keyboard support across both web and native apps'
    ]
  }
];
