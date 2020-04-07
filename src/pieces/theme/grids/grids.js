import {
  getGridPaddings,
  getFullWidthItemMinusMargin,
} from './getGridPaddings';
import { getGridTemplateColumns } from './getGridTemplateColumns';

const proportionalPaddings = getGridPaddings({
  factor: [2.5, 1.5, 2.5, 2.5, 2.5],
  offsets: [10, 5, 15, 25, 25],
});

export const fullWidthLeftMinusMargins = getFullWidthItemMinusMargin({
  factor: [2.5, 1.5, 2.5, 2.5, 2.5],
  offsets: [10, 5, 15, 25, 25],
});

const templateColumns = getGridTemplateColumns({
  columns: [12, 12, 24, 24, 24],
});

export const grids = {
  proportional: {
    wrapper: {
      gridColumnGap: '1vw',
      padding: proportionalPaddings,
      gridTemplateColumns: templateColumns,
    },
  },
  artwork: {
    gridTemplateColumns: templateColumns,
    gridColumn: ['1/13', '1/13', '1/25', '1/25', '1/25'],
  },
};
