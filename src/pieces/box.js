// eslint-disable mport/no-extraneous-dependencies
// external dependencies
import styled from '@emotion/styled';
import { css, get } from '@theme-ui/css';
import space from '@styled-system/space';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import color from '@styled-system/color';
import { motion, isValidMotionProp } from 'framer-motion';

const dontPassStyledSystemPropsToHTML = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames,
]);
// currying
// sx is always called by the higher component
// when a user wants to use the component and wants to change something
const sx = props => css(props.sx)(props.theme);
// base is always used on the component creation and not higher up
const base = props => css(props.__css)(props.theme);
// looks up a variant within the theme and in variants by default
/*eslint-disable */
const variant = ({ theme, variant, __themeKey = 'variants' }) =>
  css(get(theme, __themeKey + '.' + variant, get(theme, variant)));
/* eslint-enable */

export const Box = styled(motion.div, {
  shouldForwardProp: prop => {
    if (isValidMotionProp(prop)) return true;
    return dontPassStyledSystemPropsToHTML(prop);
  },
})`
  ${base};
  ${variant};
  ${space};
  ${color};
  ${sx};
  ${props => props.css};
`;
