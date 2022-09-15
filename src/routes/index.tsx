import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth, Contacts } from "../modules"
import { useTypedSelectorHook } from "../hooks/typedStoreHooks";
import { MainLayout } from "../layouts";
const RoutesApp = () => {
   const { isAuth } = useTypedSelectorHook(state => state.auth)
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route path="/" element={<Navigate to={isAuth ? "/contacts" : "/auth"} replace/>}/>
               {isAuth
                  ? <Route
                     path="contacts"
                     element={<Contacts/>}
                  />
                  : <Route
                     path="auth"
                     element={<Auth/>}
                  />
               }
            </Route>
            <Route path="*" element={<Navigate to={isAuth ? "/contacts" : "/auth"} replace/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp