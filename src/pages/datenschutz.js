import React from 'react';
import SEO from 'pieces/SEO';
import { graphql } from 'gatsby';
// pieces imports
import { Section } from 'pieces/layout';
import { Heading, Paragraph } from 'pieces/typography';
import {
  LegalPageGridItem,
  LegalHeaderBlock,
  DataPrivacyBlock,
} from 'pieces/blocks';

const DatenschutzPage = ({
  data: {
    datenschutzPageJson: { seoTitle, headline, intro, statement },
    businessInfoJson: {
      legal: { headOfCompany, address, company },
    },
  },
}) => (
  <Section sx={{ wordWrap: 'anywhere', overflow: 'hidden' }}>
    <SEO
      title={seoTitle}
      description={`Die Datenschutzerklärung von ${company}.`}
    />
    <LegalHeaderBlock headline={`${headline} ${company}`} introText={intro} />
    {/* Responsible Person and Business Info */}
    <LegalHeaderBlock headline={`${headline} ${company}`} introText={intro} />
    {/* Responsible Person and Business Info */}
    <LegalPageGridItem>
      <Heading type='h3' sx={{ lineHeight: '1.15' }}>
        Namen und Kontaktdaten des Verantwortlichen sowie seines Vertreters
      </Heading>
      <Paragraph sx={{ mt: ['1em'] }} variant='bold'>
        {company}
      </Paragraph>
      <br />
      <Paragraph>
        {address.street}
        <br />
        {address.city}
      </Paragraph>
      <Paragraph>
        Vertretungsberechtigter Geschäftsführer: {headOfCompany}
      </Paragraph>
    </LegalPageGridItem>
    {/* Data Privacy Statement */}
    {statement.map(
      ({ subheadline, text, listing, textAfterListing }, index) => (
        <DataPrivacyBlock
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          subheadline={subheadline}
          listing={listing}
          text={text}
          textAfterListing={textAfterListing}
        />
      )
    )}
  </Section>
);

export const query = graphql`
  query {
    datenschutzPageJson {
      seoTitle
      headline
      intro
      statement {
        subheadline
        text {
          blocks {
            key
            text
            inlineStyleRanges {
              offset
              length
              style
            }
          }
        }
        listing {
          bulletpoint {
            blocks {
              key
              text
              inlineStyleRanges {
                offset
                length
                style
              }
            }
          }
        }
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
      }
    }
  }
`;

export default DatenschutzPage;
