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

import { Box } from '@thepuzzlers/pieces';

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <Box
      sx={{ height: ['214px', '122px', '149px', '114px', '136px', '140px'] }}
    />
    <Strengthen />
    <Box
      sx={{ height: ['332px', '202px', '218px', '219px', '184px', '272px'] }}
    />
    <Profile />
    <Box sx={{ height: ['103px', '121px', '137px', '61px', '90px', '44px'] }} />
    <Connections />
    <Box
      sx={{ height: ['280px', '244px', '511px', '187px', '352px', '216px'] }}
    />
    <Values />
    <Box sx={{ height: ['64px', '80px', '147px', '44px', '88px', '140px'] }} />
    <Filler />
    <Box sx={{ height: ['43px', '71px', '81px', '44px', '88px', '184px'] }} />
    <Pricing featuresData={data.features.nodes} />
    <Box
      sx={{ height: ['200px', '352px', '349px', '105px', '440px', '425px'] }}
    />
    <Quote />
    <Box
      sx={{ height: ['290px', '290px', '369px', '167px', '269px', '250px'] }}
    />
    <Contact />
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
          blossomCount
          growthCount
        }
      }
    }
  }
`;

export default IndexPage;
