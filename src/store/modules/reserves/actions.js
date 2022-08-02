export function addReserveRequest(id) {
    return {
        type: "ADD_RESERVE_REQUEST",
        id
    }
}

export function addReserveSuccess(trip) {
    return {
        type: "ADD_RESERVE_SUCCESS",
        trip
    }
}

export function deleteReserve(id) {
    return {
        type: "DELETE_RESERVE",
        id
    }
}

export function updateReserveAmount(id, amount) {
    return {
        type: "UPDATE_RESERVE",
        id,
        amount
    }
}
