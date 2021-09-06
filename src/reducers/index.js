import { combineReducers } from "redux";

import auth from './auth'
import userDetails from './userDetails'
import errorhandle from './error'
import cartData from './cartData'

export default combineReducers({
    auth,
    userDetails,
    errorhandle,
    cartData,
})