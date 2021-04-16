import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const TabsContext = createContext();

const useTabsContext = () => useContext(TabsContext);

const TabsProvider = ({ activeTab: initialActiveTab, children }) => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const registerTab = (newTab) => {
    let isNewTabFound;
    tabs.forEach((tab) => {
      if (tab.id === newTab.id) {
        isNewTabFound = true;
      }
    });

    if (!isNewTabFound) {
      setTabs((previousTabs) => [...previousTabs, newTab]);
    }
  };

  const onClick = (tab) => () => {
    setActiveTab(tab);
  };

  return (
    <TabsContext.Provider
      value={{
        tabs,
        activeTab,
        registerTab,
        onClick,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

TabsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export { TabsProvider, useTabsContext };
