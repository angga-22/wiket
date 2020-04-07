import React from 'react';
import SEO from 'pieces/SEO';
import { GridItem } from 'pieces/grid';
import { Heading, Paragraph } from 'pieces/typography';
import { Section } from 'pieces/layout';

const NotFoundPage = () => (
  <>
    <SEO title='404: Not found' />
    <Section>
      <GridItem
        sx={{
          display: 'flex',
          height: ['200vw', '50vw', '120vw'],
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading as='h2'>Not found.</Heading>
        <Paragraph>You just hit a route that doesn&#39;t exist.</Paragraph>
      </GridItem>
    </Section>
  </>
);

export default NotFoundPage;
