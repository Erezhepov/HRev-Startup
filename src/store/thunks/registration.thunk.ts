import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../api/api";


export const authThunk = createAsyncThunk('auth', async () => {
    try {
        const response = await $api.post('users/')
    }catch (e){

    }
})