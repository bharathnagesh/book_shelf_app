export const GET_BOOKLIBRARY_REQUESTED = 'bookLibrary/BOOKLIBRARY_REQUESTED';
export const GET_BOOKLIBRARY_SUCCESS = 'bookLibrary/BOOKLIBRARY_SUCCESS';
export const GET_BOOKLIBRARY_FAILURE = 'bookLibrary/BOOKLIBRARY_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  bookLibrary: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKLIBRARY_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_BOOKLIBRARY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        bookLibrary: action.result
      };
    }
    case GET_BOOKLIBRARY_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }
    default:
      return state;
  }
};

export const getBookLibrary = () => {
  return {
    types: [GET_BOOKLIBRARY_REQUESTED, GET_BOOKLIBRARY_SUCCESS, GET_BOOKLIBRARY_FAILURE],
    promise: client => client.get('http://localhost:3004/bookLibrary')
  };
};
