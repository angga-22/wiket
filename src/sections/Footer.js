// external dependencies
import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// pieces components
import { usePageContext } from 'pieces/utils/context';
import { Section } from 'pieces/layout';
import { Image, GatsbyLink } from 'pieces/elements';
import { GridItem } from 'pieces/grid';
import { Box } from 'pieces/box';

export const Footer = memo(() => {
  const { locale } = usePageContext();
  const {
    navJson: {
      footer: { links },
    },
    goodCodeFromBerlin,
    puzzlersLogo,
  } = useStaticQuery(graphql`
    query {
      navJson {
        footer {
          links {
            title
            to
          }
        }
      }
      goodCodeFromBerlin: file(relativePath: { eq: "goodCodeFromBerlin.svg" }) {
        id
        publicURL
      }
      puzzlersLogo: file(relativePath: { eq: "puzzlers-logo.svg" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <Section as='footer' sx={{ mb: ['20vw', '10vw', '0', '0'] }}>
      <GridItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row', 'row', 'row'],
          alignItems: 'center',
          margin: ['10vw 0 4vw', '4vw 0', '4vw 0', '3vw 0', '2vw 0'],
        }}
      >
        {/* Loop through Footer Links */}
        {links.map(link => (
          <GatsbyLink key={link.to} to={link.to} variant='footer'>
            {link.title}
          </GatsbyLink>
        ))}
        <Box>
          <Image
            src={goodCodeFromBerlin.publicURL}
            alt='Good Code From Berlin'
          />
        </Box>
        <a
          href={
            locale === 'de'
              ? 'https://thepuzzlers.io/de/'
              : 'https://thepuzzlers.io/'
          }
          style={{ cursor: 'pointer' }}
        >
          <Image
            sx={{
              height: ['20px'],
            }}
            src={puzzlersLogo.publicURL}
            alt='Logo of The Puzzles'
          />
        </a>
      </GridItem>
    </Section>
  );
});
