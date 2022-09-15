import { AuthActions, AuthActionsTypes } from "../types/actionTypes";

const startLoadingAuth = (): AuthActionsTypes => ({
   type: AuthActions.START_LOADING_AUTH
})

const endLoadingAuth = (): AuthActionsTypes => ({
   type: AuthActions.END_LOADING_AUTH
})

const successAuth = (user: string): AuthActionsTypes => ({
   type: AuthActions.SUCCESS_AUTH,
   payload: user
})

const errorAuth = (error: string): AuthActionsTypes => ({
   type: AuthActions.ERROR_AUTH,
   payload: error
})

const logout = (): AuthActionsTypes => ({
   type: AuthActions.LOGOUT
})


export {
   startLoadingAuth,
   endLoadingAuth,
   successAuth,
   errorAuth,
   logout
}