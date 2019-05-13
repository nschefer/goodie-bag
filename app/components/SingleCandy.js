import React from 'react';

const SingleCandy = (props) => {
  const { candy } = props;

  return (
    <li>
      <img src={candy.imageUrl} />
      <h3>{candy.name}</h3>
      <p>{candy.description}</p>
      <p>Quantity: {candy.quantity}</p>
    </li>
  )
}

export default SingleCandy;
