import { Action, applyMiddleware, createStore ,compose} from 'redux';

import reducers from '../reducers'
import thunk,{ThunkDispatch} from 'redux-thunk';

declare global {
    interface Window {
        gapi: gapi.auth2.ClientConfig | gapi.auth2.AuthResponse;
        auth: gapi.auth2.GoogleAuth;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

export type ThunkDispatchType = ThunkDispatch<RootStateType,any,Action>