import { combineReducers } from 'redux'

import authAppReducer from './auth.app.reducer'

const appReducer = combineReducers({
    auth: authAppReducer
})

export default appReducer