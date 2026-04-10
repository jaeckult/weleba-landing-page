export const heroContent = {
  announcement: { text: 'Your Personal Learning Coach' },
  title: 'Burbly AI Tutor',
  subtitle: 'Get un-stuck instantly. Burbly\'s AI Tutor analyzes the card you are currently struggling with and provides Socratic hints, alternative explanations, and deep-dives without giving away the answer.',
  cta: { primary: { text: 'Meet Your Tutor' } },
  image: '/image copy 11.png'
};

export const transformContent = {
  tag: 'AI Assistance',
  title: 'Never hit a wall again',
  cta: {
    title: 'Experience 1-on-1 tutoring at scale',
    buttonText: 'Try AI Tutor',
    className: 'bg-green-50 border border-green-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Context-Aware Hints',
      description: 'The tutor knows what card you are looking at and tailors its hints to precisely what you are trying to remember.',
      icon: 'Bot',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Socratic Method',
      description: 'It guides you to the correct answer by asking leading questions, rather than just telling you what to memorize.',
      icon: 'MessageSquare',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Explain Like I\'m 5',
      description: 'Confused by a complex card? Ask the tutor to break it down into simpler terms or provide a real-world analogy.',
      icon: 'Sparkles',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'A tutor that lives inside your flashcards',
  subtitle: 'Seamless integration with your daily review sessions.',
  tabs: [
    {
      title: 'On-Demand Help',
      description: 'Stuck on a tricky card? Hit the AI Tutor button and instantly get a hint that nudges you in the right direction.',
      icon: 'HelpCircle',
      image: '/geminirm.png'
    },
    {
      title: 'Deep Concept Dive',
      description: 'Need more context? The tutor can generate a mini-lesson on the fly expanding on the concept of any card in your deck.',
      icon: 'Layers',
      image: '/image copy 10.png'
    },
    {
      title: 'Generate Mnemonics',
      description: 'Ask the tutor to come up with a catchy mnemonic or memory palace association for a hard-to-remember fact.',
      icon: 'Brain',
      image: '/image copy 13.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'It learns how you learn',
    description: 'The more you interact, the better the AI Tutor gets at understanding the types of explanations that click for you.',
    image: '/image-copy-11-no-money.png',
    imageLeft: true,
    lists: [
      'Tailored analogies based on your interests',
      'Adjusts vocabulary complexity based on your level',
      'Remembers your past struggles'
    ]
  }
];
