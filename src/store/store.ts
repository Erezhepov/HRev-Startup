import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as registration} from "./slices/registration.slice";
import {reducer as auth} from "./slices/auth.slice";


const rootReducers = combineReducers({
    registration,
    auth
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch