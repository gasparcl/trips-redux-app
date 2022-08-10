import produce from "immer"

export default function reserves(state = [], action) {
    switch (action.type) {
        case "ADD_RESERVE_SUCCESS":
            // o spread de state (...state) apenas copia tudo que tem dentro
            //da array de state e adiciona à array o segundo parametro(action.trip)
            return produce(state, (draft) => {
                draft.push(action.trip)
            })

        case "DELETE_RESERVE":
            return produce(state, (draft) => {
                const tripIndex = draft.findIndex(
                    (trip) => trip.id === action.id
                )

                if (tripIndex >= 0) draft.splice(tripIndex, 1)
            })

        case "UPDATE_RESERVE_SUCCESS":
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
