module.exports = {
  // defaultSidebar: [{type: 'autogenerated', dirName: '.'}],
  defaultSidebar: [
    {
      type: 'doc',
      id: 'quick-start',
      label: 'Quick Start',
    },
    {
      type: 'category',
      label: 'Tutorial 🚀',
      collapsed: false,
      items: [
        'tutorial/api/chapter1-first-steps',
        'tutorial/api/chapter2-data-models',
        'tutorial/api/chapter3-title',
      ],
    },
    {
      type: 'category',
      label: 'Basics',
      collapsed: false,
      items: [
        'basics/selecting-and-skipping',
        'basics/parameterized-scenarios',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/using-plugins',
        'guides/writing-plugins',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices (soon)',
      collapsed: true,
      items: [
        'best-practices/best-practice',
      ],
    },
  ],
};
