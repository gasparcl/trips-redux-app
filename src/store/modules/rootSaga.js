import { all } from "redux-saga/effects"

import reserve from "./reserves/sagas"

export default function* rootSaga() {
    yield all([reserve])
}
