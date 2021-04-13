/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */

export const getGridTemplateColumns = ({ columns }) => {
  const templateColumns = columns.map((column) => `repeat(${column}, 1fr)`);
  return templateColumns;
};
