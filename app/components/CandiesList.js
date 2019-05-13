import React from 'react';
import { connect } from 'react-redux';
import SingleCandy from './SingleCandy';

const CandiesList = (props) => {
  const { candies } = props;

  return (
    <div id="candiesList">
      <ol>
        {candies.map(candy => (
          <SingleCandy key={candy.id} candy={candy} />
        ))}
      </ol>
    </div>
  )
}

const mapsState = (store) => ({
  candies: store.candies.candies
})

export default connect(mapsState, null)(CandiesList);
