import { Error } from "../../../types/store/generalTypes";

export enum AuthActions {
   START_LOADING_AUTH = "start loading auth",
   END_LOADING_AUTH = "end loading auth",
   SUCCESS_AUTH = "success auth",
   ERROR_AUTH = "error auth",
   LOGOUT = "logout",
}

interface AuthStartLoadingI {
   type: AuthActions.START_LOADING_AUTH
}

interface AuthEndLoadingI {
   type: AuthActions.END_LOADING_AUTH
}

interface AuthSuccessI {
   type: AuthActions.SUCCESS_AUTH
   payload: string
}

interface AuthErrorI {
   type: AuthActions.ERROR_AUTH
   payload: Error
}

interface AuthLogoutI {
   type: AuthActions.LOGOUT
}


export type AuthActionsTypes =
   AuthStartLoadingI |
   AuthEndLoadingI |
   AuthSuccessI |
   AuthErrorI |
   AuthLogoutI
