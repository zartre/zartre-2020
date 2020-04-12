// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Nathan Yiangsupapaanontr',
  siteUrl: 'https://zartre.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/work/**/*.md',
        typeName: 'Work',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
  ],
  templates: {
    Work: [{
      name: 'work',
      path: '/work/:slug'
    }]
  }
};
