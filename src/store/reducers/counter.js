import * as ACTION_TYPES from '../actions';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export default counterReducer;