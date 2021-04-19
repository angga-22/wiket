import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@gatsbyjs/reach-router';
// Local imports
import { PageInternalLink, PageLink } from './components';

// Helper Function
// Detects, whether a link contains a hash
// And wether we are at the requested page, to be able to scroll to the hash
function isPageInternalLink(to, currentLocation) {
  if (!to) return false;
  const requestedPathname = to.slice(0, to.indexOf('#'));
  if (to.includes('#')) {
    if (
      currentLocation.pathname === '' || // e.g. '#header'
      currentLocation.pathname === requestedPathname ||
      currentLocation.pathname === `${requestedPathname}/`
    ) {
      return true;
    }
  }
  return false;
}

export const NavigationLink = ({ to, ...props }) => {
  const location = useLocation();
  return isPageInternalLink(to, location) ? (
    <PageInternalLink to={to} {...props} />
  ) : (
    <PageLink to={to} {...props} />
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
};
