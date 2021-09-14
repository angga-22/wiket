import React from 'react';
import { useThemeUI } from 'theme-ui';

import { Heading, Box, Paragraph } from '@thepuzzlers/pieces';

export const TwoStyledHeadline = ({
  textColor = 'inherit',
  gridDimensions = '1/13',
}) => {
  const { theme } = useThemeUI();
  return (
    <Box sx={{ gridColumn: gridDimensions }}>
      <Paragraph sx={{ ...theme.typography.h4.normal, color: textColor }}>
        Abends ein
      </Paragraph>
      <Heading type='h2' variant='bold' sx={{ color: textColor }}>
        Restaurant?!
      </Heading>
    </Box>
  );
};
