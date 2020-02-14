import React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { Heading } from 'theme-ui';
import PrimaryButton from 'atoms/buttons/PrimaryButton';
import SecondaryButton from 'atoms/buttons/SecondaryButton';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Heading>Welcome to the starter kit</Heading>
      <PrimaryButton>Get Started</PrimaryButton>
      <SecondaryButton>Click me!</SecondaryButton>
    </div>
  </Layout>
);

export default IndexPage;
