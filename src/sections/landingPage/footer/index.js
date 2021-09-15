// pieces
/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import {
  Section,
  GridItem,
  Paragraph,
  srcsetValues,
} from '@thepuzzlers/pieces';
// import { srcsetValues } from '@thepuzzlers/pieces';
// import { StaticImage } from 'gatsby-plugin-image';
import batikFooterPhone from 'assets/svg/footer-background-phone.svg';
import batikFooterPhoneXl from 'assets/svg/footer-background-phoneXl.svg';
import batikFooterTabletPortrait from 'assets/svg/footer-background-tabletPortrait.svg';
import batikFooterPhoneLandscape from 'assets/svg/footer-background-phoneLandscape.svg';
import batikFooterTabletLandscape from 'assets/svg/footer-background-tabletLandscape.svg';
import batikFooterDesktop from 'assets/svg/footer-background-desktop.svg';
import logoWiketWhite from 'assets/svg/logo-wiket-white.svg';

const Footer = () => (
  <Section
    id='header-section'
    sx={{
      mt: '10vw',
      backgroundColor: 'accentSecondary',
    }}
  >
    <BackgroundImage />
    <FooterParagraph />
    <Logo />
    <FooterNav />
  </Section>
);

export default Footer;

const Logo = () => (
  <GridItem
    sx={{
      gridColumn: ['5 / 9', '5 / 9', '1 /  5', '1 /  5', '1 /  4', '1 /  4'],
      mb: ['24px', '16px'],
    }}
  >
    <picture>
      <source srcSet={logoWiketWhite} />
      <img src={logoWiketWhite} alt='batik-shape' />
    </picture>
  </GridItem>
);

const BackgroundImage = () => (
  <GridItem
    variant='fullWidth'
    sx={{
      maxWidth: '100%',
      mb: ['64px', '50px', '50px', '30px', '36px', '73px'],
    }}
  >
    <picture>
      <source media={srcsetValues[4]} srcSet={batikFooterDesktop} />
      <source media={srcsetValues[3]} srcSet={batikFooterTabletLandscape} />
      <source media={srcsetValues[2]} srcSet={batikFooterPhoneLandscape} />
      <source media={srcsetValues[1]} srcSet={batikFooterTabletPortrait} />
      <source media={srcsetValues[0]} srcSet={batikFooterPhoneXl} />
      <img src={batikFooterPhone} alt='batik-shape' sx={{ width: '100vw' }} />
    </picture>
  </GridItem>
);

const FooterParagraph = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 13',
        '2 / 12',
        '14 /  25',
        '15 /  25',
        '16 /  25',
        '18 /  25',
      ],
      transform: [
        'translateY(0%)',
        'translateY(0%)',
        'translateY(80%)',
        'translateY(80%)',
        'translateY(70%)',
        'translateY(90%)',
      ],
    }}
  >
    <Paragraph
      type='footerParagraph'
      variant='bold'
      sx={{
        color: '#fff',
        textAlign: ['center', 'center', 'right', 'right', 'right', 'right'],
        mb: ['70px', '61px', '0', '0', '0'],
      }}
    >
      Where
      <Text sx={{ color: '#FDA700' }}> like-minded </Text>
      businesses conntect
    </Paragraph>
  </GridItem>
);

const FooterNav = () => (
  <GridItem
    sx={{
      gridColumn: ['3 / 11', '4 / 10', '1 /  7', '1 /  6', '1 /  5', '1 /  5'],
      mb: ['43px'],
      display: 'flex',
      justifyContent: [
        'space-around',
        'space-around',
        'space-between',
        'space-between',
        'space-between',
      ],
    }}
  >
    <Text
      type='smallParagraph'
      variant='lighter'
      sx={{
        color: '#fff',
      }}
    >
      Legal Notes
    </Text>
    <Text
      type='smallParagraph'
      variant='lighter'
      sx={{
        color: '#fff',
      }}
    >
      Privacy
    </Text>
  </GridItem>
);
