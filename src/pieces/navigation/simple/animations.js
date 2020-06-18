// Defaul animation for Simple Navigation
export const animations = {
  navigation: {
    // main stage for the navigation
    overlay: {
      open: {
        height: '100vh',
        opacity: 1,
        zIndex: 100,
        display: 'grid',
        transition: {
          type: 'spring',
          mass: 1,
          stiffness: 500,
          damping: 50,
          velocity: 100,
          restSpeed: 100,
          restDelta: 200,
          staggerChildren: 0.1,
        },
      },
      close: {
        height: '0vh',
        opacity: 0,
        display: 'none',
        transition: {
          when: 'afterChildren',
          display: { delay: 0.5 },
          default: {
            type: 'spring',
            mass: 1,
            stiffness: 200,
            damping: 50,
          },
        },
      },
    },
    links: {
      items: {
        open: {
          opacity: 1,
          y: '0px',
          transition: {
            default: {
              type: 'spring',
              mass: 1,
              stiffness: 200,
              damping: 50,
            },
          },
        },
        close: {
          opacity: 0,
          y: '+100px',
          transition: {
            default: {
              type: 'spring',
              damping: 50,
              restSpeed: 100,
              restDelta: 100,
            },
          },
        },
      },
    },
  },
};
