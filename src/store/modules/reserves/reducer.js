import produce from "immer"

export default function reserves(state = [], action) {
    switch (action.type) {
        case "ADD_RESERVE_SUCESS":
            // o spread de state (...state) apenas copia tudo que tem dentro
            //da array de state e adiciona à array o segundo parametro(action.trip)
            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip) => trip.id === action.trip.id
                )

                tripIndex >= 0
                    ? draft[tripIndex].amount++
                    : draft.push({ ...action.trip, amount: 1 })
            })

        case "DELETE_RESERVE":
            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip) => trip.id === action.id
                )

                if (tripIndex >= 0) draft.splice(tripIndex, 1)
            })

        case "UPDATE_RESERVE":
            if (action.amount <= 0) return state

            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip) => trip.id === action.id
                )

                if (tripIndex >= 0)
                    draft[tripIndex].amount = Number(action.amount)
            })

        default:
            return state
    }
}
