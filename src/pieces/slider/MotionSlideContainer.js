import React, { useRef, useLayoutEffect } from 'react';
import { useAnimation, useMotionValue } from 'framer-motion';
import { FlexWrapper, GridItem, Box } from 'pieces';

export const MotionSlideContainer = ({
  items,
  children,
  custom,
  index,
  activeItem,
  additionalControls = null,
  additionalAnimationVariants = null,
  onSwipeEnd = () => null,
  ...props
}) => {
  // const { onSwipeEnd } = useStackedCardsContext();
  // set the additionalAnimations to default on load
  controlAdditionalAnimations({
    additionalControls,
    activeItem,
    additionalAnimationVariants,
  });
  // holding the animatin controls for the items
  const controlItems = useAnimation();
  const currentX = useMotionValue(0);
  // const { activeItem } = useStackedCardsContext();
  const allowDrag = useMotionValue(true);
  // defines when a card should snap in place
  const hotSpot = 50;
  // used to get the width of an item
  const itemRef = useRef(null);

  // if on initial render,
  useLayoutEffect(() => {
    // we need to update x position on initial render, when there is a different activeItem given thatn zero
    if (itemRef.current && activeItem.get() !== 0) {
      controlItems.start({
        x: -1 * itemRef.current.clientWidth * activeItem.get(),
        transition: {
          duration: 0,
        },
      });
      currentX.set(-1 * itemRef.current.clientWidth * activeItem.get());
    }
  }, [itemRef]);

  const itemSnapAnimation = {
    transition: {
      type: 'spring',
      mass: 1,
      stiffness: 200,
      damping: 50,
    },
  };
  const snapValues = {
    allowDrag,
    activeItem,
    currentX,
    itemRef,
    itemSnapAnimation,
    onSwipeEnd,
  };
  // function to coordinate the items
  const updateX = ({ newX, panEnded = false }) => {
    // insanity check if component has mounted
    if (itemRef !== 'undefined') {
      // check which direction the slider needs to move
      const direction = newX < 0 ? -1 : 1;
      const directionBasedHotspot = hotSpot * direction;

      // left swipe
      if (direction === -1) {
        // free drag so the user is able to drag the items
        if (allowDrag.get() && newX > directionBasedHotspot && !panEnded) {
          return {
            x: currentX.get() + newX,
            transition: { duration: 0 },
          };
        }
        // swipe reached the hotspot
        // or
        // swipe was too weak
        if (allowDrag.get() && (newX < directionBasedHotspot || panEnded)) {
          // fires if the swipe was strong enough and reached the hotspot
          // .length - 1 ensures that a user can't swipe above the max amout of items
          if (!panEnded && activeItem.get() !== items.length - 1) {
            const returnValue = snapItemsLeft(snapValues);
            controlAdditionalAnimations({
              additionalControls,
              activeItem,
              additionalAnimationVariants,
            });
            return returnValue;
          }
          // fires if the swipe was too weak and the items need to snap back in place
          return snapItemsRight(snapValues, true);
        }
        // to return something
        return null;
      }
      // swipe right
      // free drag so the user is able to drag the items
      if (allowDrag.get() && newX < directionBasedHotspot && !panEnded) {
        return {
          x: currentX.get() + newX,
          transition: { duration: 0 },
        };
      }
      // swipe reached the hotspot
      // or
      // swipe was too weak
      if (allowDrag.get() && (newX > directionBasedHotspot || panEnded)) {
        // fires if the swipe was strong enough and reached the hotspot
        // 0 ensures that a user can't swipe beneath 0
        if (!panEnded && activeItem.get() !== 0) {
          const returnValue = snapItemsRight(snapValues);
          controlAdditionalAnimations({
            additionalControls,
            activeItem,
            additionalAnimationVariants,
          });
          return returnValue;
        }
        // fires if the swipe was too weak and the items need to snap back in place
        return snapItemsLeft(snapValues, true);
      }
    }
    // to return something
    return null;
  };

  return (
    <GridItem
      className='projects--motionslider-wrapper'
      sx={{
        overflow: 'visible',
      }}
    >
      {/* holds the pan handler */}
      <FlexWrapper
        id='motionslider--images'
        sx={{ touchAction: 'none' }}
        {...props}
        custom={{ ...custom }}
        // control the items
        onPan={(event, info) => {
          // const el = document.getElementById('motionslider--images');
          // console.log(el);
          // el.releasePointerCapture(event.pointerId);
          controlItems.start(updateX({ newX: info.offset.x }));
        }}
        // if the hotspot wasn't reached, snap items back in place
        onPanEnd={(event, info) => {
          if (allowDrag.get()) {
            controlItems.start(
              updateX({ newX: info.offset.x, panEnded: true })
            );
          } else {
            allowDrag.set(true);
          }
        }}
      >
        {items.map((card, i) => (
          <Box key={card.key} ref={itemRef}>
            <Box animate={controlItems} custom={i}>
              {card}
            </Box>
          </Box>
        ))}
      </FlexWrapper>
    </GridItem>
  );
};

// Helper functions
const snapItemsLeft = (
  { allowDrag, activeItem, currentX, itemRef, itemSnapAnimation, onSwipeEnd },
  panEnded = false
) => {
  // hotspot was not reached and items needs to snap back
  if (panEnded && allowDrag.get() !== false) {
    allowDrag.set(false);
    return {
      x: currentX.get(),
      ...itemSnapAnimation,
    };
  }
  // hotspot was reached
  onSwipeEnd(activeItem.get() + 1);
  allowDrag.set(false);
  activeItem.set(activeItem.get() + 1);
  currentX.set(currentX.get() - itemRef.current.clientWidth);
  return {
    x: currentX.get(),
    ...itemSnapAnimation,
  };
};

const snapItemsRight = (
  { allowDrag, activeItem, currentX, itemRef, itemSnapAnimation, onSwipeEnd },
  panEnded = false
) => {
  // hotspot was not reached and items needs to snap back
  if (panEnded && allowDrag.get() !== false) {
    allowDrag.set(false);
    return {
      x: currentX.get(),
      ...itemSnapAnimation,
    };
  }
  // hotspot was reached
  onSwipeEnd(activeItem.get() - 1);
  allowDrag.set(false);
  activeItem.set(activeItem.get() - 1);
  currentX.set(currentX.get() + itemRef.current.clientWidth);

  return {
    x: currentX.get(),
    ...itemSnapAnimation,
  };
};

const controlAdditionalAnimations = ({
  additionalControls,
  activeItem,
  additionalAnimationVariants,
}) => {
  if (additionalControls !== null) {
    additionalControls.start(i => {
      if (i === activeItem.get()) {
        return additionalAnimationVariants.initial;
        // return { x: 200 };
      }
      return additionalAnimationVariants.animated;
    });
  }
};
