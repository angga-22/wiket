import React from 'react';
// Pieces imports
import { SEO, Card, NavigationLink } from 'pieces';
import { TypographyTestBlock } from 'pieces/blocks';
// sections
import { Header } from 'sections/landingPage';
import { PrimaryButton, SecondaryButton } from 'atoms/buttons';

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Header />
    {/* Delete This After Typography is setup */}
    <TypographyTestBlock text='' paragraph=''>
      {/* Client Components */}
      <PrimaryButton>Primary Button</PrimaryButton>
      <NavigationLink to='/legal'>
        <SecondaryButton>Secondary Button to Legal Page</SecondaryButton>
      </NavigationLink>
      <Card>Hi, I am a card</Card>
    </TypographyTestBlock>
  </>
);

export default IndexPage;
