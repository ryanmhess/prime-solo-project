import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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
    const id = action.payload.id
    try {
        yield axios.put(`/api/quest/${id}`, action.payload);
        yield put({ type: 'UPDATE_SCORE', payload: action.payload});
    } catch (error) {
        console.log('Quest update request failed', error);
    }
}

function* updateScore(action) {
    console.log('In update quest score SAGA', action.payload);
    const id = action.payload.id
    try {
        yield axios.put(`/api/quest/score/${id}`, action.payload);
    } catch (error) {
        console.log('Quest update request failed', error);
    }
}

function* questSaga() {
    yield takeLatest('CREATE_QUEST', createQuest),
    yield takeLatest('DELETE_QUEST', deleteQuest),
    yield takeLatest('UPDATE_QUEST', updateQuest),
    yield takeLatest('UPDATE_SCORE', updateScore)
}

export default questSaga;