import * as api from '../api';
import { AUTH } from '../../constants/actionType';
export const signin = (formData, router) => async (dispatch) => {
    try {
        console.log("form data from action", formData)
        const { data } = await api.signIn(formData);
        // console.log(data)
        dispatch({ type: AUTH, data });
        window.location.reload();
        router.push('/home');

    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        window.location.reload();
        router.push('/home');
    } catch (error) {
        console.log(error);
    }
}

