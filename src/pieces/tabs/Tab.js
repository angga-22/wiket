import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTabsContext } from './TabsContext';

export const Tab = ({ id, title, children }) => {
  const { registerTab, activeTab } = useTabsContext();
  useEffect(() => {
    registerTab({ id, title });
  }, []);

  return (
    // Only return content if tab is active
    <>{activeTab.id === id && children}</>
  );
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};
