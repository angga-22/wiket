import React, { createContext, useContext } from 'react';
import { useAnimation, useMotionValue } from 'framer-motion';
import PropTypes from 'prop-types';

const StackedCardsContext = createContext();

export const useStackedCardsContext = () => useContext(StackedCardsContext);

// values which come from the actual provider wrapped around an element
export const StackedCardsProvider = ({
  children,
  yOffset,
  moveCards,
  opacityBorderUpper,
  // activeItem is just relevant if stackedCards are used within a slider
  activeItem = 0,
}) => {
  // animation controls
  const controlCards = useAnimation();
  const controlCardImageOpacity = useAnimation();
  const controlMainImage = useAnimation();
  const controlSwitchAnimation = useAnimation();
  const controlCurrentCardAnimation = useAnimation();
  const controlTabItem = useAnimation();

  // animation values
  const currentCard = useMotionValue(0);
  // card shift onClick on one of the tabs
  const handleClick = (index) => {
    moveCards({
      controlCards,
      controlCardImageOpacity,
      currentCard,
      requestedCard: index,
      yOffset,
      opacityBorderUpper,
      activeItem,
    });
    // main images gets shifted
    controlMainImage.start(({ i, parentCard }) => {
      if (parentCard === activeItem.get()) {
        if (i === index) {
          return {
            opacity: 1,
          };
        }
        return { opacity: 0 };
      }
      return {};
    });
    // loading animation from left to right
    // solid color overlay
    controlSwitchAnimation.start(({ parentCard }) => {
      if (parentCard === activeItem.get()) {
        return {
          x: [-200, 0, 600, 600, -200],
          opacity: [0, 1, 1, 0, 0],
        };
      }
      return {};
    });
    controlTabItem.start((i) => {
      if (i === currentCard.get()) {
        return {
          color: '#A4031C',
        };
      }
      return {
        color: 'black',
      };
    });
    return {};
  };

  // provider to wrap around the stackedCards
  return (
    <StackedCardsContext.Provider
      value={{
        controlMainImage,
        controlSwitchAnimation,
        controlCards,
        handleClick,
        activeItem,
        controlCurrentCardAnimation,
        controlCardImageOpacity,
        currentCard,
        controlTabItem,
      }}
    >
      {children}
    </StackedCardsContext.Provider>
  );
};

StackedCardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  yOffset: PropTypes.number.isRequired,
  moveCards: PropTypes.func.isRequired,
  opacityBorderUpper: PropTypes.number.isRequired,
  activeItem: PropTypes.number,
};

StackedCardsProvider.defaultProps = {
  activeItem: 0,
};
