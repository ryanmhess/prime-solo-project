import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* createQuest(action) {
    // console.log('In create quest SAGA', action.payload);
    try {
        yield axios.post(`/api/quest`, action.payload);
    } catch (error) {
        console.log('Quest post request failed', error);
    }
}

function* deleteQuest(action) {
    // console.log('In delete quest SAGA', action.payload);
    const id = action.payload
    try {
        yield axios.delete(`/api/quest/${id}`);
    } catch (error) {
        console.log('Quest delete request failed', error);
    }
}

function* updateQuest(action) {
    console.log('In update quest SAGA', action.payload);
    try {
        yield axios.put(`/api/quest`, action.payload);
    } catch (error) {
        console.log('Quest delete request failed', error);
    }
}

function* questSaga() {
    yield takeLatest('CREATE_QUEST', createQuest),
    yield takeLatest('DELETE_QUEST', deleteQuest),
    yield takeLatest('UPDATE_QUEST', updateQuest)
}

export default questSaga;