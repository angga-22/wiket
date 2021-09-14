import {
  theme as initialTheme,
  getFluidTypographyStyles,
} from '@thepuzzlers/pieces';
import { merge } from 'theme-ui';
// client imports
import { fontFamilies } from './fonts/fontFamilies';
import { colors } from './colors';
import { elements } from './elements';
import { animations } from './animations';
import { styles } from './styles';
import { forms } from './forms';
import { typographySetup, lineHeights } from './typographyConfig';

const typography = getFluidTypographyStyles({ typographySetup, fontFamilies });
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

const theme = {
  // pieces styles
  breakpoints: initialTheme.breakpoints,
  measure: initialTheme.measure,
  grids: initialTheme.grids,
  // local styles
  typography: customTypography,
  fonts: fontFamilies,
  lineHeights,
  forms,
  animations,
  ...styles,
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

export default theme;
