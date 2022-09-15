import { AuthStateI } from "../types/reducerTypes";
import { AuthActions, AuthActionsTypes } from "../types/actionTypes";

const token = localStorage.getItem("token")

const initialStateAuth: AuthStateI = {
   isAuth: !!token,
   authLoading: false,
   errorAuth: null,
   user: "" as string
}

const authReducer = (state = initialStateAuth, action: AuthActionsTypes): AuthStateI => {
   switch (action.type) {
      case AuthActions.START_LOADING_AUTH: {
         return {
            ...state,
            authLoading: true
         }
      }
      case AuthActions.END_LOADING_AUTH: {
         return {
            ...state,
            authLoading: false
         }
      }
      case AuthActions.SUCCESS_AUTH: {
         return {
            ...state,
            isAuth: true,
            user: action.payload,
            errorAuth: ''
         }
      }
      case AuthActions.ERROR_AUTH: {
         return {
            ...state,
            errorAuth: action.payload,
         }
      }
      case AuthActions.LOGOUT: {
         return {
            isAuth: false,
            authLoading: false,
            errorAuth: null,
            user: ""
         }
      }
      default : return state
   }
}

export default authReducer

