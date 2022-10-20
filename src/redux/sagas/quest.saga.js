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
    } catch (error) {
        console.log('Quest update request failed', error);
    }
}

function* fetchQuests(action) {
    console.log('In fetch quest SAGA', action.payload);
    const id = action.payload;
    try {
        const response = yield axios.get(`/api/quest/${id}`);
        yield put({ type: 'SET_QUESTS', payload: response.data }); 
        console.log('SET QUESTS response data:', response.data);
    } catch (error) {
        console.log('Quest update request failed', error);
    }
}

function* questSaga() {
    yield takeLatest('CREATE_QUEST', createQuest),
    yield takeLatest('DELETE_QUEST', deleteQuest),
    yield takeLatest('UPDATE_QUEST', updateQuest),
    yield takeLatest('FETCH_QUESTS', fetchQuests)
}

export default questSaga;