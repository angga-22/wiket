import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
// Pieces imports
import { Link } from 'pieces';

// Navigates to a section within a page
// e.g. to navigate between sections of a single page website
//
// Expects the user to already be on the correct page.
// Expects an id selector as the "to"-prop
// Valid "to"-props: "#footer" or "/about/#us"
export const PageInternalLink = ({
  to,
  children,
  sx = {},
  variant = 'navigation',
}) => {
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
