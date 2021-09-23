// external dependencies
import React, { memo, useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// gsap
import { gsap } from 'gsap';

// pieces
import { NavigationLink } from 'pieces';
import {
  Box,
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

export const Navbar = memo(() => {
  const [openMenu, setOpenMenu] = useState(false);
  const tl = useRef(
    gsap.timeline({ defaults: { ease: 'Power1.easeOut' } }).reverse()
  );
  const navigation = useRef();
  const navLinks = useRef([]);
  navLinks.current = [];
  const overlayHeading = useRef();
  const logoLight = useRef();

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const addToRefs = (el) => {
    if (el && !navLinks.current.includes(el)) {
      navLinks.current.push(el);
    }
  };

  useEffect(() => {
    gsap.set(navLinks.current, { x: '-80%', opacity: 0 });

    tl.current
      .from(navigation.current, { opacity: 0, x: '100%' })
      .to(navLinks.current, {
        duration: 0.2,
        x: '0',
        ease: 'Power1.easeOut',
        stagger: 0.2,
        opacity: 1,
      })
      .from(overlayHeading.current, { y: '80%', opacity: 0 })
      .from(logoLight.current, { y: '80%', opacity: 0 });
  }, []);

  useEffect(() => {
    tl.current.reversed(!openMenu);
  }, [openMenu]);

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
        <Menu handleClick={handleClick} />
      </GridWrapper>

      {/* ------------- Navigation Overlay ------------- */}
      <GridWrapper
        ref={navigation}
        sx={{
          bg: 'primary',
          display: openMenu === true ? 'grid' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'scroll',
          height: '100vh',
          width: '100vw',
          zIndex: 6,
        }}
      >
        <Close handleClick={handleClick} />
        <OverlayNavlinks handleClick={handleClick} designatedRef={addToRefs} />
        <OverlayNavHeading designatedRef={overlayHeading} />
        <LogoLight designatedRef={logoLight} />
      </GridWrapper>
    </nav>
  );
});

/* -------------------- Mobile Navigation -------------------- */

const Logo = () => (
  <NavigationLink
    to='#header-section'
    sx={{
      gridColumn: ['1/5', '1/4', '1/6', '1/5', '1/4', '1/4'],
      width: '100%',
    }}
  >
    <Image src={logo} alt='Wiket logo' />
  </NavigationLink>
);

const NavButton = () => (
  <Box
    sx={{
      gridColumn: ['6/11', '8/12', '18/23', '18/23', '21/25', '22/25'],
      justifySelf: ['end', 'baseline', 'baseline', 'baseline', 'end', 'end'],
    }}
  >
    <NavigationLink
      to='#contact-section'
      sx={{ variant: 'buttons.tertiarySmall' }}
    >
      Get started
    </NavigationLink>
  </Box>
);

const Menu = ({ handleClick }) => (
  <Box
    sx={{
      display: ['block', 'block', 'block', 'block', 'none'],
      gridColumn: ['11/13', '12/13', '23/25', '23/25'],
      justifySelf: ['end'],
    }}
    onClick={handleClick}
  >
    <Image src={menuVector} alt='Menu icon' />
  </Box>
);

/* ---------------- Links Data and Components ---------------- */
const useLinks = () => {
  const data = useStaticQuery(graphql`
    {
      allNavJson {
        nodes {
          nav {
            title
            to
          }
        }
      }
    }
  `);
  const links = data.allNavJson.nodes[0];
  return links;
};

const Links = ({ handleClick, designatedRef }) => {
  const links = useLinks();

  return links.nav.map((link) => (
    <Box
      key={link.title}
      className='navigation-link'
      ref={designatedRef}
      sx={{
        color: 'textNegative',
        textAlign: 'center',
        mb: ['16%', '10%', '9%', 0, 0],
      }}
    >
      <NavigationLink to={link.to} onClick={handleClick}>
        {link.title}
      </NavigationLink>
    </Box>
  ));
};

const DesktopLinks = () => {
  const links = useLinks();

  return links.nav.map((link) => (
    <NavigationLink
      to={link.to}
      sx={{
        color: 'primary',
        textAlign: 'center',
      }}
      key={link.title}
    >
      {link.title}
    </NavigationLink>
  ));
};
/* ------------------- Navigation Overlay ------------------- */

const Close = ({ handleClick }) => (
  <Box
    sx={{
      alignSelf: ['center', 'center', 'end'],
      gridColumn: ['12/13', '12/13', '22/24', '24/25'],
      justifySelf: ['end', 'end', 'baseline', 'end'],
      my: ['50%', '100%', '100%', '100%'],
      width: ['100%', '100%', '70%', '100%'],
    }}
    onClick={handleClick}
  >
    <Image src={closeVector} alt='Close icon' />
  </Box>
);

const OpenNavButton = ({ handleClick, designatedRef }) => (
  <Box
    sx={{
      m: ['0 auto', '0 auto', '0 auto', '0 0 auto 0'],
      variant: 'buttons.tertiary',
    }}
    ref={designatedRef}
  >
    <NavigationLink
      to='#contact-section'
      onClick={handleClick}
      ref={designatedRef}
    >
      Get started
    </NavigationLink>
  </Box>
);

const OverlayNavlinks = ({ handleClick, designatedRef }) => (
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
    <Links handleClick={handleClick} designatedRef={designatedRef} />
    <OpenNavButton handleClick={handleClick} designatedRef={designatedRef} />
  </GridItem>
);

const OverlayNavHeading = ({ designatedRef }) => (
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
    ref={designatedRef}
  >
    Where mind-liked businesses <span>connect</span>
  </Heading>
);

const LogoLight = ({ designatedRef }) => (
  <Box
    sx={{
      alignSelf: ['baseline', 'baseline', 'baseline', 'center'],
      gridColumn: ['5/9', '5/9', '10/16', '1/5'],
      gridRow: [4, 4, 4, 3],
      justifySelf: ['center', 'center', 'center', 'baseline'],
      mb: ['20%', '20%', '30%', '-20%'],
      width: ['100%', '70%', '80%', '90%'],
    }}
    ref={designatedRef}
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
    <DesktopLinks />
  </GridItem>
);
