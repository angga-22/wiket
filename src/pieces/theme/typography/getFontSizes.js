/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import { pixelValues } from 'pieces/theme/breakpoints';

export const getFontSizes = ({ factor, sizes }) => {
  const fontSizes = sizes.map(
    (size, i) =>
      `calc(${size}px + ((100vw - ${pixelValues[i]}px) * ${size} / ${factor} / ${pixelValues[i]}))`
  );
  return fontSizes;
};
