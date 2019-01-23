import React from 'react'

const Price = (props) => {
  const { price } = props;
  
  return (
    <h1 className='ffws f6 f-subheadline-l fw6 tc'>
      ${ price }
    </h1>
  );
};

export default Price;
