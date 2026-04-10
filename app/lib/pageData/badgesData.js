export const heroContent = {
  announcement: { text: 'Gamified Progress' },
  title: 'Badges, Streaks, & XP',
  subtitle: 'Studying doesn\'t have to be a chore. Burbly seamlessly integrates RPG mechanics into your flashcard reviews, turning every deck you master into an engaging quest.',
  cta: { primary: { text: 'Start Leveling Up' } },
  image: '/image copy 8.png'
};

export const transformContent = {
  tag: 'Motivation Engine',
  title: 'Turn effort into rewards',
  cta: {
    title: 'Ready to build your study habit?',
    buttonText: 'Join the Game',
    className: 'bg-yellow-50 border border-yellow-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Experience Points (XP)',
      description: 'Earn XP for every single card you review correctly. The harder the card and the longer the interval, the more XP you receive.',
      icon: 'Swords',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Unlock Badges',
      description: 'Earning a 100-day streak or publishing a highly-upvoted community deck unlocks permanent, rare badges for your public profile.',
      icon: 'Trophy',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Global Leaderboards',
      description: 'See how your daily XP and streaks stack up against other super-learners around the world.',
      icon: 'Medal',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Mechanics that build habits',
  subtitle: 'We use game design principles to cure procrastination.',
  tabs: [
    {
      title: 'Daily Quests',
      description: 'Login to find 3 new daily quests (e.g., "Review 50 mature cards"). Complete them to earn a massive XP multiplier.',
      icon: 'Target',
      image: '/geminirm.png'
    },
    {
      title: 'Streak Multipliers',
      description: 'The longer your daily review streak, the faster you level up. But beware, missing a day means you lose your streak multiplier.',
      icon: 'Flame',
      image: '/image copy 9.png'
    },
    {
      title: 'Tier Progression',
      description: 'Climb the ranks from Novice to Grandmaster. Reaching higher tiers unlocks exclusive profile aesthetics and avatars.',
      icon: 'Crown',
      image: '/image copy 13.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Celebrate every milestone',
    description: 'Whether it is your first 1,000 cards studied or achieving a 95% retention rate on a notoriously difficult deck, Burbly makes sure your hard work is visibly recognized.',
    image: '/image-copy-11-no-money.png',
    imageLeft: false,
    lists: [
      'Share unlocks directly to social media',
      'Exclusive discord roles for Grandmasters',
      'Profile customization'
    ]
  }
];
