import React from 'react';
import { graphql } from 'gatsby';
import { Header } from 'sections/landingPage/header/Header';
import { Values } from 'sections/landingPage/values/Values';
import { Strengthen } from 'sections/landingPage/strengthen/Strengthen';
import { Filler } from 'sections/landingPage/filler/Filler';
import { Connections } from 'sections/landingPage/connections/Connections';
import { Profile } from 'sections/landingPage/profile/Profile';
import { StartGrowing } from 'sections/landingPage/growing/Growing';
import FeaturePrice from 'sections/landingPage/featuresPrice';
import { Contact } from 'sections/landingPage/contact/Contact';
import Footer from 'sections/landingPage/footer';

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <Strengthen />
    <Profile />
    <Connections />
    <Values />
    <Filler />
    <FeaturePrice featuresData={data.features.nodes} />
    <StartGrowing />
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
