import { ADDTOCART, GETCART, REMOVEFROMCART, START_LOADING } from "../../constants/actionType"
import * as api from "../api/index";

export const ADDToCart = (form) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.addToCart(form);

        dispatch({ type: ADDTOCART, payload: data })
    }
    catch (error) {
        console.log(error.message);
    }
}

export const RemoveFromCart = (id) => async (dispatch) => {
    try {
        console.log(id)
        await api.removefromCart(id);

        dispatch({ type: REMOVEFROMCART, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};


export const GetCart = () => async (dispatch) => {
    try {
        dispatch({ type: GETCART });
        const { data } = await api.getCart();

        // console.log(data, "this is user details")
        // const { userData } = data
        dispatch({ type: GETCART, payload: data });
    } catch (error) {
        console.log(error);
    }
}