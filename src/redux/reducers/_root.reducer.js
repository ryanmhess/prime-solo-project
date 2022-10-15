import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import children from './children.reducer';
import child from './child.reducer';
import details from './details.reducer';
import categories from './categories.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  children, // will have username of children if logged in account is parent
  child, // will have just the child account info
  details,
  categories,
});

export default rootReducer;
