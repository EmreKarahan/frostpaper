// ./src/reducers/bookReducers.js
export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        Object.assign({}, action.book)
      ];

    case 'FETCH_BOOKS':
      return [
        ...state,
        Object.assign({}, action.books)
      ];
    default:
      return state;
  }
};
