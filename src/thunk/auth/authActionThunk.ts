import { authRequests } from "../../api/api.config";
import { AuthActionsTypes } from "../../store/auth/types/actionTypes";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store/store";
import {
   endLoadingAuth,
   errorAuth,
   logout,
   startLoadingAuth,
   successAuth
} from "../../store/auth/actions";
import axios, { AxiosError } from "axios";

export interface UserDataRegister {
   email: string
   password: string
}

export const AuthActionThunk = (userData: UserDataRegister, type: string): ThunkAction<Promise<void>, RootState, unknown, AuthActionsTypes> =>
   async (dispatch: Dispatch<AuthActionsTypes>) => {
      dispatch(startLoadingAuth())
      try {
         const { accessToken, user } = await authRequests.register(type, userData)
         console.log(user)
         dispatch(successAuth(accessToken))
         localStorage.setItem("token", accessToken)
      } catch (e) {
         if(axios.isAxiosError(e)) {
            const serverError = e?.response?.data as string
            dispatch(errorAuth(serverError || 'Error'))
         }
      } finally {
         dispatch(endLoadingAuth())
      }
   };

export const LogoutThunk = (): ThunkAction<Promise<void>, RootState, unknown, AuthActionsTypes> =>
   async (dispatch: Dispatch<AuthActionsTypes>) => {
      localStorage.removeItem("token")
      dispatch(logout())
   }