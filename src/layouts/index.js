// external dependencies
import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import 'reset-css';
// import { gsap } from 'gsap';
// pieces components
import { PageContextProvider } from 'pieces/utils/context';
import { Box } from '@thepuzzlers/pieces';
// client imports
import 'gatsby-plugin-theme-ui/fonts/fontImports';
import { Nav } from 'components/nav-menu';

// if (typeof window !== `undefined`) {
// }

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
          position: 'relative',
          backgroundColor: '#FFF8EF',
          overflow: 'visible',
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
    {/* <Navigation locale={locale} /> */}
    {/* {GSDevTools.create()} */}
    <Box
      as='main'
      // Padding reflects the height of the NavBar
      sx={{
        positin: 'relative',
      }}
    >
      <Nav />
      {children}
    </Box>
    {/* <Footer /> */}
  </PageContextProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
