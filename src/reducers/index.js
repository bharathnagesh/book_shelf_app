import { combineReducers } from 'redux';
import bookShelf from './bookShelf';
import bookLibrary from './bookLibrary';

const appReducer = combineReducers({
  bookShelf,
  bookLibrary
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
