import { START_LOADING, CREATE, FETCH_DATA, DELETE, SELECT, ADDTOCART } from "../../constants/actionType"
import * as api from "../api/index";

export const getUserDetails = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getUserData();

        // console.log(data, "this is user details")
        // const { userData } = data
        dispatch({ type: FETCH_DATA, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createUser = (form) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createUser(form);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }

}

export const deleteUserData = (id) => async (dispatch) => {
    try {
        await api.deleteData(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};

export const selectId = (id) => async (dispatch) => {
    try {
        dispatch({ type: SELECT, payload: id })
    }
    catch (error) {
        console.log(error.message);
    }
}

