// external dependencies
import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// pieces components
import { PageContextProvider } from 'pieces/utils/context';
import { Box } from '@thepuzzlers/pieces';

// client imports
import { Navbar } from 'sections/navbar/Navbar';

// CSS Imports
import 'reset-css'; // css reset
import 'gatsby-plugin-theme-ui/fonts/fontImports'; // font families

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
}

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
    <Box
      as='main'
      // Padding reflects the height of the NavBar
      sx={{
        positin: 'relative',
      }}
    >
      <Navbar />
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
