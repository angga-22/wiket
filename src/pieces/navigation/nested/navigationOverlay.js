// external imports
import React from 'react';
import PropTypes from 'prop-types';
// data imports
import navigationData from 'data/nav.json';
// pieces imports
import { Heading } from '@thepuzzlers/pieces';
import { MotionOverlayContainer } from './motionHelpers/motionOverlayContainer';
import { MotionSubLink } from './motionHelpers/motionSubLink';
import { MotionLink } from './motionHelpers/motionLink';
import { MotionLinkContainer } from './motionHelpers/motionLinkContainer';
import { MotionSubLinkContainer } from './motionHelpers/motionSubLinkContainer';

export const NavigationOverlay = ({ NavigationLink, BackButton }) => (
  <MotionOverlayContainer>
    <MotionLinkContainer
      className='navigation--motion-link-container'
      sx={{
        flexDirection: 'column',
        width: '100%',
        position: 'absolute',
        paddingTop: '10vw',
      }}
    >
      <Heading as='h2' sx={{ marginBottom: '10vw' }}>
        Hauptnavigation.
      </Heading>
      {navigationData[0].nav.map((link) => {
        if (!link.subpages || link.subpages.length === 0) {
          return (
            // NavigationLink -> Open Page
            <MotionLink key={link.id} href={link.href}>
              <NavigationLink link={link} />
            </MotionLink>
          );
        }
        return (
          // NavigationSubLink -> Open SubMenu
          <MotionSubLink key={link.id} link={link}>
            <NavigationLink link={link} />
          </MotionSubLink>
        );
      })}
    </MotionLinkContainer>
    {/*  Opens when SubLink is clicked  */}
    <MotionSubLinkContainer
      sx={{
        flexDirection: 'column',
        width: '100%',
        position: 'absolute',
        paddingTop: '10vw',
        paddingBottom: '10vw',
      }}
      NavigationLink={NavigationLink}
      BackButton={BackButton}
      data={navigationData}
    />
  </MotionOverlayContainer>
);

NavigationOverlay.propTypes = {
  NavigationLink: PropTypes.func.isRequired,
  BackButton: PropTypes.func.isRequired,
};
