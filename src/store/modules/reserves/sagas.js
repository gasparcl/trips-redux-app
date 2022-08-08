import { select, call, put, all, takeLatest } from "redux-saga/effects"
import api from "../../../services/api"
import { addReserveSuccess, updateReserveAmountSuccess } from "./actions"

function* addToReserve({ id }) {
    // function* em sagas é como a async function(){} comum
    const tripExists = yield select((state) =>
        state.reserves.find((trip) => trip.id === id)
    )

    const tripsStock = yield call(api.get, `/stock/${id}`) // response

    const stockAmount = tripsStock.data.amount

    const currentStock = tripExists ? tripExists.amount : 0

    const amount = currentStock + 1

    if (amount > stockAmount) {
        alert("Não há mais reservas disponíveis")
        return
    }

    if (tripExists) {
        yield put(updateReserveAmountSuccess(id, amount))
    } else {
        const response = yield call(api.get, `trips/${id}`) // yield em sagas é como o await de async func
        const data = {
            ...response.data,
            amount: 1
        }

        yield put(addReserveSuccess(data))
    }
}

function* updateAmount({ id, amount }) {}

export default all([
    takeLatest("ADD_RESERVE_REQUEST", addToReserve),
    takeLatest("UPDATE_RESERVE_REQUEST", updateAmount)
])
