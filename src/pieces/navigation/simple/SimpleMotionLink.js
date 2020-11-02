// external imports
import React from 'react';

// pieces imports
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { usePageContext } from 'pieces/utils/context';
// eslint-disable-next-line max-len
import { useSimpleNavigationContext } from 'pieces/navigation/simple/SimpleNavigationContext';
import { Box } from 'pieces';

export const SimpleMotionLink = ({ children }) => {
  const { body, currentScroll } = usePageContext();
  const { variants, closeNavigation, isOpen } = useSimpleNavigationContext();
  return (
    <Box
      className='overlay--items'
      onClick={() => {
        lockOrReleaseBody({
          animation: () => closeNavigation(),
          isOpen,
          body,
          currentScroll,
        });
      }}
      variants={variants && variants.linkItems}
      initial={variants && variants.linkItems && variants.linkItems.close}
    >
      {children}
    </Box>
  );
};
