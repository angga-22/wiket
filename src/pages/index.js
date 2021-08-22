import React from 'react';
import { Card, Button } from '@thepuzzlers/pieces';
// Local imports
import { SEO, NavigationLink } from 'pieces';
import { TypographyTestBlock } from 'pieces/blocks';
// sections
import { Header } from 'sections/landingPage';

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Header />
    {/* Delete This After Typography is setup */}
    <TypographyTestBlock text='' paragraph=''>
      {/* Client Components */}
      <Button variant='primary'>Primary Button</Button>
      <NavigationLink to='/legal'>
        <Button variant='secondary'>Secondary Button to Legal Page</Button>
      </NavigationLink>
      <Card>Hi, I am a card</Card>
    </TypographyTestBlock>
  </>
);

export default IndexPage;
