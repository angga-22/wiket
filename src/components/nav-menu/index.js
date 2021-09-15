// pieces
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Section, GridItem, Button } from '@thepuzzlers/pieces';
import { NavigationLink } from 'pieces/components/NavigationLink/NavigationLink';
import logoWiketGreen from 'assets/svg/logo-wiket-green2.svg';

export const Nav = () => (
  <Section
    id='navigation-section'
    sx={{
      // height: [null, null, null, null, '100px', '100px'],
      top: '0',
      position: 'fixed',
      zIndex: '2',
      backgroundColor: 'background',
      boxShadow: '0px 18px 24px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Logo />
    <DesktopNavigationLinks />
    <MobileNavigation />
    {/* <GetStartedButton /> */}
  </Section>
);

const Logo = () => (
  <GridItem
    sx={{
      gridColumn: ['1 / 5', '1 /4', '1 /  6', '1 /  5', '1 /  4', '1 /  4'],
      alignSelf: 'center',
    }}
  >
    <Link to='/'>
      <picture>
        <source srcSet={logoWiketGreen} />
        <img
          src={logoWiketGreen}
          alt='batik-shape'
          sx={{
            width: '100%',
          }}
        />
      </picture>
    </Link>
  </GridItem>
);

const DesktopNavigationLinks = () => {
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
        justifyContent: '',
        alignSelf: 'center',
      }}
    >
      {data.nav.nav.map((el) => (
        <NavigationLink
          variant='bold'
          type='paragraph'
          sx={{ color: 'primary', fontWeight: 'bold' }}
          to={el.to}
        >
          {el.title}
        </NavigationLink>
      ))}
    </GridItem>
  );
};

const MobileNavigation = () => (
  <GridItem
    sx={{
      gridColumn: [
        '6 / 13',
        '12',
        '23 / 25',
        ' 23 / 25',
        '1 / span 24',
        '1 / span 24',
      ],
      display: ['flex', 'block', 'block', 'block', 'none', 'none'],
      justifyContent: 'right',
      cursor: 'pointer',
      p: ['20px 0'],
    }}
  >
    <Button
      variant='paragraph'
      sx={{
        // width: '100%',
        // width: ['100%', '100%', '93%', '85%', '100%', '100%'],
        // ml: ['15px', '0', null, null, '38px', '20px'],
        borderRadius: '10px',
        backgroundColor: 'buttonBackground',
        fontSize: '16px',
        color: '#fff',
        fontWeight: 'bold',
        p: ['12 16'],
      }}
    >
      Get Started
    </Button>
    <HamburgerMenu />
  </GridItem>
);

// const GetStartedButton = () => (
//   <GridItem
//     sx={{
//       gridColumn: [
//         '6/ 11',
//         '8 / 11',
//         '18 / 23',
//         '18 / 23',
//         '21 / 25',
//         '22/ 25',
//       ],
//       alignSelf: 'center',
//       display: ['flex'],

//     }}
//   >
//     <Button
//       variant='paragraph'
//       sx={{
//         width: ['100%', '100%', '93%', '85%', '100%', '100%'],
//         ml: ['15px', '0', null, null, '38px', '20px'],
//         borderRadius: '10px',
//         height: ['40px', '42px', '42px', '40px', '42px', '42px'],
//         backgroundColor: 'buttonBackground',
//         fontSize: '12px',
//         color: '#fff',
//         fontWeight: 'bold',
//       }}
//     >
//       Get Started
//     </Button>
//   </GridItem>
// );

const HamburgerMenu = () => (
  <Box
    sx={{
      cursor: 'pointer',
      height: '40px',
      width: '40px',
      display: 'flex',
      alignItems: 'center',
      ml: '18px',
    }}
  >
    <Box
      sx={{
        width: '40px',
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          mb: '5px',
          width: ['55%', '80%', '55%', '50%'],
          ml: ['45%', '20%', '45%', '50%'],
          height: '4px',
          backgroundColor: 'primary',
          borderRadius: '4px',
        }}
      />
      <Box
        sx={{
          cursor: 'pointer',
          mb: '5px',
          width: ['70%', '100%', '70%', '66%'],
          ml: ['30%', '0', '30%', '34%'],
          height: '4px',
          backgroundColor: 'primary',
          borderRadius: '4px',
        }}
      >
        {' '}
      </Box>
      <Box
        sx={{
          cursor: 'pointer',
          width: ['45%', '50%', '50%', '45%'],
          ml: ['55%', '50%', '50%', '55%'],
          height: '4px',
          backgroundColor: 'primary',
          borderRadius: '4px',
        }}
      />
    </Box>
  </Box>
);
