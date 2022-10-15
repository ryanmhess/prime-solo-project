import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);
    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload });
    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

//  Generator function initially called from the user page
//  on the registration form in order to register a new
//  child account
function* registerChild(action) {
  // console.log('In register child SAGA', action.payload.parent_id);
  const id = action.payload.parent_id;
  try {
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
    yield axios.post(`/api/user/register/${id}`, action.payload);
    yield put({ type: 'FETCH_CHILDREN', payload: id });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser),
  yield takeLatest('REGISTER_CHILD', registerChild);
}

export default registrationSaga;
