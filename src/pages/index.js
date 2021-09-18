import React from 'react';
import { graphql } from 'gatsby';

import {
  Header,
  Strengthen,
  Profile,
  Connections,
  Values,
  Filler,
  Pricing,
  Quote,
  Contact,
} from 'sections/landingPage';
import { Footer } from 'sections/Footer';

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <Strengthen />
    <Profile />
    <Connections />
    <Values />
    <Filler />
    <Pricing featuresData={data.features.nodes} />
    <Quote />
    <Contact />
    <Footer />
  </div>
);
export const query = graphql`
  query getFeaturesPricingData {
    features: allPricingFeaturesJson {
      nodes {
        title
        features {
          isBlossom
          isGrowth
          title
        }
      }
    }
  }
`;

export default IndexPage;
