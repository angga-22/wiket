import React from 'react';
import { TabsProvider } from './TabsContext';

// Wraps TabsContext around component with an HIC pattern
function withTabsContext(Component) {
  const withTabsContextFunc = ({ activeTab, ...props }) => (
    <TabsProvider activeTab={activeTab}>
      <Component {...props} />
    </TabsProvider>
  );
  return withTabsContextFunc;
}

export { withTabsContext };
