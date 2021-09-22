import React from 'react';
import { Card, Image } from '@thepuzzlers/pieces';

import { CardTextBlock } from '../blocks/CardTextBlock';

export const PrimaryCard = ({ image, title, text, sx, ...props }) => (
  <Card variant='vertical' sx={sx} {...props}>
    <Image
      src={image}
      alt=''
      sx={{
        borderRadius: 'headerCardImage',
        objectFit: 'cover',
        width: '100%',
      }}
    />
    <CardTextBlock title={title} text={text} />
  </Card>
);
