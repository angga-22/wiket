import React from 'react';
import { graphql } from 'gatsby';
import { Header } from 'sections/landingPage/header/Header';
import { Header as HeaderAngga } from 'sections/landingPage/header-angga';
import { Values } from 'sections/landingPage/values/Values';
import { Strengthen } from 'sections/landingPage/strengthen/Strengthen';
import { Filler } from 'sections/landingPage/filler/Filler';
import { Connections } from 'sections/landingPage/connections/Connections';
import { Profile } from 'sections/landingPage/profile/Profile';
import { StartGrowing } from 'sections/landingPage/growing/Growing';
import potject from 'assets/jpg/header-sub-img-1.jpg';
import greenThumb from 'assets/jpg/header-sub-img-2.jpg';
import greenCafe from 'assets/jpg/header-sub-img-3.jpg';
import FeaturePrice from 'sections/landingPage/featuresPrice';
import { Contact } from 'sections/landingPage/contact/Contact';
import Footer from 'sections/landingPage/footer';

const headerData = {
  firstCard: {
    id: 1,
    label: 'Potject',
    location: 'Poetry in Bangkok',
    img: `${potject}`,
  },
  secondCard: {
    id: 2,
    label: 'GreenThumb',
    location: 'Gardener in CheChe',
    img: `${greenThumb}`,
  },
  thirdCard: {
    id: 3,
    label: 'Green Cafe',
    location: 'Cafe in Bangkok',
    img: `${greenCafe}`,
  },
};

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <HeaderAngga cardData={headerData} />
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
