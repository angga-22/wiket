import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Pieces Imports
import { usePageContext } from 'pieces/utils/context';
import { FlexWrapper, Paragraph, Image } from 'pieces';

export const ThePuzzlersLink = () => {
  const { locale } = usePageContext();
  const { puzzlersLogo } = useStaticQuery(graphql`
    query {
      puzzlersLogo: file(relativePath: { eq: "puzzlers-logo.svg" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <a
      href={
        locale === 'de'
          ? 'https://thepuzzlers.io/de/'
          : 'https://thepuzzlers.io/'
      }
      style={{ cursor: 'pointer' }}
    >
      <FlexWrapper sx={{ flexDirection: 'column' }}>
        <Paragraph sx={{ textAlign: 'left' }}>
          {locale === 'de' ? 'Eine Webseite von' : 'A website by'}
        </Paragraph>

        <Image
          sx={{
            height: ['30px', '30px'],
          }}
          src={puzzlersLogo.publicURL}
          alt='Logo of The Puzzles'
        />
      </FlexWrapper>
    </a>
  );
};
