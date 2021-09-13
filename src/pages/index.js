/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from '@thepuzzlers/pieces';
// Local imports
import { SEO, NavigationLink, GatsbyImage } from 'pieces';
import { TypographyTestBlock } from 'pieces/blocks';
// sections
import { Header } from 'sections/landingPage';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <>
    <SEO title='Home' />
    <Header />
    {/* Delete This After Typography is setup */}
    <TypographyTestBlock text='' paragraph=''>
      {/* Client Components */}
      <GatsbyImage
        sx={{ width: '100px', height: '100px' }}
        image={data.landingPageJson.image}
      />
      <Button variant='primary'>Primary Button</Button>
      <NavigationLink to='/legal'>
        <Button variant='secondary'>Secondary Button to Legal Page</Button>
      </NavigationLink>
      <Card>Hi, I am a card</Card>
    </TypographyTestBlock>
  </>
);

export const query = graphql`
  query {
    landingPageJson {
      headline
      image {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  }
`;

export default IndexPage;
