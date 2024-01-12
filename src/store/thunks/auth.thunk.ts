import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../api/api";
import {IAuthData} from "../../models/auth.models";


export const authThunk = createAsyncThunk<any, IAuthData, {rejectValue: string | null}>
('register', async (dataItem, {rejectWithValue}) => {
    try {
        debugger
        const response = await $api.post('users/token/', dataItem)
        const data = response.data
        console.log(data)
        return data

    }catch (e: any){
        console.log(e)
        return rejectWithValue(e?.response?.data?.Error || 'Ошибка при авторизации')
    }
})