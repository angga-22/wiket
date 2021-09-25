// pieces
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Section,
  GridItem,
  Paragraph,
  srcsetValues,
} from '@thepuzzlers/pieces';
import { NavigationLink } from 'pieces';

import batikFooterPhone from 'assets/svg/footer-background-phone.svg';
import batikFooterPhoneXl from 'assets/svg/footer-background-phoneXl.svg';
import batikFooterTabletPortrait from 'assets/svg/footer-background-tabletPortrait.svg';
import batikFooterPhoneLandscape from 'assets/svg/footer-background-phoneLandscape.svg';
import batikFooterTabletLandscape from 'assets/svg/footer-background-tabletLandscape.svg';
import batikFooterDesktop from 'assets/svg/footer-background-desktop.svg';
import logoWiketWhite from 'assets/svg/logo-wiket-white.svg';

const useFooterLinks = () => {
  const data = useStaticQuery(graphql`
    {
      allNavJson {
        nodes {
          footer {
            dataPolicy {
              title
              to
            }
            legal {
              title
              to
            }
          }
        }
      }
    }
  `);
  const links = data.allNavJson.nodes[0];
  return links;
};

export const Footer = () => {
  const links = useFooterLinks();

  return (
    <Section
      id='header-section'
      sx={{
        backgroundColor: 'primary',
      }}
    >
      <GridItem variant='fullWidth'>
        <BackgroundImage />
      </GridItem>
      <Logo />
      <FooterLink
        to={links.footer.legal.to}
        title={links.footer.legal.title}
        gridColumn={[
          '3 / span 4',
          '5 / span 2',
          '1 / span 4',
          '1 /  span 5',
          '1 /  span 5',
          '1 /  span 4',
        ]}
        ml={['1em', '-.5em', 0, 0, 0, 0]}
      />
      <FooterLink
        to={links.footer.dataPolicy.to}
        title={links.footer.dataPolicy.title}
        gridColumn={[
          '8 / span 4',
          '8 / span 2',
          '5 / span 4',
          '5 /  span 3',
          '4 /  span 2',
          '3 /  span 2',
        ]}
        ml={['.5em', '-.5em', '-.5em', '-1.5em', 0, 0]}
      />
      <FooterParagraph />
    </Section>
  );
};

const BackgroundImage = () => (
  <GridItem>
    <picture>
      <source media={srcsetValues[4]} srcSet={batikFooterDesktop} />
      <source media={srcsetValues[3]} srcSet={batikFooterTabletLandscape} />
      <source media={srcsetValues[2]} srcSet={batikFooterPhoneLandscape} />
      <source media={srcsetValues[1]} srcSet={batikFooterTabletPortrait} />
      <source media={srcsetValues[0]} srcSet={batikFooterPhoneXl} />
      <img src={batikFooterPhone} alt='batik-shape' sx={{ width: '100%' }} />
    </picture>
  </GridItem>
);

const Logo = () => (
  <GridItem
    sx={{
      gridColumn: [
        '5 / span 4',
        '6 / span 3',
        '1 / span 5',
        '1 / span 5',
        '1 / span 4',
        '1 / span 3',
      ],
      gridRow: ['3/4', '3/4', '2/3', '2/3', '2/3', '2/3'],
      paddingTop: ['2.5em', '2.5em', '3.5em', '4.5em', '4em', '6em'],
      paddingBottom: ['1.5em', '1em', '0', '0', '1em', '0'],
      marginLeft: [0, '-1em', '0', '0', '0', '0'],
    }}
  >
    <picture>
      <source srcSet={logoWiketWhite} />
      <img
        src={logoWiketWhite}
        alt='batik-shape'
        sx={{
          width: ['100%', '80%', '90%', '70%', '90%', '90%'],
        }}
      />
    </picture>
  </GridItem>
);

const FooterLink = ({ gridColumn, to, title, ml }) => (
  <GridItem
    sx={{
      ml,
      gridColumn,
      gridRow: ['4/5', '4/5', '3/4', '3/4', '3/4', '3/4'],
      paddingBottom: ['3em', '3em', '3em', '2em', '4em', '4em'],
      transform: [
        0,
        0,
        'translateY(-20%)',
        'translateY(-20%)',
        'translateY(-20%)',
        'translateY(-20%)',
      ],
      color: 'textNegative',
    }}
  >
    <NavigationLink to={to}>
      <Paragraph type='footerLink'>{title}</Paragraph>
    </NavigationLink>
  </GridItem>
);

const FooterParagraph = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 13',
        '3 / 11',
        '14 /  25',
        '15 /  25',
        '16 /  25',
        '16 /  25',
      ],
      gridRow: '2/3',
      paddingTop: ['3em', '3em', '3em', '2em', '2em', '2em'],
    }}
  >
    <Paragraph
      type='footerParagraph'
      sx={{
        textAlign: ['center', 'center', 'right', 'right', 'right', 'right'],
      }}
    >
      Where like-minded businesses
      <Paragraph
        type='footerParagraph'
        as='span'
        variant='bold'
        sx={{ color: 'secondary' }}
      >
        {' '}
        connect
      </Paragraph>
    </Paragraph>
  </GridItem>
);
