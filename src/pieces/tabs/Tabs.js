// external dependencies
import React from 'react';
import PropTypes from 'prop-types';
// pieces components
import { Box, FlexWrapper } from 'pieces';
import { useTabsContext } from './TabsContext';
import { withTabsContext } from './withTabsContext';

const Tabs = ({ children, Tab = Box, TabContainer = FlexWrapper }) => {
  const { tabs, activeTab, onClick } = useTabsContext();

  return (
    <>
      <TabContainer sx={{ alignItems: 'flex-end' }}>
        {tabs.map((tab) => (
          <Tab
            onClick={onClick(tab)}
            key={tab.id}
            id={tab.id}
            isActive={activeTab.id === tab.id}
          >
            {tab.title}
          </Tab>
        ))}
      </TabContainer>
      {children}
    </>
  );
};

Tabs.propTypes = {
  children: PropTypes.func.isRequired,
  Tab: PropTypes.func,
  TabContainer: PropTypes.func,
};

Tabs.defaultProps = {
  Tab: Box,
  TabContainer: FlexWrapper,
};

const TabsWithContext = withTabsContext(Tabs);
export { TabsWithContext as Tabs };
