import { combineReducers } from 'redux'

import appReducer from './app'

const adminAppReducer = combineReducers({
    app: appReducer
})

export default adminAppReducer