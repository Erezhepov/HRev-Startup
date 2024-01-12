
export interface IRegistrationState {
    loading: boolean
    error: null | string
    data: any
    userId: null | number
}

export interface IRegistrationResponse {
    message: string
    user_id: number
}
export interface IRegistrationData {
    role: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
}