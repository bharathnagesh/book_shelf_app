export const GET_BOOKLIBRARY_REQUESTED = 'bookLibrary/BOOKLIBRARY_REQUESTED';
export const GET_BOOKLIBRARY_SUCCESS = 'bookLibrary/BOOKLIBRARY_SUCCESS';
export const GET_BOOKLIBRARY_FAILURE = 'bookLibrary/BOOKLIBRARY_FAILURE';

export const GET_SEARCHEDBOOKS_REQUESTED = 'bookLibrary/SEARCHEDBOOKS_REQUESTED';
export const GET_SEARCHEDBOOKS_SUCCESS = 'bookLibrary/SEARCHEDBOOKS_SUCCESS';
export const GET_SEARCHEDBOOKS_FAILURE = 'bookLibrary/SEARCHEDBOOKS_FAILURE';

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
    case GET_SEARCHEDBOOKS_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_SEARCHEDBOOKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        bookLibrary: action.result
      };
    }
    case GET_SEARCHEDBOOKS_FAILURE: {
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
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        bookLibrary: action.result
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

export const getBookLibrary = () => {
  return {
    types: [GET_BOOKLIBRARY_REQUESTED, GET_BOOKLIBRARY_SUCCESS, GET_BOOKLIBRARY_FAILURE],
    promise: client => client.get('http://localhost:3004/bookLibrary')
  };
};

export const searchBooks = (title) => {
  return {
    types: [GET_SEARCHEDBOOKS_REQUESTED, GET_SEARCHEDBOOKS_SUCCESS, GET_SEARCHEDBOOKS_FAILURE],
    promise: client => client.get(`http://localhost:3004/bookLibrary?q=${title}`)
  };
}

export const changeStatus = (updated, id) => {
  return {
    types: [GET_CHANGESTATUS_REQUESTED, GET_CHANGESTATUS_SUCCESS, GET_CHANGESTATUS_FAILURE],
    promise: client => client.patch(`http://localhost:3004/bookLibrary/${id}`, updated),
    payload: updated
  };
}
