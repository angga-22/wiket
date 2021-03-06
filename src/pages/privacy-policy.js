import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Section, Heading, Paragraph } from '@thepuzzlers/pieces';
// Local imports
import { SEO } from 'pieces';
import {
  LegalPageGridItem,
  LegalHeaderBlock,
  DataPrivacyBlock,
} from 'pieces/blocks';

const PrivacyPolicyPage = ({
  data: {
    privacyPolicyJson: { seoTitle, headline, intro, statement },
    businessInfoJson: {
      legal: { headOfCompany, address, company },
    },
  },
}) => (
  <Section sx={{ wordWrap: 'anywhere', overflow: 'hidden' }}>
    <SEO title={seoTitle} description={`Privacy policy of ${company}.`} />
    <LegalHeaderBlock headline={`${headline} ${company}`} introText={intro} />
    {/* Responsible Person and Business Info */}
    <LegalPageGridItem>
      <Heading type='h3' sx={{ lineHeight: '1.15' }}>
        Name and contact details of the responsible body
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
      <Paragraph>represented by: {headOfCompany}</Paragraph>
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

PrivacyPolicyPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query {
    privacyPolicyJson {
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
        # textAfterListing
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

export default PrivacyPolicyPage;
