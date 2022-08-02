import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"

import rootReducer from "./modules/rootReducer"
import rootSaga from "./modules/rootSaga"

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)

const store = configureStore({
    reducer: { rootReducer },
    middleware: [enhancer]
})

sagaMiddleware.run(rootSaga)

export default store
