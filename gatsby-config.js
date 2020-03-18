module.exports = {
  siteMetadata: {
    title: 'The Puzzlers Default Started',
    description:
      // eslint-disable-next-line max-len
      'Kick off any client project with this Boilerplate. This barebones starter ships with the styled-components and styled-system setup you need.',
    author: 'thepuzzlers',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'thepuzzlers-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/puzzlers-icon.png', // This path is relative to the root of the site.
      },
    },
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
