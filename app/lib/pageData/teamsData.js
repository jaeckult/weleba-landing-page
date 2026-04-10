export const heroContent = {
  announcement: { text: 'For Teams & Orgs' },
  title: 'Burbly for Work',
  subtitle: 'Onboard employees faster and retain institutional knowledge. Burbly provides robust team workspaces, secure sharing, and manager analytics for modern teams.',
  cta: { primary: { text: 'Start a Team Trial' } },
  image: '/image copy 12.png'
};

export const transformContent = {
  tag: 'Corporate Learning',
  title: 'Turn documentation into knowledge',
  cta: {
    title: 'Stop losing time to repeated questions',
    buttonText: 'Get Team Access',
    className: 'bg-indigo-50 border border-indigo-100 col-span-1 md:col-span-4'
  },
  features: [
    {
      title: 'Private Workspaces',
      description: 'Your company\'s IP remains secure. Control viewing, editing, and sharing permissions at the deck and organizational level.',
      icon: 'Shield',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-8'
    },
    {
      title: 'Bulk Provisioning',
      description: 'Easily onboard hundreds of employees at once with SCIM and single sign-on (SSO) integration.',
      icon: 'Users',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    },
    {
      title: 'Manager Dashboards',
      description: 'Track adoption rates and completion metrics to ensure compliance training actually sticks.',
      icon: 'BarChart',
      className: 'bg-white border border-gray-100 shadow-sm col-span-1 md:col-span-6'
    }
  ]
};

export const tabbedContent = {
  title: 'Onboarding that scales',
  subtitle: 'Reduce the time it takes an engineer to ship their first feature.',
  tabs: [
    {
      title: 'Wiki Syncing',
      description: 'Integrate with Notion or Confluence. When documentation updates, AI regenerates the flashcards automatically.',
      icon: 'RefreshCw',
      image: '/geminirm.png'
    },
    {
      title: 'Department Pathways',
      description: 'Assign the "Sales Associate" or "Backend Engineering" study path to new hires the moment they join.',
      icon: 'Map',
      image: '/image copy 10.png'
    },
    {
      title: 'Knowledge Capture',
      description: 'When senior engineers answer questions in Slack, extract their answers into public team cards instantly.',
      icon: 'MessageSquare',
      image: '/image copy 8.png'
    }
  ]
};

export const alternatingContent = [
  {
    title: 'The ROI of remembering',
    description: 'Every time an employee forgets a procedure and has to ask a colleague, the company loses productivity. Burbly minimizes "brain drain" and interruptions by ensuring essential knowledge is deeply embedded into your team\'s memory.',
    image: '/image-copy-13-no-money.png',
    imageLeft: false,
    lists: [
      'Reduce redundant Slack questions by 40%',
      'Train customer support reps 2x faster',
      'Maintain compliance standards effortlessly'
    ]
  }
];
