import React from 'react';
// import { gsap } from 'gsap';

import { Svg, Box, Paragraph, Link } from '@thepuzzlers/pieces';

export const PrimaryButton = () => {
  const shape01 = React.useRef(null);
  const shape02 = React.useRef(null);

  return (
    <Box
      as='button'
      sx={{
        padding: '8px 32px',
        border: '4px solid #fff',
        gridColumn: '1/13',
        justifySelf: 'start',
        position: 'relative',
        overflow: 'hidden',
        bg: 'transparent',
        borderRadius: '16px',
      }}
    >
      <Paragraph sx={{ position: 'relative', zIndex: 1 }} variant='bold'>
        Jetzt einkaufen
      </Paragraph>
      <Svg
        viewBox='0 0 1 1'
        sx={{
          width: '144%',
          position: 'absolute',
          transform: 'translate(-50%, -39%)',
          top: 0,
          zIndex: 0,
        }}
      >
        <path
          ref={shape01}
          fill='#FFFCF9'
          d='M0.757523 0.171593C0.876448 0.127596 0.927486 0.180746 0.947904 0.220787C1.02831 0.384489 0.852468 0.359899 0.819471 0.471201C0.77888 0.608114 0.944609 0.805932 0.803113 0.841734C0.680958 0.872642 0.708493 0.676908 0.588423 0.63883C0.442354 0.592507 0.257393 0.813262 0.165999 0.691736C0.123939 0.635809 0.229253 0.60484 0.214321 0.536537C0.192599 0.437175 -0.0174206 0.472896 0.041702 0.341129C0.100825 0.209362 0.230044 0.435012 0.305832 0.354234C0.348998 0.308226 0.285958 0.265819 0.362212 0.215749C0.422407 0.184035 0.467982 0.243079 0.489367 0.251981C0.51427 0.262347 0.588647 0.234869 0.615761 0.22612C0.642874 0.21737 0.608865 0.226589 0.757523 0.171593Z'
        />
        <path
          ref={shape02}
          style={{ visibility: 'hidden' }}
          d='M0.428711 0.856971C0.311329 0.912995 0.227392 0.918299 0.173819 0.698196C0.120246 0.478093 0.139568 0.323674 0.252957 0.206486C0.366347 0.0892988 0.519984 0.0677554 0.728254 0.206515C1.0172 0.399026 0.709991 0.494347 0.791992 0.603065C0.884167 0.725271 0.807645 0.78804 0.694336 0.751502C0.581027 0.714965 0.546093 0.800947 0.428711 0.856971Z'
        />
      </Svg>
    </Box>
  );
};

// BUTTON LINK
export const ButtonLink = () => {
  const shape01 = React.useRef(null);
  const shape02 = React.useRef(null);
  const buttonWrapper = React.useRef(null);

  // const tl = gsap.timeline({
  //   defaults: {
  //     ease: 'power3.inOut',
  //   },
  // });

  // React.useEffect(() => {
  //   buttonWrapper.current.addEventListener('mouseenter', () => {
  //     console.log('enter');
  //     tl.play();
  //     tl.to(shape01.current, {
  //       morphSVG: {
  //         shape: shape02.current,
  //         type: 'rotational',
  //         origin: 'center',
  //       },
  //     });
  //   });
  //   buttonWrapper.current.addEventListener('mouseleave', () => {
  //     tl.reverse();
  //   });
  // }, []);

  return (
    <Box
      ref={buttonWrapper}
      sx={{
        gridColumn: '1/13',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Svg viewBox='0 0 1 1' sx={{ width: '120px', height: '120px' }}>
        <path
          ref={shape01}
          fill='#DA3C6E'
          d='M0.757523 0.171593C0.876448 0.127596 0.927486 0.180746 0.947904 0.220787C1.02831 0.384489 0.852468 0.359899 0.819471 0.471201C0.77888 0.608114 0.944609 0.805932 0.803113 0.841734C0.680958 0.872642 0.708493 0.676908 0.588423 0.63883C0.442354 0.592507 0.257393 0.813262 0.165999 0.691736C0.123939 0.635809 0.229253 0.60484 0.214321 0.536537C0.192599 0.437175 -0.0174206 0.472896 0.041702 0.341129C0.100825 0.209362 0.230044 0.435012 0.305832 0.354234C0.348998 0.308226 0.285958 0.265819 0.362212 0.215749C0.422407 0.184035 0.467982 0.243079 0.489367 0.251981C0.51427 0.262347 0.588647 0.234869 0.615761 0.22612C0.642874 0.21737 0.608865 0.226589 0.757523 0.171593Z'
        />
        <path
          ref={shape02}
          style={{ visibility: 'hidden' }}
          d='M0.428711 0.856971C0.311329 0.912995 0.227392 0.918299 0.173819 0.698196C0.120246 0.478093 0.139568 0.323674 0.252957 0.206486C0.366347 0.0892988 0.519984 0.0677554 0.728254 0.206515C1.0172 0.399026 0.709991 0.494347 0.791992 0.603065C0.884167 0.725271 0.807645 0.78804 0.694336 0.751502C0.581027 0.714965 0.546093 0.800947 0.428711 0.856971Z'
        />
      </Svg>
      <Link
        href='/somewhere'
        sx={{
          position: 'absolute',
          left: '50px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'lightText',
        }}
      >
        Mehr erfahren
      </Link>
    </Box>
  );
};
