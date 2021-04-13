// external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
// pieces imports
import { usePageContext } from 'pieces/utils/context';
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { useSimpleNavigationContext } from './SimpleNavigationContext';

export const SimpleNavigationLogo = ({ Logo }) => {
  const { closeNavigation, isOpen } = useSimpleNavigationContext();
  const { body, currentScroll, locale } = usePageContext();
  // Possible improvement:
  // accept Logo as childrens prop
  //   would require a React.cloneElement func to pass the onClick prop
  return (
    <Logo
      style={{ cursor: 'pointer' }}
      onClick={() => {
        navigate(locale === 'de' ? `/${locale}` : '/');
        if (isOpen.get()) {
          lockOrReleaseBody({
            animation: () => closeNavigation(),
            isOpen,
            body,
            currentScroll,
          });
        }
      }}
    />
  );
};

SimpleNavigationLogo.propTypes = {
  Logo: PropTypes.func.isRequired,
};
