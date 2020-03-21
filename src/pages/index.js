import React from 'react';
import SEO from 'atoms/SEO';
// sections
import { Header } from 'sections/landingPage';
import { TypographyTestBlock } from 'pieces/blocks';
import { PrimaryButton, SecondaryButton } from 'atoms/buttons';

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Header />
    {/* Delete This After Typography is setup */}
    <TypographyTestBlock text="" paragraph="">
      {/* Client Components */}
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </TypographyTestBlock>
  </>
);

export default IndexPage;
