import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,

}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase()
    }
})