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
      gridColumn: ['5 / 9', '5 / 9', '1 /  6', '1 /  5', '1 /  5', '1 /  4'],
      transform: [
        'translateY(0%)',
        'translateY(0%)',
        'translateY(-200%)',
        'translateY(-250%)',
        'translateY(-210%)',
        'translateY(-290%)',
      ],
    }}
  >
    <picture>
      <source srcSet={logoWiketWhite} />
      <img
        src={logoWiketWhite}
        alt='batik-shape'
        sx={{
          width: '100%',
          mt: [null, null, '0', '0'],
          mb: ['24px', '24px', '0', '0'],
        }}
      />
    </picture>
  </GridItem>
);

const BackgroundImage = () => (
  <GridItem
    variant='fullWidth'
    sx={{
      maxWidth: '100%',
      mb: ['72px', '69px', '48px', '25px', '70px', '70px'],
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
        '2 / 12',
        '3 / 11',
        '14 /  25',
        '15 /  25',
        '16 /  25',
        '16 /  25',
      ],
      transform: [
        'translateY(0%)',
        'translateY(0%)',
        'translateY(0%)',
        'translateY(0%)',
        'translateY(0%)',
        'translateY(0%)',
      ],
    }}
  >
    <Paragraph
      type='footerParagraph'
      sx={{
        color: '#fff',
        textAlign: ['center', 'center', 'right', 'right', 'right', 'right'],
        mb: ['45px', '58px', '0', '0', '0'],
      }}
    >
      Where like-minded businesses
      <Text sx={{ color: '#FDA700', fontWeight: 'bold' }}>connect</Text>
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
      transform: [
        'translateY(0%)',
        'translateY(0%)',
        'translateY(-300%)',
        'translateY(-300%)',
        'translateY(-400%)',
        'translateY(-370%)',
      ],
    }}
  >
    <Paragraph
      type='smallParagraph'
      variant='lighter'
      sx={{
        color: '#fff',
      }}
    >
      Legal Notes
    </Paragraph>
    <Paragraph
      type='smallParagraph'
      variant='lighter'
      sx={{
        color: '#fff',
      }}
    >
      Privacy
    </Paragraph>
  </GridItem>
);
