const path = require('path');
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
  locales.locales
    // eslint-disable-next-line consistent-return
    && locales.locales.forEach(({ code, pathPrefix }) => {
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
