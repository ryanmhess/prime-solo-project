import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* createQuest(action) {
    console.log('In create quest SAGA', action.payload);
    try {
        yield axios.post(`/api/quest`, action.payload);
    } catch (error) {
        console.log('Quest post request failed', error);
    }
}

function* questSaga() {
    yield takeLatest('CREATE_QUEST', createQuest)
}

export default questSaga;