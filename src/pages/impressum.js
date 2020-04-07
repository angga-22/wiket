import React from 'react';
import SEO from 'pieces/SEO';
import { graphql } from 'gatsby';
// pieces imports
import { Section } from 'pieces/layout';
import { ImpressumBlock, LegalHeaderBlock } from 'pieces/blocks';

const ImpressumPage = ({
  data: {
    impressumPageJson: { seoTitle, headline, headOfCompanyIntro },
    businessInfoJson: { legal },
  },
}) => (
  <Section>
    <SEO title={seoTitle} description={`Impressum von ${legal.company}.`} />
    <LegalHeaderBlock headline={headline} />
    <ImpressumBlock
      {...legal}
      headOfCompanyIntro={headOfCompanyIntro}
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
      }
    }
  }
`;

export default ImpressumPage;
