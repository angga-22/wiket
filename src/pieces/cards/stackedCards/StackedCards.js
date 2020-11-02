import React from 'react';
import { useStackedCardsContext } from 'pieces/utils/context';
import { useMotionValue } from 'framer-motion';
// Pieces Imports
import {
  Box,
  FlexWrapper,
  // GridItem
} from 'pieces';

export const StackedCards = ({
  Image,
  images,
  yOffset = -40,
  parentIndex = 0,
}) => {
  const {
    controlMainImage,
    controlSwitchAnimation,
    controlCards,
    controlCurrentCardAnimation,
    controlCardImageOpacity,
  } = useStackedCardsContext();
  return (
    <Box className='stackedCards--wrapper' sx={{ width: '90%' }}>
      {/* Main Image */}
      <FlexWrapper
        className='stackedCards--images'
        animate={controlCurrentCardAnimation}
        sx={{ position: 'relative', width: '100%', height: '100%' }}
      >
        <Box
          className='stackedCards--images'
          sx={{
            position: 'relative',
            width: '90vw',
            height: '60vw',
            zIndex: 10,
            // overflowY: 'hidden',
          }}
        >
          <FlexWrapper
            className='main-images-wrapper'
            sx={{
              position: 'absolute',
              overflow: 'hidden',
              width: '100%',
              height: '60vw',
              borderRadius: 'primary',
              boxShadow: 'elevation100',
            }}
          >
            {images.map((image, i) => (
              <Image
                key={image.url.id}
                className='main-img'
                custom={{ i, parentCard: parentIndex }}
                animate={controlMainImage}
                initial={i === 0 ? { opacity: 1 } : { opacity: 0 }}
                sx={{ position: 'absolute', zIndex: '100', boxShadow: '0' }}
                image={image.url.childImageSharp}
              />
            ))}
            <Box
              className='stackedCards--switch-animation'
              sx={{
                position: 'absolute',
                bg: 'primary',
                zIndex: '101',
                width: '100%',
                height: '60vw',
                opacity: '0',
              }}
              // eslint-disable-next-line react/destructuring-assignment
              custom={{ parentCard: parentIndex }}
              animate={controlSwitchAnimation}
            />
          </FlexWrapper>
          {images.map((image, i) => {
            const cardPosition = useMotionValue(i);
            const scale = 0.9 - i * (i * 0.1);
            return (
              // Motion Card Container
              <Box
                // eslint-disable-next-line react/no-array-index-key
                className='following-images'
                key={image.url.id}
                custom={{ index: i, cardPosition, parentCard: parentIndex }}
                animate={controlCards}
                style={{
                  width: '100%',
                  scale: scale > 0 ? scale : 0,
                  position: 'absolute',
                  y: i * yOffset,
                  zIndex: `${images.length - i}`,
                  backgroundColor: '#fff',
                }}
              >
                <Image
                  // images need to get their own opacity. Otherwise the cards are visible through eachother
                  animate={controlCardImageOpacity}
                  custom={i}
                  sx={{ opacity: 1 - i * 0.4 }}
                  image={image.url.childImageSharp}
                  className={`thumb-${i}`}
                />
              </Box>
            );
          })}
        </Box>
      </FlexWrapper>
    </Box>
  );
};
