export const heroContent = {
  announcement: { text: 'Data-Driven Studying' },
  title: 'Progress Analytics',
  subtitle: 'Stop guessing what you know. Burbly gives you deep, actionable insights into your memory retention, forecast reviews, and study streaks so you can optimize your learning schedule.',
  cta: { primary: { text: 'View Your Stats' } },
  image: '/image copy 9.png'
};

export const transformContent = {
  tag: 'Visual Metrics',
  title: 'Measure what matters',
  cta: {
    title: 'Ready to track your mastery?',
    buttonText: 'See Analytics',
    className: 'bg-blue-50 border border-blue-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Retention Forecasts',
      description: 'See exactly how many cards you will need to review tomorrow, next week, and next month.',
      icon: 'LineChart',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Heatmaps',
      description: 'Visualize your daily review activity similar to GitHub contribution graphs to keep your study streak alive.',
      icon: 'Calendar',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Deck Mastery',
      description: 'Track the ratio of mature vs. learning cards in any given deck at a glance.',
      icon: 'PieChart',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Insights that improve your strategy',
  subtitle: 'Understand your memory to study more efficiently.',
  tabs: [
    {
      title: 'Time Tracking',
      description: 'See exactly how many minutes you spend per card and per deck to identify bottlenecks in your learning.',
      icon: 'Clock',
      image: '/image copy 12.png'
    },
    {
      title: 'Button Usage',
      description: 'Track how often you hit Hard, Good, or Easy to calibrate your own difficulty perception.',
      icon: 'MousePointerClick',
      image: '/image copy 13.png'
    },
    {
      title: 'Future Load',
      description: 'A dedicated graph predicting your future workload, helping you decide when to learn new cards.',
      icon: 'TrendingUp',
      image: '/image copy 8.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Identify your weak points instantly',
    description: 'Our analytics engine highlights the specific tags or card types that consume the most of your time, allowing you to rewrite them or create better mnemonics.',
    image: '/image-copy-13-no-money.png',
    imageLeft: true,
    lists: [
      'Filter reports by tag or subdeck',
      'Export data for custom visualization',
      'Compare performance over different months'
    ]
  }
];
