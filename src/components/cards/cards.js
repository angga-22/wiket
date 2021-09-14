import React from 'react';

import { Box, Heading, Paragraph } from '@thepuzzlers/pieces';

export const PrimaryCard = ({ image, text, sx = null }) => (
  <Box
    sx={{
      borderRadius: '12px',
      padding: '12px 12px 18px 12px',
      backgroundColor: 'lightBackground',
      zIndex: 1,
      position: 'relative',
      ...sx,
    }}
  >
    <img
      style={{ width: '100%', borderRadius: '12px' }}
      src={image.src}
      alt={image.alt}
    />
    <Box sx={{ mt: '12px' }}>
      <Heading type='h6' variant='bold'>
        {text.heading}
      </Heading>
      <Paragraph type='smallParagraph' sx={{ mt: '4px' }}>
        {text.paragraph}
      </Paragraph>
    </Box>
  </Box>
);
