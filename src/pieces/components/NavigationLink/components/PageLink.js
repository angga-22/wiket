import React from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
// Pieces imports
import { GatsbyLink } from 'pieces';

// Uses GatsbyLink, to navigate to a new page
export const PageLink = ({ children, to, sx = {}, variant = 'navigation' }) => {
  const location = useLocation();

  const isActive = location.pathname === to || location.pathname === `${to}/`;
  return (
    <GatsbyLink active={isActive} variant={variant} sx={sx} to={to}>
      {children}
    </GatsbyLink>
  );
};