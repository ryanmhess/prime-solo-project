import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchCategories() {
    try {
        const response = yield axios.get(`/api/categories`);
        yield put({ type: 'SET_CATEGORIES', payload: response.data }), console.log('response data:', response.data);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* categoriesSaga() {
    yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}

export default categoriesSaga;