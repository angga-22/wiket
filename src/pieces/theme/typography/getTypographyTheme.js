// Client import
import { fontFamilies } from 'gatsby-plugin-theme-ui/fontFamilies';
import { getFontSizes } from './getFontSizes';

export const getTypographyStyles = ({ typographySetup }) => {
  // return all of the variants for the client theme
  const typography = {};
  // tag = each HTML tag within the setup e.g h1
  Object.keys(typographySetup).forEach(tag => {
    // will hold the different variants for normal, bold, italic...
    typography[tag] = {};
    // fontFamilies will give us the actual 'weight' for each style
    // fontFamilies also tell us what kind of 'weights' are requested
    Object.keys(fontFamilies[typographySetup[tag].fontFamily]).forEach(
      family => {
        const {
          fontFamily,
          lineHeight,
          factor,
          fontSizes,
          ...rest
        } = typographySetup[tag];
        // computing e.g typography.h1.bold
        typography[tag][family] = {
          fontFamily: `${fontFamily}.${family}`,
          lineHeight,
          fontSize: getFontSizes({
            factor,
            sizes: fontSizes,
          }),
          ...rest,
        };
      }
    );
  });

  return typography;
};
