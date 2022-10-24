import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//  Generator function initially called from the user page
//  to get a list of all associated child accounts
function* fetchScore(action) {
    // console.log('In fetch child details SAGA', action.payload);
    const id = action.payload;
    try {
        const response = yield axios.get(`/api/score/${id}`);
        yield put({ type: 'SET_SCORE', payload: response.data[0] }), console.log('Tyring to Set Score with:', response.data);
        yield put({ type: 'FETCH_HIGH_SCORE', payload: id});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* fetchHighScore(action) {
    // console.log('In fetch child details SAGA', action.payload);
    const id = action.payload;
    try {
        const response = yield axios.get(`/api/score/high/${id}`);
        yield put({ type: 'SET_HIGH_SCORE', payload: response.data[0] }), console.log('Trying to Set High Score with:', response.data);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* scoreSaga() {
    yield takeLatest('FETCH_SCORE', fetchScore),
    yield takeLatest('FETCH_HIGH_SCORE', fetchHighScore)
}

export default scoreSaga;