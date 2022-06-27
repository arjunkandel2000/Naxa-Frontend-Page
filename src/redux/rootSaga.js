import { takeLatest, put } from 'redux-saga/effects'


function* getProducts() {
    let data = yield fetch('https://admin.naxa.com.np/api/services');
    data = yield data.json();
    console.log('api called')
    yield put({ type: 'SET_PRODUCT_LIST', data })
}
export default function* productSaga() {
    yield takeLatest('PRODUCT_LIST', getProducts)
}