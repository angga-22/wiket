// external imports
import React, { memo } from 'react';
import { motion } from 'framer-motion';
// pieces imports
import { Box } from 'pieces';
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
