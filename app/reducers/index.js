import { combineReducers } from 'redux';
import candiesRedcuer from './candiesReducer';

const initialState = {}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  candies: candiesRedcuer,
  root: rootReducer
})
