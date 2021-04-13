import React from 'react';
import PropTypes from 'prop-types';
import { usePageContext } from 'pieces/utils/context';
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { FlexWrapper } from 'pieces';
import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-unresolved
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigationContext } from './navigationContext';

export const NavigationIcon = React.forwardRef(({ icon, ...props }, ref) => {
  const {
    openNavigation,
    closeNavigation,
    isOpen,
    openIconControls,
    closeIconControls,
  } = useNavigationContext();
  const { body, currentScroll } = usePageContext();

  return (
    <FlexWrapper
      ref={ref}
      as={motion.button}
      onClick={() => {
        if (isOpen.get()) {
          lockOrReleaseBody({
            animation: () => closeNavigation(),
            isOpen,
            body,
            currentScroll,
          });
        } else {
          lockOrReleaseBody({
            animation: () => openNavigation(),
            isOpen,
            body,
            currentScroll,
          });
        }
      }}
      {...props}
      __css={{
        appearance: 'none',
        border: 'none',
        backgroundColor: 'inherit',
      }}
    >
      <FlexWrapper animate={openIconControls}>
        <FontAwesomeIcon
          icon={icon.open}
          style={{
            width: '100%',
            height: '100%',
            color: 'inherit',
          }}
        />
      </FlexWrapper>
      <FlexWrapper animate={closeIconControls} style={{ display: 'none' }}>
        <FontAwesomeIcon
          icon={icon.close}
          style={{
            width: '100%',
            height: '100%',
            color: 'inherit',
          }}
        />
      </FlexWrapper>
    </FlexWrapper>
  );
});

NavigationIcon.propTypes = {
  icon: PropTypes.shape({
    open: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired,
  }).isRequired,
};
