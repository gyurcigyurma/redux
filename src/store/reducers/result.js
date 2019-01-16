import * as ACTION_TYPES from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {       
        case ACTION_TYPES.STORE_RESULT:
        debugger
            return {
                ...state,
                //results: state.results.concat({ id: new Date(), value: state.counter })
                results: state.results.concat({ id: new Date(), value: action.result })
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

export default resultReducer;