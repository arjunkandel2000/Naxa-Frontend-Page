import { takeLatest, put } from 'redux-saga/effects'
function* getProducts() {
    try{
    let data = yield fetch('https://admin.naxa.com.np/api/services');
    data = yield data.json();
    yield put({ type: 'SET_PRODUCT_LIST', data })
    }
    catch(err){
        yield put({type: 'FAILED_PRODUCT_LIST', message:err.message})
    }
}
export default function* productSaga() {
    yield takeLatest('PRODUCT_LIST', getProducts)
}