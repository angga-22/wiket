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
    // CMS Api
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'PUZZLERS',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'puzzlers',
        // UPDATE TO CORRECT BUSINSS SLUG
        url: 'https://api.thepuzzlers.io/artist-bella',
      },
    },
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
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.js'),
      },
    },
  ],
};
