export default function reserves(state = [], action) {
    switch (action.type) {
        case "ADD_RESERVE":
            // o spread de state (...state) apenas copia tudo que tem dentro
            //da array de state e adiciona à array o segundo parametro(action.trip)
            return [...state, action.trip]
        default:
            return state
    }
}
