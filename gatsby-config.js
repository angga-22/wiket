module.exports = {
  siteMetadata: {
    title: `The Puzzlers Default Started`,
    description: `Kick off any client project with this Boilerplate. This barebones starter ships with the styled-components and styled-system setup you need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // 'gatsby-plugin-eslint',
    // eslint
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {git
    //     test: /\.js$|\.jsx$/,
    //     exclude: /(node_modules|.cache|public)/,
    //     stages: ['develop'],
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     },
    //   },
    // },
    // meta data for pages
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // necessary to load images using gatsby-image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Styled Components
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    // allows webpage to be saved to phone
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/puzzlers-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
