import React from 'react';
import { graphql } from 'gatsby';
// pieces imports
import { SEO, Section } from 'pieces';
import { ImpressumBlock, LegalHeaderBlock } from 'pieces/blocks';

const ImpressumPage = ({
  data: {
    impressumPageJson: {
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
    <SEO title={seoTitle} description={`Impressum von ${legal.company}.`} />
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
    impressumPageJson {
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

export default ImpressumPage;
