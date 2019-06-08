export const GET_BOOKSHELF_REQUESTED = 'bookShelf/BOOKSHELF_REQUESTED';
export const GET_BOOKSHELF_SUCCESS = 'bookShelf/BOOKSHELF_SUCCESS';
export const GET_BOOKSHELF_FAILURE = 'bookShelf/BOOKSHELF_FAILURE';

export const GET_CHANGESTATUS_REQUESTED = 'bookShelf/CHANGESTATUS_REQUESTED';
export const GET_CHANGESTATUS_SUCCESS = 'bookShelf/CHANGESTATUS_SUCCESS';
export const GET_CHANGESTATUS_FAILURE = 'bookShelf/CHANGESTATUS_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  bookShelf: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKSHELF_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_BOOKSHELF_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        bookShelf: action.result
      };
    }
    case GET_BOOKSHELF_FAILURE: {
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
        bookShelf: action.result
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

export const getBookShelf = () => {
  return {
    types: [GET_BOOKSHELF_REQUESTED, GET_BOOKSHELF_SUCCESS, GET_BOOKSHELF_FAILURE],
    promise: client => client.get('http://localhost:3004/bookShelf')
  };
};

export const changeStatus = (updated) => {
  console.log(updated);
  return {
    types: [GET_CHANGESTATUS_REQUESTED, GET_CHANGESTATUS_SUCCESS, GET_CHANGESTATUS_FAILURE],
    promise: client => client.put(`http://localhost:3004/bookShelf/${updated.id}`, updated),
    payload: updated
  };
}
