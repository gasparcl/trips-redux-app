import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./modules/rootReducer"
import rootSaga from "./modules/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
