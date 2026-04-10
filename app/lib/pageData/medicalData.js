export const heroContent = {
  announcement: { text: 'For Medical Students' },
  title: 'Ace the Boards with Burbly',
  subtitle: 'Whether you are studying for the USMLE, NCLEX, or your anatomy practicals, Burbly helps you memorize massive volumes of complex medical information using science-backed spaced repetition.',
  cta: { primary: { text: 'Start Your Medical Journey' } },
  image: '/image copy 12.png'
};

export const transformContent = {
  tag: 'High-Yield Retention',
  title: 'Built for intense curriculums',
  cta: {
    title: 'Join thousands of med students',
    buttonText: 'Try Burbly Medical',
    className: 'bg-red-50 border border-red-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Massive Deck Support',
      description: 'Import enormous community decks like AnKing effortlessly. Burbly handles decks with tens of thousands of cards without slowing down.',
      icon: 'Layers',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Image Occlusion',
      description: 'Easily mask parts of an anatomy diagram or cellular pathway to test your visual memory.',
      icon: 'Eye',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Custom Scheduling',
      description: 'Tweak the FSRS algorithm to peak your retention exactly on test day.',
      icon: 'Target',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Tools that respect your limited time',
  subtitle: 'Optimize every second you spend studying outside of clinicals.',
  tabs: [
    {
      title: 'Hierarchical Tags',
      description: 'Organize related cards by organ system, pathology, or specific textbook chapters to focus your reviews.',
      icon: 'FolderTree',
      image: '/image copy 8.png'
    },
    {
      title: 'Filter by Suspended',
      description: 'Keep future cards suspended and only unsuspend the concepts you covered in your lectures today.',
      icon: 'Filter',
      image: '/image copy 9.png'
    },
    {
      title: 'AI Medical Explainer',
      description: 'Stuck on a pharmacological mechanism? The AI Tutor can break down drug interactions into digestible bites.',
      icon: 'Stethoscope',
      image: '/geminirm.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'Study on the wards',
    description: 'Burbly’s offline-first mobile app means you can crush 50 cards during elevator rides or while waiting for rounds to start, even when hospital Wi-Fi fails you.',
    image: '/image copy 13.png',
    imageLeft: true,
    lists: [
      'True offline syncing',
      'One-handed swipe gestures',
      'Dark mode to reduce eye strain on night shifts'
    ]
  }
];
