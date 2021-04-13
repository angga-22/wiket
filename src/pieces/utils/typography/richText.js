import React from 'react';
import PropTypes from 'prop-types';

const shortenText = (text = '', maxchar) => {
  if (maxchar && text.length > maxchar) {
    return `${text.slice(0, maxchar)}...`;
  }
  return text;
};

export const RichText = ({ Bold, Italic, content, maxchar }) => {
  const result = [];
  let position = 0;
  // return if content is string
  if (!content || !content.blocks) return shortenText(content, maxchar);

  let totalTextLength = 0;
  let isShortend = false;

  // shortenText if maxchar given
  const shortendContent = { blocks: [] };
  if (maxchar) {
    content.blocks.forEach((block) => {
      totalTextLength += block.text.length;
      if (isShortend) {
        return;
      }
      if (totalTextLength <= maxchar) {
        shortendContent.blocks.push(block);
      } else {
        // this might lead to
        const shortenBy = maxchar - totalTextLength;
        // eslint-disable-next-line no-param-reassign
        block.text = shortenText(block.text, shortenBy);
        shortendContent.blocks.push(block);
        isShortend = true;
      }
    });
  } else {
    shortendContent.blocks = content.blocks;
  }

  // if content is richText Object check for emphasized strings
  content.blocks.forEach((block, blockIndex) => {
    if (block.inlineStyleRanges.length !== 0) {
      block.inlineStyleRanges.forEach((inlineStyle, inlineStyleIndex) => {
        const start = inlineStyle.offset;
        const end = start + inlineStyle.length;
        // return everything between the last inlineStyle
        // and the new one as normal text
        result.push(block.text.slice(position, start));
        if (inlineStyle.style === 'BOLD') {
          result.push(
            // eslint-disable-next-line react/no-array-index-key
            <Bold key={`${block.key}-${inlineStyleIndex}`}>
              {block.text.slice(start, end)}
            </Bold>
          );
        } else if (inlineStyle.style === 'ITALIC') {
          result.push(
            // eslint-disable-next-line react/no-array-index-key
            <Italic key={`${block.key}-${inlineStyleIndex}`}>
              {block.text.slice(start, end)}
            </Italic>
          );
        }
        // keep track of where we are
        position = end;
      });
      // return everything of the end of the string
      result.push(block.text.slice(position));
    } else {
      // if no inline Styling, just return the text
      result.push(block.text);
    }

    // between every block, add a break
    if (blockIndex < content.blocks.length) {
      result.push(<br key={`${block.key}`} />);
    }
    position = 0;
  });
  return result;
};

RichText.propTypes = {
  Bold: PropTypes.elementType,
  Italic: PropTypes.elementType,
};

RichText.defaultProps = {
  Italic: React.Fragment,
  Bold: React.Fragment,
};
