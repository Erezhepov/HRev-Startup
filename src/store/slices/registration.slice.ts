import {createSlice} from "@reduxjs/toolkit";
import {registrationThunk} from "../thunks/registration.thunk";
import {IRegistrationState} from "../../models/registration.models";

const initialState: IRegistrationState = {
    loading: false,
    error: null,
    userId: null,
    data: {},
}

export const registrationSlice = createSlice({
    name: 'registrationSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registrationThunk.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(registrationThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload ? payload : null
        })
        builder.addCase(registrationThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.error = null
            state.userId = payload.user_id ? payload.user_id : null
        })
    }
})

export const {reducer} = registrationSlice