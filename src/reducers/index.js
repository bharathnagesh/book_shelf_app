import { combineReducers } from 'redux';
import bookShelf from './bookShelf';

const appReducer = combineReducers({
  bookShelf
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
