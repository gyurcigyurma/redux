import * as ACTION_TYPES from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ACTION_TYPES.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ACTION_TYPES.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case ACTION_TYPES.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case ACTION_TYPES.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case ACTION_TYPES.DELETE_RESULT:
            const updatedArray = state.results.filter((result) => {
                return result.id !== action.resultElementId
            })

            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;