import React from 'react';

const priceGen = () => {
  let price = ((Math.floor(Math.random() * (15 - 3)) + 3) * 10) + 9;

  return (price);
}

export default priceGen