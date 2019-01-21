import * as actionTypes from './actionTypes';


export const saveResult = result => (
    {
        type: actionTypes.STORE_RESULT,
        result
    }
)

export const storeResult = (result) => {
    return function (dispatch, getState) {
        setTimeout(() => {
            const oldCount = getState().ctr.counter;
            console.log( oldCount + ' [ reached old count (dont overuse) or pass here as an argument in mapDispatchToProps ]')
            dispatch(saveResult(result))
        }, 2000);
    }


}

export const deleteResult = (resultElementId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId
    }
}