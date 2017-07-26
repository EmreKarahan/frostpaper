// ./src/actions/bookActions.js
export const createBook = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'CREATE_BOOK',
    // Payload
    book: book
  }
};


export const addUserToHome = (houseCode, userId) => {
  return {
    types: ['ADD_USER', 'ADD_USER_SUCCESS', 'ADD_USER_FAILURE'],
    promise: request.put(BACKEND_URL + '/' + houseCode, {
      userId: userId
    })
  }
}
