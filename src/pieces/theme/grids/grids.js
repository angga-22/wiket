import {
  getGridPaddings,
  getFullWidthItemMinusMargin,
} from './getGridPaddings';
import { getGridTemplateColumns } from './getGridTemplateColumns';
import { getGridAutoLayout } from './getGridAutoLayout';

const factor = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5];
const offsets = [11.5, 20, 40, 40, 40, 21];
const gaps = ['1.35vw', '1.5vw', '1.5vw', '.96vw', '.67vw', '1.07vw'];

const proportionalPaddings = getGridPaddings({
  factor,
  offsets,
});

export const fullWidthLeftMinusMargins = getFullWidthItemMinusMargin({
  factor,
  offsets,
});

const templateColumns = getGridTemplateColumns({
  totalColumsPerBreakpoint: [12, 12, 24, 24, 24, 24],
  factor,
  offsets,
  gaps,
});

const autoLayout = getGridAutoLayout({
  totalColumsPerBreakpoint: [12, 12, 24, 24, 24, 24],
  factor,
  offsets,
  gaps,
});

// Grid templates
const columns = {
  gridColumnGap: gaps,
  gridTemplateColumns: templateColumns,
};
const autoColumns = {
  gridColumnGap: gaps,
  gridAutoColumns: autoLayout,
};
const autoColumnsAndRows = {
  gridRowGap: gaps,
  gridColumnGap: gaps,
  gridAutoRows: autoLayout,
  gridAutoColumns: autoLayout,
};

export const grids = {
  // Proportional grids for outter-wrapper including padding
  proportional: {
    outside: {
      columns: {
        ...columns,
        padding: proportionalPaddings,
      },
      autoColumns: {
        ...autoColumns,
        padding: proportionalPaddings,
      },
      autoColumnsAndRows: {
        ...autoColumnsAndRows,
        padding: proportionalPaddings,
        gridAutoRows: autoLayout,
        gridAutoColumns: autoLayout,
      },
    },
    // Proportional grids for inner-wrapper without padding
    inside: {
      columns: {
        ...columns,
        padding: 0,
      },
      autoColumns: {
        ...autoColumns,
        padding: 0,
      },
      autoColumnsAndRows: {
        ...autoColumnsAndRows,
        padding: 0,
      },
    },
  },
  artwork: {
    gridTemplateColumns: templateColumns,
    gridColumn: ['1/13', '1/13', '1/15', '1/25', '1/25', '1/25'],
  },
};
