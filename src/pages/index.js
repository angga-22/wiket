import React from 'react';
import { graphql } from 'gatsby';

import {
  Header,
  Benefits,
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
    <Header imagesData={data.images.nodes[0]} />
    <Box sx={{ height: ['94px', '2px', '29px', '0px', '16px', '20px'] }} />
    <Benefits />
    <Box sx={{ height: ['212px', '82px', '98px', '99px', '64px', '152px'] }} />
    <Profile />
    <Box sx={{ height: ['0px', '0px', '17px', '0px', '0px', '0px'] }} />
    <Connections imagesData={data.images.nodes[0]} />
    <Box
      sx={{ height: ['280px', '244px', '511px', '187px', '352px', '216px'] }}
    />
    <Values />
    <Box sx={{ height: ['64px', '80px', '147px', '44px', '88px', '140px'] }} />
    <Filler />
    <Box sx={{ height: ['0px', '0px', '0px', '0px', '0px', '64px'] }} />
    <Pricing />
    <Box
      sx={{ height: ['200px', '352px', '349px', '105px', '440px', '425px'] }}
    />
    <Quote />
    <Box sx={{ height: ['130px', '20px', '229px', '7px', '89px', '40px'] }} />
    <Contact />
  </div>
);
export const query = graphql`
  query getImagesData {
    images: allImagesJson {
      nodes {
        greenCafeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        greenThumbImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        potjectImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage;
