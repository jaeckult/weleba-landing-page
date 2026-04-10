export const heroContent = {
  announcement: { text: 'Personalized Journeys' },
  title: 'AI Study Paths',
  subtitle: 'Don\'t overwhelm yourself. Tell Burbly what you want to learn and by when, and our AI will generate a day-by-day roadmap that adapts as you progress.',
  cta: { primary: { text: 'Create a Plan' } },
  image: '/image copy 12.png'
};

export const transformContent = {
  tag: 'Guided Learning',
  title: 'A roadmap to your goals',
  cta: {
    title: 'Stop guessing what to study next',
    buttonText: 'Generate Path',
    className: 'bg-emerald-50 border border-emerald-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Goal-Oriented Generation',
      description: 'Input "Pass JLPT N4 in 3 months" and get a curated collection of decks broken down into daily review targets.',
      icon: 'Map',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Dynamic Adjustment',
      description: 'If you fall behind or score poorly on a topic, the path automatically restructures itself to help you catch up without burning out.',
      icon: 'RefreshCcw',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Prerequisite Checking',
      description: 'The planner ensures you master foundational concepts before presenting advanced cards.',
      icon: 'CheckSquare',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Stay on track automatically',
  subtitle: 'The ultimate tool for procrastinators.',
  tabs: [
    {
      title: 'Deadline Mode',
      description: 'Hard fix an exam date. Burbly will calculate exactly how many new cards you must learn per day to peak on test day.',
      icon: 'Calendar',
      image: '/image copy 10.png'
    },
    {
      title: 'Syllabus Import',
      description: 'Upload a PDF syllabus and let the AI map community decks to your course schedule week-by-week.',
      icon: 'FileText',
      image: '/image copy 9.png'
    },
    {
      title: 'Milestone Tracking',
      description: 'Earn incremental badge rewards as you hit percentage milestones of your overall study path.',
      icon: 'Flag',
      image: '/geminirm.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Your daily dashboard',
    description: 'Every time you open Burbly, you’ll see exactly what needs to be done today. No configuration, no deciding what deck to click—just hit "Start Session" and go.',
    image: '/image-copy-13-no-money.png',
    imageLeft: true,
    lists: [
      'Aggregated daily review queues',
      'Clear time-to-completion estimates',
      'Priority weighting for urgent subjects'
    ]
  }
];
