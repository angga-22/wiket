// external imports
import React from 'react';
import { Link as RouterLink } from 'gatsby';
import PropTypes from 'prop-types';
import { GridItem } from '@thepuzzlers/pieces';

// Local imports
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { usePageContext } from 'pieces/utils/context';
import { useNavigationContext } from '../navigationContext';

export const MotionLink = ({ children, href }) => {
  const { body, currentScroll } = usePageContext();
  const { variants, closeNavigation, isOpen } = useNavigationContext();

  return (
    <GridItem
      className='overlay--items'
      onClick={() => {
        lockOrReleaseBody({
          animation: () => closeNavigation(),
          isOpen,
          body,
          currentScroll,
        });
      }}
      variants={variants.linkItems}
      initial={variants.linkItems.disappear}
    >
      <RouterLink to={href}>{children}</RouterLink>
    </GridItem>
  );
};

MotionLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
