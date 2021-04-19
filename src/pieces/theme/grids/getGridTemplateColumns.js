/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */

import { pixelValues } from '../breakpoints';

export const getGridTemplateColumns = ({
  totalColumsPerBreakpoint,
  offsets,
  gaps,
  factor,
}) => {
  const templateColumns = totalColumsPerBreakpoint.map(
    (columns, index) => `repeat(${columns}, 
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
  ))`
  );
  return templateColumns;
};
