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

  // loop through all locale of page and check, if pathPrefix is given
  // if yes, pass carresponding locale to pageContext
  if (locales.translations?.length > 0) {
    // eslint-disable-next-line consistent-return
    locales.translations.forEach(({ code, pathPrefix }) => {
      if (page.path.match(new RegExp(`/${pathPrefix}/.+|/${pathPrefix}/`))) {
        deletePage(page);
        // You can access the variable "house" in your page queries now
        return createPage({
          ...page,
          context: {
            ...page.context,
            locale: code,
          },
        });
      }
    });
  }
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
