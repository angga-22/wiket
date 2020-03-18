// external dependencies
import React from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'reset-css';
// pieces components
import { Main } from 'pieces/layout';
// client imports
import 'gatsby-plugin-theme-ui/fontImports';
import { Navigation } from 'sections/Navigation';
import { Footer } from 'sections/Footer';

const Layout = ({ children }) => (
  <>
    <Global
      styles={{
        body: {
          WebkitTextSizeAdjust: '100%',
          width: '100%',
          height: '100%',
          position: 'relative',
        },
        // reset browser specific link styles
        'a:-webkit-any-link': {
          textDecoration: 'inherit',
          color: 'inherit',
        },
        '*|*:link': {
          textDecoration: 'inherit',
          color: 'inherit',
        },
      }}
    />
    <Navigation />
    <Main>{children}</Main>
    <Footer />
  </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
