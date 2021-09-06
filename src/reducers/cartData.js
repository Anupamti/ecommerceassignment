import { ADDTOCART, GETCART, REMOVEFROMCART } from "../constants/actionType"

const State = (state = { isLoading: true, cart: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };

        case GETCART:
            return { ...state, cart: action.payload };

        case REMOVEFROMCART:
            return state.filter((s) => s._id !== action.payload);

        case ADDTOCART:
            return { ...state, cart: [...state.data, action.payload] };
        default:
            return state;
    }
};

export default State

