import { combineReducers } from 'redux';
import BookReducer from './books_reducer'
import ActiveBookReducer from './active_book_reducer'
const rootReducer = combineReducers({
  books: BookReducer,
  active_book: ActiveBookReducer
});

export default rootReducer;
