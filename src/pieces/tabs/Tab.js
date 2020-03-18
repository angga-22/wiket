import React, { useEffect } from 'react';
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
