// external dependencies
import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import 'reset-css';
import { Box } from '@thepuzzlers/pieces';
// local components
import { PageContextProvider } from 'pieces/utils/context';
// client imports
import 'gatsby-plugin-theme-ui/fonts/fontImports';
import { Navigation } from 'sections/Navigation';
import { Footer } from 'sections/Footer';

// Font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebook,  } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
// library.add(faFacebook, faEnvelope);

const Layout = ({ children, pageContext: { locale } }) => (
  <PageContextProvider locale={locale}>
    <Global
      styles={{
        body: {
          WebkitTextSizeAdjust: '100%',
          width: '100%',
          height: '100%',
          position: 'relative',
        },
        '*|*:link': {
          textDecoration: 'inherit',
          color: 'inherit',
        },
        '*': {
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
          MozOsxFontSmoothing: 'grayscale',
        },
      }}
    />
    <Navigation locale={locale} />
    <Box
      as='main'
      // Padding reflects the height of the NavBar
      sx={{ paddingTop: ['60px', '60px', '60px', '60px', '70px'] }}
    >
      {children}
    </Box>
    <Footer />
  </PageContextProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
