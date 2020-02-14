/** @jsx jsx */
import { jsx } from 'theme-ui';

export default ({ children }) => (
  <button
    type='submit'
    sx={{
      appearance: 'none',
      variant: 'buttons.primary',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      // this uses the value from `theme.space[4]`
      padding: 2,
      // these use values from `theme.colors`
      color: 'secondary',
      '&:hover': {
        color: 'primary',
        bg: 'secondary',
      },
    }}
  >
    {children}
  </button>
);
