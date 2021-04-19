import { textDefaultSpans } from 'gatsby-plugin-theme-ui/typographySetup';

export const getTextSpans = ({ element, type, spans }) => {
  const requestedSpans = [];
  textDefaultSpans[element][type].forEach((breakpoint, index) => {
    requestedSpans.push(breakpoint[spans[index]]);
  });
  return requestedSpans;
};
