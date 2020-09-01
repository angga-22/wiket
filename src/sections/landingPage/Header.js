// external dependencies
import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// pieces components
import { Section } from 'pieces/layout';
import { Heading } from 'pieces/typography';
import { GridItem } from 'pieces/grid';

export const Header = memo(() => {
  const { landingPageJson, puzzlers } = useStaticQuery(graphql`
    query {
      puzzlers {
        business {
          name
        }
      }
      landingPageJson {
        headline
      }
    }
  `);

  return (
    <Section>
      <GridItem>
        <Heading type='h1'>{landingPageJson.headline}</Heading>
        <Heading type='h3'>Here is {puzzlers.business.name}</Heading>
      </GridItem>
    </Section>
  );
});
