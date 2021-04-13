import {AnyAction, applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, {ThunkAction} from "redux-thunk"
import {reducers} from "../reducers/reducers";


export const configureStore = () => createStore(reducers, composeWithDevTools(
        applyMiddleware(thunk)
    ))

export const store = configureStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >

