import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import childrenSaga from './children.saga';
import childSaga from './child.saga';
import detailsSaga from './details.saga';
import categoriesSaga from './categories.saga';
import questSaga from './quest.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    childrenSaga(),
    childSaga(),
    detailsSaga(),
    categoriesSaga(),
    questSaga(),
  ]);
}
