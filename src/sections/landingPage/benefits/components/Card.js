/** @jsx jsx */
import { jsx } from 'theme-ui';
// pieces
import { Box, Paragraph, Heading } from '@thepuzzlers/pieces';

const Card = ({ image, label, description }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: ['row', 'row', 'column', 'row', 'row', 'row'],
      alignItems: 'flex-start',
    }}
  >
    <img src={image} alt='content' />
    <Box
      sx={{
        ml: ['15px', '10px', '0', '1em', '1em', '1em'],
      }}
    >
      <Heading
        type='h4'
        variant='bold'
        sx={{
          color: 'accentSecondary',
        }}
      >
        {label}
        <span sx={{ color: 'orange' }}>.</span>
      </Heading>
      <Paragraph
        type='benefitParagraph'
        sx={{
          color: 'accentSecondary',

          mt: '10px',
        }}
      >
        {description}
      </Paragraph>
    </Box>
  </Box>
);
export default Card;
