import { Loading, Error } from "../../../types/store/generalTypes";

export interface UserI {
   email: string
   password: string
}

export interface AuthStateI {
   isAuth: boolean
   errorAuth: Error
   authLoading: Loading
   user: string
}

