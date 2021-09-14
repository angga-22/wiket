// pieces
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Section, GridItem, Paragraph, Button } from '@thepuzzlers/pieces';
import { StaticImage } from 'gatsby-plugin-image';
import { NavigationLink } from 'pieces/components/NavigationLink/NavigationLink';

export const Nav = () => (
  <Section
    id='navigation-section'
    sx={{
      height: '100px',
    }}
  >
    <Logo />
    <NavigationLinks />
    <GetStartedButton />
  </Section>
);

const Logo = () => (
  <GridItem
    sx={{
      gridColumn: ['5 / 9', '5 / 9', '1 /  5', '1 /  5', '1 /  4', '1 /  4'],
      alignSelf: 'center',
    }}
  >
    <Link to='/'>
      <StaticImage src='../../assets/png/logo-wiket-green.png' />
    </Link>
  </GridItem>
);

const NavigationLinks = () => {
  const data = useStaticQuery(graphql`
    query getNavData {
      nav: navJson {
        nav {
          title
          to
        }
      }
    }
  `);
  return (
    <GridItem
      sx={{
        gridColumn: [null, null, null, null, '10 / 21', '11 / 21'],
        display: ['none', 'none', 'none', 'none', 'flex', 'flex'],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
      }}
    >
      {data.nav.nav.map((el) => (
        <NavigationLink to={el.to}>
          <Paragraph
            variant='bold'
            type='paragraph'
            sx={{ color: 'accentSecondary' }}
          >
            {el.title}
          </Paragraph>
        </NavigationLink>
      ))}
    </GridItem>
  );
};

const GetStartedButton = () => (
  <GridItem
    sx={{
      gridColumn: [null, null, null, null, '22 / 25', '22/ 25'],
      alignSelf: 'center',
      display: ['none', 'none', 'none', 'none', 'flex', 'flex'],
    }}
  >
    <Button
      sx={{
        width: ['100%'],
        backgroundColor: 'buttonBackground',
      }}
    >
      <Paragraph
        type='paragraph'
        variant='bold'
        sx={{
          color: '#fff',
        }}
      >
        Get Started
      </Paragraph>
    </Button>
  </GridItem>
);
