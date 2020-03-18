// external dependencies
import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// pieces components
import { Section } from 'pieces/layout';
import { Heading } from 'pieces/typography';
import { GridItem } from 'pieces/grid';

export const Header = memo(() => {
  const { landingPageJson } = useStaticQuery(graphql`
    query {
      landingPageJson {
        headline
      }
    }
  `);

  return (
    <Section>
      <GridItem>
        <Heading as='h1'>{landingPageJson.headline}</Heading>
      </GridItem>
    </Section>
  );
});
