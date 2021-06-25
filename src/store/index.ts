import { Action, applyMiddleware, createStore } from 'redux';

import reducers from '../reducers'
import thunk,{ThunkDispatch} from 'redux-thunk';

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

export type ThunkDispatchType = ThunkDispatch<RootStateType,any,Action>