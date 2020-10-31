// external dependencies
import React from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'reset-css';
// pieces components
import { Main } from 'pieces/layout';
import { PageContextProvider } from 'pieces/utils/context';
// client imports
import 'gatsby-plugin-theme-ui/fontImports';
import { Navigation } from 'sections/Navigation';
import { Footer } from 'sections/Footer';

// Font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebook,  } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
// library.add(faFacebook, faEnvelope);

const Layout = ({ children, pageContext: { locale } }) => (
  <>
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
        }}
      />
      <Navigation locale={locale} />
      <Main sx={{ paddingTop: ['60px', '60px', '60px', '60px', '70px'] }}>
        {children}
      </Main>
      <Footer />
    </PageContextProvider>
  </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
