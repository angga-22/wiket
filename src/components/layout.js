import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'theme';
import Nav from './nav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle whiteColor />
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>©{new Date().getFullYear()}, Built by ThePuzzlers</footer>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
