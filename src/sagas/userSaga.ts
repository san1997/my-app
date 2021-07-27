import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

function* watchFetchUsers(): Generator<StrictEffect> {
    yield takeEvery("fetchUser", fetchUsers);
}

function* fetchUsers() {
    
    const requestURL = "/users";
    const request = axios.create({ baseURL: "https://jsonplaceholder.typicode.com"});
    try {
        const response: AxiosResponse = yield call(request, requestURL);        
        yield put({type: "fetchUserSuccess", data: response.data ? response.data : []});
    } catch (err) {     
        yield put({type: "fetchUserFailure", err: err});
    }
}

export default watchFetchUsers;