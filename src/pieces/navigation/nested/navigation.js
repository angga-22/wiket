// external imports
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Box } from '@thepuzzlers/pieces';
// Local imports
import { NavigationContextProvider } from './navigationContext';
import { NavigationOverlay } from './navigationOverlay';

export const Navigation = memo(
  ({
    NavigationLink,
    NavigationHeader,
    NavigationBackButton,
    NavigationFooter,
  }) => (
    <NavigationContextProvider>
      <Box
        id='nav'
        as={motion.nav}
        sx={{ position: 'fixed', backgroundColor: '#fff', zIndex: '100' }}
      >
        <NavigationHeader />
        <NavigationOverlay
          NavigationLink={NavigationLink}
          BackButton={NavigationBackButton}
          NavigationFooter={NavigationFooter}
        />
      </Box>
    </NavigationContextProvider>
  )
);

Navigation.propTypes = {
  NavigationLink: PropTypes.func.isRequired,
  NavigationHeader: PropTypes.func.isRequired,
  NavigationBackButton: PropTypes.func.isRequired,
  NavigationFooter: PropTypes.func.isRequired,
};
