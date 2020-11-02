import React from 'react';
import { usePageContext } from 'pieces/utils/context';
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { FlexWrapper } from 'pieces';
import { motion } from 'framer-motion';
import { useSimpleNavigationContext } from './SimpleNavigationContext';

export const SimpleNavigationIcon = ({ OpenIcon, CloseIcon, ...props }) => {
  const {
    openNavigation,
    closeNavigation,
    isOpen,
    openIconControls,
    closeIconControls,
  } = useSimpleNavigationContext();
  const { body, currentScroll } = usePageContext();

  return (
    <FlexWrapper
      as={motion.a}
      onClick={() => {
        lockOrReleaseBody({
          animation: isOpen.get() ? closeNavigation : openNavigation,
          isOpen,
          body,
          currentScroll,
        });
      }}
      {...props}
    >
      <FlexWrapper sx={{ cursor: 'pointer' }} animate={openIconControls}>
        <OpenIcon />
      </FlexWrapper>
      <FlexWrapper
        sx={{ cursor: 'pointer' }}
        animate={closeIconControls}
        style={{ display: 'none' }}
      >
        <CloseIcon />
      </FlexWrapper>
    </FlexWrapper>
  );
};
