/* eslint-disable operator-linebreak */
// function to move the cards according to a click on the tabbar
export const moveCards = ({
  controlCards,
  controlCardImageOpacity,
  currentCard,
  requestedCard,
  yOffset,
  opacityBorderUpper,
  activeItem,
}) => {
  // indicates the distance the cards need to travel
  const jumps = requestedCard - currentCard.get();
  // helperfunction to set the opacity
  const setOpacity = visibilityChange => {
    if (visibilityChange === 'getsInvisible') {
      return 0;
    }
    if (visibilityChange === 'getsVisible') {
      return 1;
    }
    return undefined;
  };

  // loop through the cards with the 'custom' tag
  controlCards.start(({ index, cardPosition, parentCard = 0 }) => {
    // parentCard refers back to the active stack of cards based on the position of the slider
    if (parentCard === activeItem.get()) {
      // new position
      const position = cardPosition.get() - jumps;
      // variable to hold a possible change of the visibility of a card
      let visibilityChange = null;
      // check if the card is currently visible
      // eslint-disable-next-line max-len
      const isCurrentlyVisible =
        position >= 0 && position <= opacityBorderUpper ? true : false;
      // set up the new card positions
      // cardPosition.set(position - jumps);
      // position = cardPosition.get();
      // check the new visibility for the card
      // eslint-disable-next-line max-len
      const getsVisible =
        position >= 0 && position <= opacityBorderUpper ? true : false;
      // true - false = getsInvisble
      // false - true = getsVisible
      // check if the visibility has changed
      if (isCurrentlyVisible !== getsVisible) {
        if (isCurrentlyVisible === true && getsVisible === false) {
          visibilityChange = 'getsInvisible';
        } else {
          visibilityChange = 'getsVisible';
        }
      }
      // set the state of the current card
      currentCard.set(requestedCard);
      cardPosition.set(cardPosition.get() - jumps);
      const scale = 0.9 - position * (position * 0.1);
      const y = position * yOffset;
      // change the opacity of the stacked cards behind the main image
      controlCardImageOpacity.start(i => {
        // if the requested card is 0 the cards need to be shifted regarding their initial order i
        const opacity = requestedCard !== 0 ? 1 - position * 0.4 : 1 - i * 0.4;
        return {
          opacity,
          transition: {
            type: 'tween',
            duration: 1,
          },
        };
      });
      // animate the card
      return {
        // move the card to the new position
        y: y > 0 ? 0 : y,
        // set the scaling for the new position
        scale: scale > 0 ? scale : 0,
        // check the opacity and set it afterwards
        opacity: setOpacity(visibilityChange),
        // set different transsitions for each animation
        transition: {
          opacity: {
            duration: 0.2,
            delay: index * 0.1,
          },
          scale: {
            duration: 0.2,
            delay: index * 0.1,
          },
          default: {
            delay: index * 0.1,
            type: 'spring',
            velocity: 1,
            damping: 30,
            stiffness: 500,
            mass: 2,
          },
        },
      };
    }
    // return empty object with no animations for all other cards besides the parent card
    return {};
  });
};
