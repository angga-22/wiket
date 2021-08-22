import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Section } from '@thepuzzlers/pieces';
// Local imports
import { SEO } from 'pieces';
import { ImpressumBlock, LegalHeaderBlock } from 'pieces/blocks';

const LegalPage = ({
  data: {
    legalPageJson: {
      seoTitle,
      headline,
      headOfCompanyIntro,
      commercialRegisterEntry,
      registerHeadline,
    },
    businessInfoJson: { legal },
  },
}) => (
  <Section>
    <SEO
      title={seoTitle}
      description={`Legal information of ${legal.company}.`}
    />
    <LegalHeaderBlock headline={headline} />
    <ImpressumBlock
      {...legal}
      headOfCompanyIntro={headOfCompanyIntro}
      commercialRegisterEntry={commercialRegisterEntry}
      registerHeadline={registerHeadline}
      sx={{ mt: ['10vw', '5vw', '5vw', '2vw'], mb: ['20vw'] }}
    />
  </Section>
);

LegalPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {
    legalPageJson {
      seoTitle
      headline
      headOfCompanyIntro
      registerHeadline
      commercialRegisterEntry {
        title
        courtName
        numberName
      }
    }
    businessInfoJson {
      legal {
        company
        headOfCompany
        address {
          street
          city
        }
        tel
        ustid
        email
        commercialRegister {
          court
          number
        }
      }
    }
  }
`;

export default LegalPage;
