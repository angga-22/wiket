import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { useViewportScroll, useMotionValue } from 'framer-motion';
import { getBody } from 'pieces/utils/functions';

const PageContext = createContext();
export const usePageContext = () => useContext(PageContext);

export const PageContextProvider = ({ children, locale }) => {
  const { scrollYProgress } = useViewportScroll();
  const body = getBody();
  const currentScroll = useMotionValue(0);

  return (
    <PageContext.Provider
      value={{
        locale,
        scrollYProgress,
        currentScroll,
        body,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

PageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.shape().isRequired,
};
