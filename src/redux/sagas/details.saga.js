import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//  Generator function initially called from the user page
//  to get a list of all associated child accounts
function* fetchQuestDetails(action) {
    // console.log('In fetch quest details SAGA', action.payload);
    const id = action.payload;
    try {
        const response = yield axios.get(`/api/details/${id}`);
        yield put({ type: 'SET_QUEST_DETAILS', payload: response.data[0] }), console.log('response data:', response.data);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* updateQuestDetails(action) {
    // console.log('In update quest details SAGA', action.payload);
    const id = action.payload.id;
    try {
        yield axios.put(`/api/details/${id}`, action.payload);
    } catch (error) {
        console.log('User update request failed', error);
    }
}

function* detailsSaga() {
    yield takeLatest('FETCH_QUEST_DETAILS', fetchQuestDetails),
    yield takeLatest('UPDATE_QUEST_DETAILS', updateQuestDetails)
}

export default detailsSaga;