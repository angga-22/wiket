import React from 'react';
import { SEO, GridItem, Section, Heading, Paragraph } from 'pieces';

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
