import { combineReducers } from 'redux';
import BooksReduser from './reducer-books';
import ActiveBook from './reducer-active-book';

const rootReducer = combineReducers({
  books: BooksReduser,
  activeBook: ActiveBook
});

export default rootReducer;
