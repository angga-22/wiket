// pieces import
import { merge } from 'theme-ui';
import { breakpoints, typography, grids, lineHeights } from 'pieces/theme';
// client imports
import { fontFamilies } from './fontFamilies';
import { blocks } from './blocks';
import { colors } from './colors';
import { elements } from './elements';
import { animations } from './animations';
import { styles } from './styles';
import { forms } from './forms';
import { tabs } from './tabs';
import { layouts } from './layouts';
import { measure } from './measure';
import { space } from './space';

const customTypography = merge(typography, {
  // h1: {
  //   bold: {
  //     color: 'primary',
  //   },
  // normal: {
  //   color: 'primary',
  // },
  // },
  // primary: {
  // color: 'primary'
  // }
});

export default {
  // ////
  // pieces imports
  // ////
  breakpoints,
  fonts: fontFamilies,
  typography: customTypography,
  lineHeights,
  grids,
  forms,
  tabs,
  animations,
  ...styles,
  layouts,
  space,
  blocks,
  colors,
  ...elements,
  measure,
  styles: {
    root: {
      fontFamily: 'body.normal',
      color: 'text',
      bg: 'background',
    },
  },
};
