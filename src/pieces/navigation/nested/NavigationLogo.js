// external dependencies
import React from 'react';
import { navigate } from 'gatsby';
// pieces imports
import { usePageContext } from 'pieces/utils/context';
import { lockOrReleaseBody } from 'pieces/utils/functions';
import { useNavigationContext } from 'pieces/navigation/navigationContext';

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
