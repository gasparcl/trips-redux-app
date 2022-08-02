import { call, put, all, takeLatest } from "redux-saga/effects"
import api from "../../../services/api"

import { addReserveSuccess } from "./actions"

function* addToReserve({ id }) {
    // function* em sagas é como a async function(){} comum
    const response = yield call(api.get, `trips/${id}`) // yield em sagas é como o await de async func

    yield put(addReserveSuccess(response.data))
}

export default all([takeLatest("ADD_RESERVE_REQUEST", addToReserve)])
