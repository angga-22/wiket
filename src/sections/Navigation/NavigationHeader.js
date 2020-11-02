// External dependencies
import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Pieces imports
import { GridWrapper, GridItem, FlexWrapper, Box, Image } from 'pieces';
import {
  SimpleNavigationIcon,
  SimpleNavigationLogo,
} from 'pieces/navigation/simple';
// Local imports
import { DesktopNavigationLinks } from './DesktopNavigationLinks';

export const NavigationHeader = memo(() => {
  // Data
  const { logo, openIcon, closeIcon } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "company/company-logo.svg" }) {
        id
        publicURL
      }
      openIcon: file(relativePath: { eq: "icons/menu-icon.svg" }) {
        id
        publicURL
      }
      closeIcon: file(relativePath: { eq: "icons/close-icon.svg" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <>
      <GridWrapper
        className='navigation--wrapper'
        sx={{ bg: 'background' }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0 } }}
        initial={{ opacity: 0 }}
      >
        <GridItem
          as='nav'
          sx={{
            height: ['60px', '60px', '60px', '60px', '70px'],
            gridRow: '1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SimpleNavigationLogo
            Logo={props => (
              <Image
                sx={{
                  height: ['20px', '20px', '20px', '20px', '25px'],
                  alignSelf: 'center',
                }}
                src={logo.publicURL}
                {...props}
              />
            )}
          />
          {/* Mobile Navigtion Bar */}
          {/* Open Close Icons */}
          <FlexWrapper
            className='navigation--open-close-icons'
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              display: ['flex', 'flex', 'flex', 'flex', 'none'],
              height: '100%',
            }}
          >
            <SimpleNavigationIcon
              OpenIcon={() => (
                <Box
                  sx={{
                    alignSelf: 'center',
                    p: [
                      '20px 40px 20px 20px',
                      '20px 40px 20px 40px',
                      '20px 40px 20px 40px',
                      '20px 40px 20px 40px',
                    ],
                    mr: '-40px',
                  }}
                >
                  <Image
                    sx={{
                      color: 'primary',
                      height: ['20px', '20px', '30px', '30px'],
                    }}
                    src={openIcon.publicURL}
                  />
                </Box>
              )}
              CloseIcon={() => (
                <Box
                  sx={{
                    alignSelf: 'center',
                    p: [
                      '20px 40px 20px 20px',
                      '20px 40px 20px 40px',
                      '20px 40px 20px 40px',
                      '20px 40px 20px 40px',
                    ],
                    mr: '-40px',
                  }}
                >
                  <Image
                    sx={{
                      height: ['20px', '20px', '30px', '30px'],
                    }}
                    src={closeIcon.publicURL}
                  />
                </Box>
              )}
            />
          </FlexWrapper>
          {/* Desktop Navigation Links */}
          <DesktopNavigationLinks />
        </GridItem>
      </GridWrapper>
    </>
  );
});
