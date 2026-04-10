export const heroContent = {
  announcement: { text: 'For Students' },
  title: 'Study Less, Score Higher',
  subtitle: 'Ditch the highlighters. Burbly uses scientifically proven active recall and spaced repetition to drastically reduce study time while improving your grades.',
  cta: { primary: { text: 'Join Student Community' } },
  image: '/image copy 8.png'
};

export const transformContent = {
  tag: 'Better Grades',
  title: 'The ultimate study hack',
  cta: {
    title: 'Ready to ace your next final?',
    buttonText: 'Try Burbly for Free',
    className: 'bg-blue-50 border border-blue-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'AI Lecture to Deck',
      description: 'Upload your professor\'s messy PDF slides or syllabus, and our AI will extract the key concepts into flashcards automatically.',
      icon: 'UploadCloud',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Social Leaderboards',
      description: 'Compete against your classmates. Who can rack up the highest streak before the midterm?',
      icon: 'Swords',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Socratic Tutor',
      description: 'If you fail a card, the AI Tutor nudges you toward the right answer instead of just revealing it, building true understanding.',
      icon: 'Lightbulb',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'End cramming forever',
  subtitle: 'A smarter, stress-free way to navigate the semester.',
  tabs: [
    {
      title: 'Study Planner',
      description: 'Input your syllabus and test dates. Burbly tells you exactly how many cards to review today to stay on track.',
      icon: 'Calendar',
      image: '/geminirm.png'
    },
    {
      title: 'Course Decks',
      description: 'Find decks created by upperclassmen who took the exact same course with the exact same professor.',
      icon: 'Search',
      image: '/image copy 9.png'
    },
    {
      title: 'Gamified XP',
      description: 'Earn experience points for reviews. Unlock badges and avatar aesthetics as you level up your academic skills.',
      icon: 'Gamepad2',
      image: '/image copy 13.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Re-reading is an illusion',
    description: 'Science shows that re-reading textbook chapters creates the "illusion of competence." You think you know it because the page looks familiar. Flashcards force active recall—the only proven method for long-term retention.',
    image: '/image-copy-11-no-money.png',
    imageLeft: false,
    lists: [
      'Stop wasting money on highlighters',
      'Study effectively in short 10-minute bursts',
      'Walk into tests with absolute confidence'
    ]
  }
];
