// external imports
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// pieces imports
import { Box } from 'pieces';
import { SimpleNavigationContextProvider } from './SimpleNavigationContext';
import { SimpleNavigationOverlay } from './SimpleNavigationOverlay';
import { animations as defaultAnimations } from './animations';
// Motion Container
import { SimpleMotionLink } from './SimpleMotionLink';

export const SimpleNavigation = memo(
  ({ NavigationHeader, links, OverlayLayout, sx }) => (
    <SimpleNavigationContextProvider animations={defaultAnimations}>
      <Box
        id='nav'
        as={motion.nav}
        sx={{
          position: 'fixed',
          zIndex: '100',
          width: '100%',
          ...sx,
        }}
      >
        <NavigationHeader />
        <SimpleNavigationOverlay>
          <OverlayLayout>
            {links.map((Link, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SimpleMotionLink key={index}>{Link}</SimpleMotionLink>
            ))}
          </OverlayLayout>
        </SimpleNavigationOverlay>
      </Box>
    </SimpleNavigationContextProvider>
  )
);

SimpleNavigation.propTypes = {
  NavigationHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
    .isRequired,
  OverlayLayout: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
    .isRequired,
  links: PropTypes.arrayOf(PropTypes.node.isRequired),
  sx: PropTypes.shape(),
};

SimpleNavigation.defaultProps = {
  links: [],
  sx: {},
};
