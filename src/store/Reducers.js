const initState = {
    name1: null,
    name2: null,
    percentage: null,
    resultText: null,
    progress: 0
}

export default function rootReducer(state = initState, action) {
    switch (action.type) {
        case "SHOW":
            return {
                name1: action.name1,
                name2: action.name2,
                percentage: action.percentage,
                resultText: action.txt,
                progress: 2
            }
        case "CALCULATING":
            return {
                ...state,
                progress: 1
            }
        case "RESET":
            return initState
        default: return state;
    }
}