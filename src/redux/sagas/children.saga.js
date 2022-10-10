import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// import { useSelector } from 'react-redux';

//  Generator function initially called from the user page
//  to get a list of all associated child accounts
function* fetchChildren(action) {
    console.log('In fetch children SAGA', action.payload);
    const id = action.payload;
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };
        const response = yield axios.get(`/api/user/${id}`, config);
        yield put({ type: 'SET_CHILDREN', payload: response.data }), console.log('response data:', response.data);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

//  Generator function called from the user page
//  when the [Remove] button is clicked in order
//  to remove a child account
function* removeChild(action) {
    console.log('In remove child SAGA', action.payload);
    const id = action.payload.childIdToRemove;
    const userId = action.payload.userId;
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            };
        const response = yield axios.delete(`/api/user/${id}`, config);
        yield put({ type: 'FETCH_CHILDREN', payload: userId });
    } catch (error) {
        console.log('User delete request failed', error);
    }
}

function* childrenSaga() {
    yield takeLatest('FETCH_CHILDREN', fetchChildren),
    yield takeLatest('REMOVE_CHILD', removeChild);
}

export default childrenSaga;