import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../api/api";
import {IRegistrationData, IRegistrationResponse} from "../../models/registration.models";


export const registrationThunk = createAsyncThunk<IRegistrationResponse, IRegistrationData, {rejectValue: string | null | any}>
('register', async (dataItem, {rejectWithValue}) => {
    try {
        const response = await $api.post('users/person_registration/', dataItem)
        const data = response.data
        return data

    }catch (e: any){
        return rejectWithValue(e?.response?.data?.Error || 'Ошибка при регистрации')
    }
})