/* eslint-disable max-len */
// external imports
import React from 'react';
// data imports
import { navigationData } from 'data/navigationData';
// pieces imports
// eslint-disable-next-line max-len
import { MotionOverlayContainer } from 'pieces/animations/overlays/navigation/motionOverlayContainer';
import { MotionSubLink } from 'pieces/animations/overlays/navigation/MotionSubLink';
import { MotionLink } from 'pieces/animations/overlays/navigation/MotionLink';
import { MotionLinkContainer } from 'pieces/animations/overlays/navigation/MotionLinkContainer';
import { MotionSubLinkContainer } from 'pieces/animations/overlays/navigation/MotionSubLinkContainer';
import { Heading } from 'pieces';

export const NavigationOverlay = ({ NavigationLink, BackButton }) => (
  <MotionOverlayContainer>
    <MotionLinkContainer
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
      {navigationData.map(link => {
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
      {/* <NavigationFooter sx={{ width: '100vw', marginLeft: '-28px' }} /> */}
    </MotionLinkContainer>
    {/*  Opens when SubLink is clicked  */}
    <MotionSubLinkContainer
      sx={{
        flexDirection: 'column',
        width: '100%',
        position: 'absolute',
        paddingTop: '10vw',
      }}
      NavigationLink={NavigationLink}
      BackButton={BackButton}
      data={navigationData}
    >
      {/* <NavigationFooter sx={{ width: '100vw', marginLeft: '-28px' }} /> */}
    </MotionSubLinkContainer>
  </MotionOverlayContainer>
);
