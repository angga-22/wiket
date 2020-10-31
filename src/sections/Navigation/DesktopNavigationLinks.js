// External dependencies
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
// Pieces imports
import { Box } from 'pieces/box';
import { NavigationLink } from 'pieces/navigation';

export const DesktopNavigationLinks = () => {
  const location = useLocation();

  // data
  const {
    navJson: {
      nav: { links },
    },
  } = useStaticQuery(graphql`
    query {
      navJson {
        nav {
          links {
            title
            to
          }
        }
      }
    }
  `);

  return (
    <Box
      initial={{ scale: 1 }}
      sx={{
        display: ['none', 'none', 'none', 'none', 'flex'],
        alignSelf: 'center',
        alignItems: 'center',
      }}
    >
      {links.map(({ to, title }) => (
        <NavigationLink
          sx={{ p: ['10px 20px'] }}
          key={to}
          title={title}
          to={to}
          active={location.pathname === to || location.pathname === `${to}/`}
        />
      ))}
    </Box>
  );
};
