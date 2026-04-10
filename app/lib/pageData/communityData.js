export const heroContent = {
  announcement: { text: 'Collaborative Learning' },
  title: 'Community Decks',
  subtitle: 'Don\'t reinvent the wheel. Browse, download, and study thousands of high-quality flashcard decks created and vetted by top learners around the world.',
  cta: { primary: { text: 'Explore the Hub' } },
  image: '/image copy 11.png'
};

export const transformContent = {
  tag: 'Shared Knowledge',
  title: 'From Day 1 to Mastery',
  cta: {
    title: 'Share your own decks with the world',
    buttonText: 'Publish a Deck',
    className: 'bg-indigo-50 border border-indigo-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Vetted Quality',
      description: 'Decks are upvoted by the community, with established creators earning badges for their contributions.',
      icon: 'ShieldCheck',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Seamless Import',
      description: 'One click to download a massive deck directly into your library with all formatting intact.',
      icon: 'Download',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Automatic Updates',
      description: 'If a creator updates their deck to fix a typo or add new cards, your library can sync the changes without losing your progress.',
      icon: 'RefreshCw',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Find EXACTLY what you need',
  subtitle: 'Whether you are studying for the Bar exam or learning conversational Japanese.',
  tabs: [
    {
      title: 'Smart Search',
      description: 'Search by tag, language, subject, or creator to navigate hundreds of thousands of flashcards instantly.',
      icon: 'Search',
      image: '/image copy 13.png'
    },
    {
      title: 'Fork and Modify',
      description: 'Found a great deck but want to add your own notes? Fork it, edit it, and use it exactly how you want.',
      icon: 'GitFork',
      image: '/geminirm.png'
    },
    {
      title: 'Creator Profiles',
      description: 'Follow your favorite deck creators and get notified the moment they drop a new update or study guide.',
      icon: 'UserPlus',
      image: '/image copy 8.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Learn together through challenges',
    description: 'Join community study challenges built around specific decks and compete on the global leaderboard to stay motivated.',
    image: '/image-copy-11-no-money.png',
    imageLeft: true,
    lists: [
      'Streak-based leaderboards',
      'XP rewards for top participants',
      'Exclusive badges for challenge completion'
    ]
  }
];
