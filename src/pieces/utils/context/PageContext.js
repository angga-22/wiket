import React, { createContext, useContext } from 'react';

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
