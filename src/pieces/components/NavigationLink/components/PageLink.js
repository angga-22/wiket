import React from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import PropTypes from 'prop-types';
// Pieces imports
import { GatsbyLink } from '../../GatsbyLink';

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

PageLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  sx: PropTypes.shape(),
  variant: PropTypes.string,
};

PageLink.defaultProps = {
  sx: {},
  variant: 'navigation',
};
