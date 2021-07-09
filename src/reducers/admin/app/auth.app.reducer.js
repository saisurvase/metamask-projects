import { authAction } from "../../../actions";

const initialState = {
    token: null
}

export default function authAppReducer(state = initialState, action) {
    switch(action.type) {
        case authAction.SET_TOKEN:
            console.log('action============', action)
            return { token: action.payload }
        default:
            return state
    }
}