import React from 'react';
import { Paragraph, Heading } from 'pieces/typography';
import { Box } from 'pieces/box';
import { LegalPageGridItem } from 'pieces/blocks';

export const DataPrivacyBlock = ({
  sx,
  subheadline,
  listing,
  text,
  textAfterListing,
}) => (
  <LegalPageGridItem sx={sx}>
    {subheadline && (
      <Heading as='h3' sx={{ lineHeight: '1.15' }}>
        {subheadline}
      </Heading>
    )}
    {text && <Paragraph sx={{ m: ['1em 0'] }}>{text}</Paragraph>}
    {listing && (
      <Box sx={{ m: ['1.5em 0'] }}>
        {listing.map(({ bulletpoint }) => (
          <Paragraph
            key={bulletpoint.blocks[0].key}
            sx={{
              listStyle: 'square inside',
              ':not(:first-child)': {
                mt: ['0.5em'],
              },
            }}
            as='li'
          >
            {bulletpoint}
          </Paragraph>
        ))}
      </Box>
    )}
    {textAfterListing && <Paragraph>{textAfterListing}</Paragraph>}
  </LegalPageGridItem>
);