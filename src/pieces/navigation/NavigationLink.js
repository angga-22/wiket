import React from 'react';
import { Link } from 'pieces/typography';
import { GridItem } from 'pieces/grid';
import { GatsbyLink } from 'pieces/elements';

export const NavigationLink = props => {
  const { to } = props;
  return to.startsWith('#') ? (
    <PageInternalLink {...props} />
  ) : (
    <GatsbyPageLink {...props} />
  );
};

//
// Single Page Navigation Link
//
// Navigates to a section within a page
// Expects an id selector as the "to"-prop
// Valid "to"-props: "#footer" or "#about"
export const PageInternalLink = ({ to, title, active = false, sx = {} }) => (
  <Link
    sx={sx}
    key={to}
    className={active ? 'active' : ''}
    variant='navigation'
    onClick={() => {
      // Smooth scroll to a certain element
      try {
        document.querySelector(to).scrollIntoView({
          behavior: 'smooth',
        });
      } catch (e) {
        //  eslint-ignore no-console
        console.error(`Error: Queryselector ${to} not found.`);
      }
    }}
  >
    {title}
  </Link>
);

//
// Multipage Navigation Link
// Uses GatsbyLink, to navigate to a new page
export const GatsbyPageLink = ({ title, to, active = false, sx = {} }) => (
  <GridItem>
    <GatsbyLink
      className={active ? 'active' : ''}
      variant='navigation'
      sx={sx}
      to={to}
    >
      {title}
    </GatsbyLink>
  </GridItem>
);
