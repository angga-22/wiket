/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'theme';
import { createGlobalStyle } from 'styled-components';

import Header from './header';

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.theme === "purple" ? "purple" : "white")};
//   }
// `

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <GlobalStyle theme="purple" />
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

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
  console.log(theme);
  console.log(GlobalStyle);

  //   const GlobalStyle = createGlobalStyle`
  //   body {
  //     color: ${props => (props.whiteColor ? "white" : "black")};
  //   }
  // `

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle whiteColor />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>©{new Date().getFullYear()}, Built by ThePuzzlers</footer>
      </React.Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
