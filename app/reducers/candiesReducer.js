import axios from 'axios';

const initialState = {
  candies: []
}

const SET_CANDIES = 'SET_CANDIES';

export const setCandies = (candies) => ({
  type: SET_CANDIES,
  candies
})

export const getCandies = () => {
  return (dispatch) => {
    return axios.get('/api/candies')
      .then(res => dispatch(setCandies(res.data)))
      .catch(err => console.log('Ya done fucked up with: ', err));
  }
}

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
}

export default candiesReducer;
