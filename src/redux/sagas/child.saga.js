import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// import { useSelector } from 'react-redux';

//  Generator function initially called from the user page
//  to get a list of all associated child accounts
function* fetchChildDetails(action) {
    console.log('In fetch child details SAGA', action.payload);
    const id = action.payload;
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };
        const response = yield axios.get(`/api/user/child/details/${id}`, config);
        yield put({ type: 'SET_CHILD_DETAILS', payload: response.data }), console.log('response data:', response.data);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* childSaga() {
    yield takeLatest('FETCH_CHILD_DETAILS', fetchChildDetails)
}

export default childSaga;