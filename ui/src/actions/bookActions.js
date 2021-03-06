import axios from 'axios';

//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';



// ./src/actions/bookActions.js


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export const createBook = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'CREATE_BOOK',
    // Payload
    book: book
  }
};

export function fetchBooks() {
  const books = axios({
    method: 'get',
    url: `http://localhost:5000/api/values`,
    headers: []
  });  

  return {
    type: 'FETCH_BOOKS',
    books: booksno
  };
}



export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

