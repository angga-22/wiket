import React from 'react';
import SEO from 'atoms/SEO';
import { graphql } from 'gatsby';
// pieces imports
import { Section } from 'pieces/layout';
import { ImpressumBlock, LegalHeaderBlock } from 'pieces/blocks';

const ImpressumPage = ({
  data: {
    impressumPageJson: { seoTitle, headline },
    businessInfoJson: { impressum },
  },
}) => (
  <Section>
    <SEO title={seoTitle} />
    <LegalHeaderBlock headline={headline} />
    <ImpressumBlock
      {...impressum}
      sx={{ mt: ['10vw', '5vw', '5vw', '2vw'], mb: ['20vw'] }}
    />
  </Section>
);

export const query = graphql`
  query {
    impressumPageJson {
      seoTitle
      headline
    }
    businessInfoJson {
      impressum {
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
