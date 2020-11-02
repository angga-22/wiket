// external imports
import React from 'react';
import { Link as RouterLink } from 'gatsby';

// data imports
// pieces imports
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { usePageContext } from 'pieces/utils/context';
import { useNavigationContext } from 'pieces/navigation/navigationContext';
import { GridItem } from 'pieces';

export const MotionLink = ({ children, href }) => {
  const { body, currentScroll } = usePageContext();
  const { variants, closeNavigation, isOpen } = useNavigationContext();

  return (
    <GridItem
      className='overlay--items'
      onClick={() => {
        lockOrReleaseBody({
          animation: () => closeNavigation(),
          isOpen,
          body,
          currentScroll,
        });
      }}
      variants={variants.linkItems}
      initial={variants.linkItems.disappear}
    >
      <RouterLink to={href}>{children}</RouterLink>
    </GridItem>
  );
};
