import React from 'react';
import { Box } from '@thepuzzlers/pieces';

const ListItem = ({ children }) => (
  <Box sx={{ backgroundColor: 'antiquewhite' }}>{children}</Box>
);

export const SelectionList = () => (
  <div>
    <ListItem>First Item</ListItem>
    <ListItem>Second Item</ListItem>
    <ListItem>Third Item</ListItem>
  </div>
);
