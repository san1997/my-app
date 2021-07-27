import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import watchFetchUsers from "../sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware, thunk)
)

sagaMiddleware.run(watchFetchUsers);
