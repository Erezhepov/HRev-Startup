import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../models/auth.models";

const initialState: IAuthState = {
    loading: false,
    error: null,
    access: null
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    // extraReducers: builder => {
    //     builder.addCase(registrationThunk.pending, state => {
    //         state.loading = true
    //         state.error = null
    //     })
    //     builder.addCase(registrationThunk.rejected, (state, {payload}) => {
    //         state.loading = false
    //         state.error = payload ? payload : null
    //     })
    //     builder.addCase(registrationThunk.fulfilled, (state, {payload}) => {
    //         state.loading = false
    //         state.error = null
    //         state.userId = payload.user_id ? payload.user_id : null
    //     })
    // }
})

export const {reducer} = authSlice