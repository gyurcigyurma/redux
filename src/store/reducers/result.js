import * as ACTION_TYPES from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((result) => {
        return result.id !== action.resultElementId
    })
    return updateObject(state, { results: updatedArray });
}


const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
        case ACTION_TYPES.DELETE_RESULT: return deleteResult(state, action);
        default:
            return state;
    }
}

export default resultReducer;