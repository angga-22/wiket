// external dependencies
import React from 'react';
// pieces components
import { Box } from 'pieces/box';
import { FlexWrapper } from 'pieces/flex';
import { useTabsContext } from './TabsContext';
import { withTabsContext } from './withTabsContext';

const Tabs = ({ children, Tab = { Box }, TabContainer = FlexWrapper }) => {
  const { tabs, activeTab, onClick } = useTabsContext();

  return (
    <>
      <TabContainer sx={{ alignItems: 'flex-end' }}>
        {tabs.map(tab => (
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

const TabsWithContext = withTabsContext(Tabs);
export { TabsWithContext as Tabs };
