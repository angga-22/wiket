// external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
// pieces imports
import { usePageContext } from 'pieces/utils/context';
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { useNavigationContext } from './navigationContext';

export const NavigationLogo = ({ Logo }) => {
  const { closeNavigation, isOpen } = useNavigationContext();
  const { body, currentScroll } = usePageContext();

  // Possible improvement:
  // accept Logo as childrens prop
  //   would require a React.cloneElement func to pass the onClick prop
  return (
    <Logo
      onClick={() => {
        navigate('/');
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

NavigationLogo.propTypes = {
  Logo: PropTypes.func.isRequired,
};
