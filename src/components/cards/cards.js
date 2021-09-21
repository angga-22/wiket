import React from 'react';

import { Box, Heading, Paragraph, Image } from '@thepuzzlers/pieces';

export const PrimaryCard = ({ image, title, text, sx }) => (
  <Box sx={{ ...sx }}>
    <Image
      src={image}
      alt=''
      sx={{
        borderRadius: 'headerCardImage',
        objectFit: 'cover',
        width: '100%',
      }}
    />
    <Heading
      as='h5'
      type='h5-500'
      sx={{
        mt: ['12px', '12px', '12px', '12px', '12px', '18px'],
        mb: ['4px', '4px', '4px', '4px', '4px', '6px'],
      }}
    >
      {title}
    </Heading>
    <Paragraph as='p' type='body-300'>
      {text}
    </Paragraph>
  </Box>
);
