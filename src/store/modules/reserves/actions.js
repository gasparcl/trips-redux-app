export function addReserve(trip) {
    return {
        type: "ADD_RESERVE",
        trip,
    }
}

export function deleteReserve(id) {
    return {
        type: "DELETE_RESERVE",
        id,
    }
}
