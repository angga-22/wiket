/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import { pixelValues } from '../breakpoints';

export const getGridAutoLayout = ({
  totalColumsPerBreakpoint,
  offsets,
  gaps,
  factor,
}) => {
  const autoLayout = totalColumsPerBreakpoint.map(
    (columns, index) => `
  calc(
    (
      (
          100vw -
            (2 * (${offsets[index]}px + ((100vw - (${
      pixelValues[index]
    }px + (100vw - ${pixelValues[index]}px) / ${factor[index]})) / 2))) -
            (${columns - 1} * ${gaps[index]})
        ) / ${columns}
    )
  )`
  );
  return autoLayout;
};
