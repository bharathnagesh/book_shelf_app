import { combineReducers } from 'redux';
import bookLibrary from './bookLibrary';

const appReducer = combineReducers({
  bookLibrary
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
