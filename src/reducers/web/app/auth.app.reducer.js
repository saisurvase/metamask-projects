import { authAction } from "../../../actions";

const initialState = {
    authData: {}
}

export default function authAppReducer(state = initialState, action) {
    switch(action.type) {
        case authAction.SET_WEB_USER_INFO:
            return { authData: action.payload }
        default:
            return state
    }
}