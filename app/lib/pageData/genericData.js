export const getGenericData = (pageTitle, iconText) => {
  return {
    heroContent: {
      announcement: { text: iconText || 'Burbly Feature' },
      title: pageTitle,
      subtitle: 'Experience the power of spaced repetition and AI-driven learning. Burbly seamlessly adapts to your needs, whether you are preparing for a major exam or learning a new language.',
      cta: { primary: { text: 'Start Studying' } },
      image: '/image copy 8.png'
    },
    transformContent: {
      tag: 'Accelerated Learning',
      title: 'Make studying effortless',
      cta: {
        title: 'Join millions of learners worldwide',
        buttonText: 'Get Started Free',
        className: 'bg-indigo-50 border border-indigo-100 col-span-1 md:col-span-4'
      },
      features: [
        {
          title: 'Spaced Repetition',
          description: 'Scientifically proven algorithms schedule your reviews to maximize retention and minimize study time.',
          icon: 'Calendar',
          className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
        },
        {
          title: 'Dynamic Decks',
          description: 'Easily organize, tag, and search through thousands of cards to find exactly what you need.',
          icon: 'Layers',
          className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
        },
        {
          title: 'Sync Anywhere',
          description: 'Your progress is saved to the cloud instantly. Study on your phone, tablet, or computer.',
          icon: 'Smartphone',
          className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
        }
      ]
    },
    tabbedContent: {
      title: 'Built for Serious Learners',
      subtitle: 'Everything you need to memorize, retain, and understand complex topics.',
      tabs: [
        {
          title: 'Smart Analytics',
          description: 'Track your retention rate, daily streaks, and mastery over time with visual dashboards.',
          icon: 'LineChart',
          image: '/image copy 9.png'
        },
        {
          title: 'Social Study',
          description: 'Follow friends, share your progress, and compete in weekly challenges to stay motivated.',
          icon: 'Users',
          image: '/image copy 13.png'
        },
        {
          title: 'AI Generation',
          description: 'Paste any text or document and let Burbly automatically extract the key facts into flashcards.',
          icon: 'Sparkles',
          image: '/image copy 12.png'
        }
      ]
    },
    alternatingContent: [
      {
        title: 'Master any subject',
        description: 'Whether it\'s a new language, a medical textbook, or coding syntax, Burbly breaks it down into bite-sized cards that stick in your long-term memory.',
        image: '/image-copy-13-no-money.png',
        imageLeft: true,
        lists: [
          'Adaptive review intervals',
          'Rich text, audio, and image support',
          'Offline studying'
        ]
      }
    ]
  };
};
