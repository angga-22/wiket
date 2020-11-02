/* eslint-disable operator-linebreak */
// External imports
import React, { useEffect } from 'react';
// Pieces imports
import { useNavigationContext } from 'pieces/navigation/navigationContext';
import { GridItem, FlexWrapper, Heading } from 'pieces';
import { MotionLink } from 'pieces/animations/overlays/navigation/MotionLink';

export const MotionSubLinkContainer = ({
  NavigationLink,
  data,
  BackButton,
  sx,
  children,
}) => {
  const {
    subLinkControls,
    variants,
    activeSubNavigation,
    closeSubNavigation,
    isOpen,
    controlSubLinks,
  } = useNavigationContext();

  const requestedSubLinks = data.find(
    ({ href }) => href === activeSubNavigation
  );

  useEffect(() => {
    // open navigation is only triggered when subNavigation is visible for user
    if (activeSubNavigation && isOpen.get()) {
      controlSubLinks.open();
    }
  }, [activeSubNavigation]);

  return (
    <GridItem
      className='sublinks--wrapper'
      variants={variants.linkContainer}
      initial={variants.linkContainer.disappear}
      animate={subLinkControls}
      sx={sx}
    >
      <FlexWrapper onClick={closeSubNavigation}>
        <BackButton />
        <Heading as='h2' sx={{ marginBottom: '10vw' }}>
          {requestedSubLinks !== undefined ? requestedSubLinks.title : ''}
        </Heading>
      </FlexWrapper>
      {activeSubNavigation &&
      requestedSubLinks &&
      requestedSubLinks.subpages ? (
        <>
          {requestedSubLinks.subpages.map(link => (
            <MotionLink key={link.id} href={link.href}>
              <NavigationLink link={link} />
            </MotionLink>
          ))}
          {children}
        </>
      ) : null}
    </GridItem>
  );
};
