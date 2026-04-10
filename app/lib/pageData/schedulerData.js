export const heroContent = {
  announcement: { text: 'Next-Gen Spaced Repetition' },
  title: 'Smart FSRS Scheduler',
  subtitle: 'The heart of Burbly. Our bleeding-edge Free Spaced Repetition Scheduler algorithm predicts exactly when you are about to forget a piece of knowledge—so you never waste a single review.',
  cta: { primary: { text: 'Experience FSRS' } },
  image: '/image copy 10.png'
};

export const transformContent = {
  tag: 'Algorithmic Optimization',
  title: 'Better than human memory',
  cta: {
    title: 'Ready for peak efficiency?',
    buttonText: 'Try Burbly Free',
    className: 'bg-indigo-50 border border-indigo-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Less Time, More Memory',
      description: 'FSRS requires up to 30% fewer reviews to achieve the exact same retention rate as legacy spaced repetition algorithms.',
      icon: 'TrendingDown',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Targeted Retention',
      description: 'Dial in your desired retention rate (e.g., 90%). The algorithm automatically adapts your card intervals to guarantee that outcome.',
      icon: 'Target',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Personalized Parameters',
      description: 'The algorithm analyzes your entire review history to build a custom mathematical model of your unique brain.',
      icon: 'Brain',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Complex math, simple interface',
  subtitle: 'We crunch the numbers so you can just hit spacebar.',
  tabs: [
    {
      title: 'Load Balancing',
      description: 'The scheduler prevents review spikes on weekends by dynamically shifting easy cards to lighter days without harming retention.',
      icon: 'Sliders',
      image: '/image copy 13.png'
    },
    {
      title: 'Micro-Review Resilience',
      description: 'If you accidentally review a card early or a day late, FSRS factors that in perfectly. Legacy algorithms break; ours thrives.',
      icon: 'Shield',
      image: '/image copy 8.png'
    },
    {
      title: 'Overdue Fallback',
      description: 'Didn\'t study for a week? The scheduler intelligently prioritizes your most critical overdue cards first.',
      icon: 'Clock',
      image: '/geminirm.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'A quantum leap in learning science',
    description: 'Traditional SM-2 algorithms treat every learner the same. Our implementation of FSRS utilizes deep history tracking to understand that you might learn vocabulary 2x faster than average, but need more repetitions for math formulas. It adjusts per-deck automatically.',
    image: '/image-copy-13-no-money.png',
    imageLeft: false,
    lists: [
      'Scientifically validated by massive datasets',
      'Continuous background optimization',
      'Exportable learning parameters'
    ]
  }
];
