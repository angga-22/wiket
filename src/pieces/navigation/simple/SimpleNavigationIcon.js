import React from 'react';
import PropTypes from 'prop-types';
import { FlexWrapper } from '@thepuzzlers/pieces';
import { usePageContext } from 'pieces/utils/context';
import { lockOrReleaseBody } from 'pieces/utils/functions';
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

SimpleNavigationIcon.propTypes = {
  OpenIcon: PropTypes.func.isRequired,
  CloseIcon: PropTypes.func.isRequired,
};
