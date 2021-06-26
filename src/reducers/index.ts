import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './auth'
import streamReducer from './stream'


export default combineReducers({
    auth:authReducer,
    streams: streamReducer,
    form : formReducer
})