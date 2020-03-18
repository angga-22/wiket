/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import { pixelValues } from 'pieces/theme/breakpoints';

export const getGridPaddings = ({ factor, offsets }) => {
  const paddings = offsets.map(
    (offset, i) =>
      `0 calc(${offset}px + ((100vw - (${pixelValues[i]}px + (100vw - ${pixelValues[i]}px) / ${factor[i]})) / 2))`
  );
  return paddings;
};
