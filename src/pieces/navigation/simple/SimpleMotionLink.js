// external imports
import React from 'react';
import PropTypes from 'prop-types';
// pieces imports
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { usePageContext } from 'pieces/utils/context';
// eslint-disable-next-line max-len
import { Box } from '@thepuzzlers/pieces';
import { useSimpleNavigationContext } from './SimpleNavigationContext';

export const SimpleMotionLink = ({ children, sx }) => {
  const { body, currentScroll } = usePageContext();
  const { variants, closeNavigation, isOpen } = useSimpleNavigationContext();
  return (
    <Box
      className='overlay--items'
      as='li'
      sx={sx}
      onClick={() => {
        lockOrReleaseBody({
          animation: () => closeNavigation(),
          isOpen,
          body,
          currentScroll,
        });
      }}
      variants={variants && variants.linkItems}
      initial={variants && variants.linkItems && variants.linkItems.close}
    >
      {children}
    </Box>
  );
};

SimpleMotionLink.propTypes = {
  sx: PropTypes.shape(),
  children: PropTypes.node.isRequired,
};

SimpleMotionLink.defaultProps = {
  sx: {},
};
