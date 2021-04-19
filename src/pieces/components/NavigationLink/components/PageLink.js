import React from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import PropTypes from 'prop-types';
// Pieces imports
import { GatsbyLink } from '../../GatsbyLink';
import { usePageContext } from '../../../utils/context';
import { localizePath } from '../../../utils/functions';

// Uses GatsbyLink, to navigate to a new page
export const PageLink = ({ children, to, sx = {}, variant = 'navigation' }) => {
  const location = useLocation();
  const { locale } = usePageContext();

  const localizedTo = localizePath(to, locale);
  const isActive =
    location.pathname === localizedTo ||
    location.pathname === `${localizedTo}/`;
  return (
    <GatsbyLink active={isActive} variant={variant} sx={sx} to={localizedTo}>
      {children}
    </GatsbyLink>
  );
};

PageLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.shape(),
  variant: PropTypes.string,
};

PageLink.defaultProps = {
  sx: {},
  variant: 'navigation',
};
