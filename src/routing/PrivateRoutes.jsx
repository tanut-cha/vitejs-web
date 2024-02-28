import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MasterLayout from '../layout/MasterLayout'
import Home from '../app/Home'
import Example from '../app/Example'
import About from '../app/About'
export default function PrivateRoutes() {
    return (
        <Routes>
            <Route element={<MasterLayout />}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='auth/*' element={<Navigate to='/Home' />} />
                <Route path='Home' element={<Home />} />
                <Route path='About' element={<About />} />
                {/* Pages */}
                {/* <Route path='dashboard' element={<DashboardWrapper />} />
                    <Route path='builder' element={<BuilderPageWrapper />} />
                    <Route path='menu-test' element={<MenuTestPage />} /> */}
                {/* Lazy Modules */}
                <Route
                    path="apps/*"
                    element={
                       <Example/>
                    }
                />
                
                

                {/* <Route path='*' element={<Navigate to='/error/404' />} /> */}
            </Route>
        </Routes>
    )
}
