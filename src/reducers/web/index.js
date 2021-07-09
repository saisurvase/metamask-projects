import { combineReducers } from 'redux'

import appReducer from './app'

const webAppReducer = combineReducers({
    app: appReducer
})

export default webAppReducer