import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// import { useSelector } from 'react-redux';

//  Generator function initially called from the user page
//  to get a list of all associated child accounts
function* fetchQuestDetails(action) {
    console.log('In fetch quest details SAGA', action.payload);
    const id = action.payload;
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };
        const response = yield axios.get(`/api/details/${id}`, config);
        yield put({ type: 'SET_QUEST_DETAILS', payload: response.data[0] }), console.log('response data:', response.data);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* detailsSaga() {
    yield takeLatest('FETCH_QUEST_DETAILS', fetchQuestDetails)
}

export default detailsSaga;