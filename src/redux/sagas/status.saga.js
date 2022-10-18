import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* startStatus(action) {
    console.log('In start status SAGA', action.payload);
    const id = Number(action.payload)
    try {
        yield axios.put(`/api/status/start/${id}`, action.payload);
        yield put({type: 'FETCH_QUEST_DETAILS', payload: action.payload})
    } catch (error) {
        console.log('Quest post request failed', error);
    }
}

function* finishStatus(action) {
    console.log('In finish status SAGA', action.payload);
    const id = Number(action.payload)
    try {
        yield axios.put(`/api/status/finish/${id}`);
        yield put({type: 'FETCH_QUEST_DETAILS', payload: action.payload})
    } catch (error) {
        console.log('Quest delete request failed', error);
    }
}

function* resetStatus(action) {
    console.log('In reset status SAGA', action.payload);
    const id = Number(action.payload)
    try {
        yield axios.put(`/api/status/reset/${id}`, action.payload);
        yield put({type: 'FETCH_QUEST_DETAILS', payload: action.payload})
    } catch (error) {
        console.log('Quest update request failed', error);
    }
}

function* statusSaga() {
    yield takeLatest('SET_START', startStatus),
    yield takeLatest('SET_FINISH', finishStatus),
    yield takeLatest('SET_RESET', resetStatus)
}

export default statusSaga;