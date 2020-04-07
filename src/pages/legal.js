import React from 'react';
import SEO from 'pieces/SEO';
import { graphql } from 'gatsby';
// pieces imports
import { Section } from 'pieces/layout';
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
