/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import { pixelValues } from 'pieces/theme/breakpoints';

export const getGridPaddings = ({ factor, offsets }) => {
  const paddings = offsets.map(
    (offset, i) =>
      `0 ${getGridPadding({
        offset,
        factor: factor[i],
        pixelValue: pixelValues[i],
      })}`
  );
  return paddings;
};

const getGridPadding = ({ offset, pixelValue, factor }) =>
  `calc(${offset}px + ((100vw - (${pixelValue}px + (100vw - ${pixelValue}px) / ${factor})) / 2))`;

export const getFullWidthItemMinusMargin = ({ factor, offsets }) => {
  const leftMinusMargins = offsets.map(
    (offset, i) =>
      `calc(-1 * ${getGridPadding({
        offset,
        factor: factor[i],
        pixelValue: pixelValues[i],
      })})`
  );
  return leftMinusMargins;
};
