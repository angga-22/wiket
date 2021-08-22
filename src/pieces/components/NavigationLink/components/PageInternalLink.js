import React, { useEffect, useState } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Link } from '@thepuzzlers/pieces';

// Navigates to a section within a page
// e.g. to navigate between sections of a single page website
//
// Expects the user to already be on the correct page.
// Expects an id selector as the "to"-prop
// Valid "to"-props: "#footer" or "/about/#us"
export const PageInternalLink = ({ to, children, sx = {}, variant }) => {
  const { pathname: currentPathname, hash: currentHash } = useLocation();
  const [isClient, setClient] = useState(false);
  const hash = to.slice(to.indexOf('#'));
  const isActive = currentPathname + currentHash === to || currentHash === to;

  useEffect(() => {
    // key of link needs to switch
    // otherwise 'active' className is not applied
    // on initial render
    setClient(true);
  }, []);

  function scrollToHash(e) {
    e.preventDefault();

    // Smooth scroll to hash
    try {
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth',
      });
    } catch (error) {
      // eslint-ignore no-console
      console.error(`Error: Queryselector ${hash} not found.`);
    }
    // Set hash in url (only if we are not already at this path)
    // Jumps to secton direclty, that is why we wait to smooth scroll there manually
    if (!isActive) {
      setTimeout(() => navigate(hash), 500);
    }
  }

  return (
    <Link
      key={isClient && 'client'}
      sx={{ ...sx }}
      className={isActive && 'active'}
      variant={variant}
      href={hash}
      onClick={scrollToHash}
    >
      {children}
    </Link>
  );
};

PageInternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.shape(),
  variant: PropTypes.string,
};

PageInternalLink.defaultProps = {
  sx: {},
  variant: 'navigation',
};
