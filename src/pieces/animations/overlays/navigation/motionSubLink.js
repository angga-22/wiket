/* eslint-disable max-len */
import React from 'react';
import { GridItem } from 'pieces/grid';
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
