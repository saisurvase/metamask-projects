import { combineReducers } from 'redux'

import adminAppReducer from './admin'
import webAppReducer from './web'

const reducers = combineReducers({
    admin: adminAppReducer,
    web: webAppReducer
})

export { reducers }