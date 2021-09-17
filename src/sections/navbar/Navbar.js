// external dependencies
import React, { memo, useState } from 'react';

// gsap
import { gsap } from 'gsap';

// pieces
import { NavigationLink } from 'pieces';
import {
  Box,
  Button,
  GridWrapper,
  Image,
  Heading,
  GridItem,
} from '@thepuzzlers/pieces';

// svgs
import logo from 'assets/svg/wiket-logo-complete.svg';
import menuVector from 'assets/svg/menu.svg';
import closeVector from 'assets/svg/close.svg';
import logoWhite from 'assets/svg/wiket-logo-light.svg';

const tl = gsap.timeline({
  ease: 'power2.in',
  duration: 0.3,
});

function openNavOverlay() {
  tl.from('#navigation', { opacity: 0.5, x: '100%' });
  tl.play();
}

function closeNavOverlay() {
  tl.to('#navigation', { opacity: 0, x: '-100%' });
  tl.play();
}

export const Navbar = memo(() => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <GridWrapper
        sx={{
          alignItems: 'center',
          bg: 'background',
          py: ['20px', '29px', '29px', '20px', '32px', '29px'],
          position: 'fixed',
          top: 0,
          zIndex: 5,
        }}
      >
        <Logo />
        <DesktopNavigation />
        <NavButton />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </GridWrapper>

      {/* ------------- Navigation Overlay ------------- */}
      <GridWrapper
        id='navigation'
        sx={{
          bg: 'greenText',
          display: openMenu ? 'grid' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'scroll',
          height: '100vh',
          width: '100vw',
          zIndex: 6,
        }}
      >
        <Close openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <OverlayNavlinks />
        <OverlayNavHeading />
        <LogoLight />
      </GridWrapper>
    </nav>
  );
});

/* -------------------- Mobile Navigation -------------------- */

const Logo = () => (
  <Box
    sx={{
      gridColumn: ['1/5', '1/4', '1/6', '1/5', '1/5', '1/5'],
      height: ['31.61px', '35.03px', '41.7px', '29px', '35.9px', '46px'],
      width: ['103px', '122px', '139.89px', '101px', '123.9px', '124px'],
    }}
  >
    <Image src={logo} alt='Wiket logo' />
  </Box>
);

const NavButton = () => (
  <Box
    sx={{
      gridColumn: ['6/11', '8/12', '18/23', '18/23', '21/25', '22/25'],
      justifySelf: ['end', 'baseline', 'baseline', 'baseline', 'end', 'end'],
    }}
  >
    <Button variant='tertiarySmall'>Get started</Button>
  </Box>
);

const Menu = ({ openMenu, setOpenMenu }) => (
  <Box
    sx={{
      display: ['block', 'block', 'block', 'block', 'none'],
      gridColumn: ['11/13', '12/13', '23/25', '23/25'],
      justifySelf: ['end'],
      height: '21px',
      width: '33px',
    }}
    onClick={() => {
      if (openMenu) {
        closeNavOverlay();
        setOpenMenu(false);
      } else {
        setOpenMenu(true);
        openNavOverlay();
      }
    }}
  >
    <Image src={menuVector} alt='Menu icon' />
  </Box>
);

/* ---------------- Links Data and Component ---------------- */

const LinksData = [
  {
    name: 'Benefits',
    href: '#',
  },
  {
    name: 'Your profile',
    href: '#',
  },
  {
    name: 'Connections',
    href: '#',
  },
  {
    name: 'Plans & Pricing',
    href: '#',
  },
];

const Links = ({ sx }) =>
  LinksData.map((link) => (
    <NavigationLink
      to={link.href}
      sx={{
        textAlign: 'center',
        mb: ['16%', '10%', '9%', 0, 0],
        ...sx,
      }}
      key={link.name}
    >
      {link.name}
    </NavigationLink>
  ));

/* ------------------- Navigation Overlay ------------------- */

const Close = ({ openMenu, setOpenMenu }) => (
  <Box
    sx={{
      alignSelf: ['center', 'center', 'end'],
      gridColumn: ['11/13', '12/13', '23/24', '24/25'],
      justifySelf: ['end', 'end', 'baseline', 'end'],
      my: ['50%', '100%', '100%', '100%'],
      height: ['22.36px', '22.36px', '31.31px', '17.89px'],
      width: ['22.15px', '22.15px', '31.01px', '17.72px'],
    }}
    onClick={() => setOpenMenu(!openMenu)}
  >
    <Image src={closeVector} alt='Close icon' />
  </Box>
);

const OpenNavButton = () => (
  <Button
    type='submit'
    variant='tertiary'
    sx={{
      m: ['0 auto', '0 auto', '0 auto', '0 0 auto 0'],
    }}
  >
    Get started
  </Button>
);

const OverlayNavlinks = () => (
  <GridItem
    sx={{
      alignSelf: ['center', 'center', 'end'],
      alignItems: 'center',
      display: 'flex',
      flexDirection: ['column', 'column', 'column', 'row'],
      gridColumn: ['1/13', '1/13', '1/25', '1/25'],
      justifyContent: ['unset', 'unset', 'unset', 'space-between'],
    }}
  >
    <Links sx={{ color: 'textNegative' }} />
    <OpenNavButton />
  </GridItem>
);

const OverlayNavHeading = () => (
  <Heading
    as='h2'
    type='openNavHeading'
    sx={{
      alignSelf: ['end', 'end', 'end', 'center'],
      color: 'textNegative',
      gridColumn: ['1/13', '3/11', '6/20', '15/25'],
      gridRow: [3, 3, 3, 3],
      textAlign: ['center', 'center', 'center', 'right'],
      p: ['16% 0 8%', '25% 0 10%', '25% 0 10%', '10% 0 5%'],
    }}
  >
    Where mind-liked businesses <span>connect</span>
  </Heading>
);

const LogoLight = () => (
  <Box
    sx={{
      alignSelf: ['baseline', 'baseline', 'baseline', 'center'],
      gridColumn: ['4/10', '4/10', '10/16', '1/6'],
      gridRow: [4, 4, 4, 3],
      justifySelf: ['center', 'center', 'center', 'baseline'],
      mb: ['20%', '20%', '30%', '-5%'],
      height: ['29px', '36.77px', '36.77px', '30.29px'],
      width: ['112px', '142px', '142px', '117px'],
    }}
  >
    <Image src={logoWhite} alt='Wiket logo' />
  </Box>
);

/* ------------------- Desktop Navigation ------------------- */

const DesktopNavigation = () => (
  <GridItem
    sx={{
      display: ['none', 'none', 'none', 'none', 'flex', 'flex'],
      gridColumn: [null, null, null, null, '9/21', '11/21'],
      justifyContent: [
        null,
        null,
        null,
        null,
        'space-between',
        'space-between',
      ],
    }}
  >
    <Links sx={{ color: 'greenText' }} />
  </GridItem>
);
