import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Reducer generates state object with books
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
