import * as ACTION_TYPES from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });
        case ACTION_TYPES.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });
        case ACTION_TYPES.SUBSTRACT:
            return updateObject(state, { counter: state.counter - action.value });
        case ACTION_TYPES.ADD:
            return updateObject(state, { counter: state.counter + action.value });

        default:
            return state;
    }
}

export default counterReducer;