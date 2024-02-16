import React from 'react'
import App from '../App'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import AuthPage from '../auth/core/AuthPage'
import { ErrorsPage } from '../errors'
import { Logout } from '../auth/core/Logout'
import { useDispatch, useSelector } from "react-redux";

export default function AppRoutes() {
    const { BASE_URL } = import.meta.env
    const currentuser = useSelector((state)=>state?.user?.user)
    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                 <Route element={<App />}>
                    <Route path='error/*' element={<ErrorsPage />} />
                    <Route path='logout' element={<Logout />} />
                    {currentuser ? (
                        <>
                            <Route path='/*' element={<PrivateRoutes />} />
                            <Route index element={<Navigate to='/apps/user-management' />} />
                        </>
                    ) : (
                        <>
                            <Route path='auth/*' element={<AuthPage />} />
                            <Route path='*' element={<Navigate to='/auth' />} />
                        </>
                    )}  

                     {/* <Route path='/*' element={<PrivateRoutes />} />
                    <Route index element={<Navigate to='/apps' />} />

                    <Route path='auth/*' element={<AuthPage />} />
                    <Route path='*' element={<Navigate to='/auth' />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
