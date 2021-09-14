import React from 'react';
// import PropTypes from 'prop-types';

const testProduct = {
  name: 'Fruchtaufstrich',
  price: 4.5,
  tax: 0.07,
  variants: ['himbeer', 'aprikose', 'kirsche'],
};

export const AddToCart = ({ selectedProducts = testProduct }) => (
  // Object.keys(selectedProducts).map((test) => console.log(test));

  <div>
    {Object.keys(selectedProducts.variants).map((variant) => (
      <div>
        {selectedProducts.name}
        <br />
        {selectedProducts.price}
        <br />
        {selectedProducts.variants[variant]}
      </div>
    ))}
  </div>
);

// AddToCart.propTypes = {
//   selectedProducts: PropTypes.shape.isRequired,
// };
