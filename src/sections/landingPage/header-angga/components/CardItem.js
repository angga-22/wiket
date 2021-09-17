/** @jsx jsx */
import { jsx } from 'theme-ui';
// pieces
import { Box, Paragraph } from '@thepuzzlers/pieces';

const CardItem = ({ label, location, image }) => (
  <Box
    sx={{
      borderRadius: '12px',
      boxShadow: '0px 18px 24px rgba(0, 0, 0, 0.1)',
      p: '12px',
      backgroundColor: 'background',
    }}
  >
    <img
      src={image}
      width='100%'
      sx={{
        borderRadius: '8px',
      }}
      alt='content'
    />
    <Paragraph
      type='h6'
      variant='bold'
      sx={{
        color: 'primary',
        mt: '12px',
        mb: '5px',
      }}
    >
      {label}
    </Paragraph>
    <Paragraph
      type='smallParagraph'
      sx={{
        color: 'primary',
        fontWeight: 'lighter',
      }}
    >
      {location}
    </Paragraph>
  </Box>
);

export default CardItem;
