import React from 'react';
import { graphql } from 'gatsby';
import { Header } from 'sections/landingPage';
import { HeaderJeremy } from 'sections/landingPage/header-jeremy/Header';
import { Values } from 'sections/landingPage/values/Values';
import { Strengthen } from 'sections/landingPage/strengthen/Strengthen';
import { Filler } from 'sections/landingPage/filler/Filler';
import potject from 'assets/jpg/header-sub-img-1.jpg';
import greenThumb from 'assets/jpg/header-sub-img-2.jpg';
import greenCafe from 'assets/jpg/header-sub-img-3.jpg';
import communicateImg from 'assets/svg/icon-communication.svg';
import growImg from 'assets/svg/icon-growth.svg';
import connectImg from 'assets/svg/icon-collaborate.svg';
import marketImg from 'assets/svg/icon-market.svg';
import { Benefit } from 'sections/landingPage/benefits';
import FeaturePrice from 'sections/landingPage/featuresPrice';
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

const benefitData = {
  firstBenefit: {
    id: 1,
    label: 'Communicate',
    description:
      'Build your reputation and relationship to drive innovation and productivity.',
    img: `${communicateImg}`,
  },
  secondBenefit: {
    id: 2,
    label: 'Grow',
    description:
      'Build your reputation and relationship to drive innovation and productivity.',
    img: `${growImg}`,
  },
  thirdBenefit: {
    id: 3,
    label: 'Connect',
    description:
      'Build your reputation and relationship to drive innovation and productivity.',
    img: `${connectImg}`,
  },
  fourthBenefit: {
    id: 4,
    label: 'market',
    description:
      'Build your reputation and relationship to drive innovation and productivity.',
    img: `${marketImg}`,
  },
};

const IndexPage = ({ data }) => (
  <div>
    <HeaderJeremy />
    <Header cardData={headerData} />
    <Benefit benefitData={benefitData} />
    <Strengthen />
    <Values />
    <Filler />
    <FeaturePrice featuresData={data.features.nodes} />
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
