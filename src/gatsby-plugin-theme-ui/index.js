// pieces import
import { breakpoints, typography, grids, lineHeights } from 'pieces/theme';
// client imports
import { fontFamilies } from './fontFamilies';
import { colors } from './colors';
import { elements } from './elements';
import { animations } from './animations';
import { styles } from './styles';
import { forms } from './forms';
import { tabs } from './tabs';
import { layouts } from './layouts';
import { space } from './space';

export default {
  // ////
  // pieces imports
  // ////
  breakpoints,
  fonts: fontFamilies,
  typography,
  lineHeights,
  grids,
  forms,
  tabs,
  animations,
  ...styles,
  layouts,
  space,
  colors,
  ...elements,
  measure: {
    // fallback will force the gridItem to expand across the full width of the gridWrapper
    gridColumnFallback: {
      gridColumn: ['1/13', '1/13', '1/25', '1/25', '1/25'],
    },
    // custom presets for gridItems to expand across a certain width
    wide: {
      gridColumnStart: ['1'],
      gridColumnEnd: ['13', 'span 7', 'span 14', 'span 11', 'span 9'],
    },
    normal: {
      gridColumnStart: ['1'],
      gridColumnEnd: ['span 11', 'span 6', 'span 12', 'span 10', 'span 7'],
    },
    narrow: {
      gridColumnStart: ['1'],
      gridColumnEnd: ['span 10', 'span 5', 'span 10', 'span 9', 'span 5'],
    },
  },
  styles: {
    root: {
      fontFamily: 'body.normal',
      color: 'text',
    },
  },
};
