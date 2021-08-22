// pieces import
import { merge } from 'theme-ui';
import {
  theme as defaultTheme,
  getFluidTypographyStyles,
} from '@thepuzzlers/pieces';
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
import { space } from './space';
import { typographyConfig, lineHeights } from './typographyConfig';

const { breakpoints, grids, measure } = defaultTheme;

const typography = getFluidTypographyStyles({ typographyConfig, fontFamilies });
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
  grids,
  measure,
  fonts: fontFamilies,
  typography: customTypography,
  lineHeights,
  forms,
  tabs,
  animations,
  ...styles,
  layouts,
  space,
  blocks,
  colors,
  ...elements,
  styles: {
    root: {
      fontFamily: 'body.normal',
      color: 'text',
      bg: 'background',
    },
  },
};
