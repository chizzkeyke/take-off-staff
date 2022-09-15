import React from "react"
import classnames from "classnames/bind"
import styles from "./styles.module.css"
import { useForm, FormProvider } from "react-hook-form";
import { UserType } from "./types";
import { ControlledInput, Loader } from "../../components";
import { useTypedDispatchHook, useTypedSelectorHook } from "../../hooks/typedStoreHooks";
import { AuthActionThunk, UserDataRegister } from "../../thunk/auth/authActionThunk";
import { Button } from "antd";

const cx = classnames.bind(styles)

const Auth: React.FC = () => {
   const { authLoading, errorAuth } = useTypedSelectorHook(state => state.auth)
   const dispatch = useTypedDispatchHook()
   const methods = useForm<UserType>({
      defaultValues: {
         email: "",
         password: ""
      }
   })
   const { watch } = methods
   const email = watch("email")
   const password = watch("password")

   const buttonIsDisabled = !email || !password

   const auth = (path: 'register' | 'login') => {
      const response: UserDataRegister = {
         email,
         password
      }
      dispatch(AuthActionThunk(response, path))
   }

   if(authLoading) {
      return (
         <div className={cx("container")}>
            <Loader/>
         </div>
      )
   }

   return (
      <FormProvider {...methods}>
         <div className={cx("container")}>
            <div className={cx("form-container")}>
               <h2>Auth</h2>
               <ControlledInput
                  name="email"
                  type="email"
                  placeholder="Email"
               />
               <ControlledInput
                  name="password"
                  type="password"
                  placeholder="Password"
               />
               {errorAuth &&
                  <div className={cx("error")}>
                     {errorAuth}
                  </div>
               }
               <div className={cx("container-buttons")}>
                  <Button
                     disabled={buttonIsDisabled}
                     htmlType="button"
                     className={cx("btn-submit")}
                     onClick={() => auth('login')}
                  >
                     Log In
                  </Button>
                  <Button
                     disabled={buttonIsDisabled}
                     htmlType="submit"
                     className={cx("btn-submit")}
                     onClick={() => auth('register')}
                  >
                     Register
                  </Button>
               </div>
            </div>
         </div>
      </FormProvider>
   )
}

export default Auth

