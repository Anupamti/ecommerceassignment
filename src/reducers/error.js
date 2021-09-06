import * as actionType from '../constants/actionType'

const errorhandle = (state = { errorHandle: null }, action) => {
    switch (action.type) {
        case actionType.ERROR:
            console.log(action?.message)
            // return { ...state, authData: action.data, loading: false, errors: null };
            return { ...state, errorHandle: action.message }
        default:
            return state;
    }
};

export default errorhandle