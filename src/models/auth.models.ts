export interface IAuthState{
    loading: boolean
    error: string | null
    access: string | null
}

export interface IAuthData{
    email: string
    password: string
}