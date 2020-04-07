module.exports = {
  siteMetadata: {
    title: 'Creative websites for small businesses and people with ideas',
    description:
      // eslint-disable-next-line max-len
      'We build websites as a service and our innovative cms lets manage you everything afterwards. No upfront payment needed.',
    author: '@ThePuzzlers',
    shortTitle: 'Creative websites. Innovative cms',
    shortDescription:
      // eslint-disable-next-line max-len
      'Built by us. No upfront payments.',
    url: 'https://www.thepuzzlers.io/',
    locales: {
      default: 'en',
      locales: [
        // { code: 'de', pathPrefix: 'de' }
      ],
    },
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    // meta data for pages
    'gatsby-plugin-react-helmet',
    // local images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    // local data
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    // enables to query json files
    'gatsby-transformer-json',
    // necessary to load images using gatsby-image
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // allows webpage to be saved to phone
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'thepuzzlers-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#fff',
    //     theme_color: '#000',
    //     display: 'minimal-ui',
    //     icon: 'src/images/puzzlers-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.js'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
