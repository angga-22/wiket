// external dependencies
import React, { memo } from 'react';
// pieces components
import { Section } from 'pieces/layout';
import { GatsbyLink } from 'pieces/elements';
import { Link } from 'pieces/typography/elements';
import { GridItem } from 'pieces/grid';
import { Paragraph } from 'pieces/typography';

export const Footer = memo(() => (
  <Section as='footer' sx={{ mb: ['20vw', '10vw', '0', '0'] }}>
    <GridItem
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: ['10vw 0 4vw', '4vw 0', '4vw 0', '3vw 0', '2vw 0'],
      }}
    >
      <GatsbyLink to='/datenschutz' variant='footer'>
        Datenschutz
      </GatsbyLink>
      <GatsbyLink sx={{ marginLeft: ['5vw'] }} to='/impressum' variant='footer'>
        Impressum
      </GatsbyLink>
      <Paragraph sx={{ marginLeft: ['5vw'] }}>
        {'Build with <3 by '}
        <Link variant='hyperLink' href='https://thepuzzlers.io'>
          The Puzzlers.
        </Link>
      </Paragraph>
    </GridItem>
  </Section>
));
