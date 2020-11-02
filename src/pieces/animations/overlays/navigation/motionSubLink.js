/* eslint-disable max-len */
// External imports
import React from 'react';
// Pieces imports
import { GridItem } from 'pieces';
import { useNavigationContext } from 'pieces/navigation/navigationContext';

export const MotionSubLink = ({ link, children }) => {
  const { variants, openSubNavigation } = useNavigationContext();
  return (
    <GridItem
      className='overlay--items'
      variants={variants.linkItems}
      initial={variants.linkItems.disappear}
      onClick={() => {
        openSubNavigation(link.href);
      }}
    >
      {children}
    </GridItem>
  );
};
