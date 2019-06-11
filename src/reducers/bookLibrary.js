export const GET_BOOKLIBRARY_REQUESTED = 'bookLibrary/BOOKLIBRARY_REQUESTED';
export const GET_BOOKLIBRARY_SUCCESS = 'bookLibrary/BOOKLIBRARY_SUCCESS';
export const GET_BOOKLIBRARY_FAILURE = 'bookLibrary/BOOKLIBRARY_FAILURE';

export const GET_CHANGESTATUS_REQUESTED = 'bookLibrary/CHANGESTATUS_REQUESTED';
export const GET_CHANGESTATUS_SUCCESS = 'bookLibrary/CHANGESTATUS_SUCCESS';
export const GET_CHANGESTATUS_FAILURE = 'bookLibrary/CHANGESTATUS_FAILURE';

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
    case GET_CHANGESTATUS_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_CHANGESTATUS_SUCCESS: {
      const foundIndex = state.bookLibrary.findIndex(x => x.id === action.payload.id);
      state.bookLibrary[foundIndex] = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        bookLibrary: state.bookLibrary
      };
    }
    case GET_CHANGESTATUS_FAILURE: {
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

export const getBookLibrary = (title = '') => {
  return {
    types: [GET_BOOKLIBRARY_REQUESTED, GET_BOOKLIBRARY_SUCCESS, GET_BOOKLIBRARY_FAILURE],
    promise: client => client.get(`http://localhost:3004/bookLibrary?q=${title}`)
  };
};

export const changeStatus = (data, id) => {
  return {
    types: [GET_CHANGESTATUS_REQUESTED, GET_CHANGESTATUS_SUCCESS, GET_CHANGESTATUS_FAILURE],
    promise: client => client.put(`http://localhost:3004/bookLibrary/${id}`, { data }),
    payload: data
  };
}
