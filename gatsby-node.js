const path = require('path');
// const { createRemoteFileNode } = require('gatsby-source-filesystem');
const {
  siteMetadata: { locales },
} = require('./gatsby-config');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // default to default locale defined in gatsby-config.js
  deletePage(page);
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: locales.default ? locales.default : 'en',
    },
  });
};

// // Convert Asset types from external api into Gatsby Images
// exports.createResolvers = async ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions;

//   await createResolvers({
//     PUZZLERS_Asset: {
//       gatsbyImage: {
//         type: 'File',
//         async resolve(source) {
//           return createRemoteFileNode({
//             url: encodeURI(`https://api.thepuzzlers.io${source.url}`),
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           });
//         },
//       },
//     },
//   });
// };
