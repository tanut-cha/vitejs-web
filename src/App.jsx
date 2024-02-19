import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentUser } from '../redux/actions/userAction';
import LoadingScreen from './components/MUI/LoadingScreen';
import { SplashScreenProvider } from './core/SplashScreen';

function App() {
  const dispatch = useDispatch();
  const isLoadding = useSelector(
    (state) => state?.loading_screen?.loading
  );

  const getAuth = () => {
    if (!localStorage) {
      return
    }
    const lsValue = localStorage.getItem(import.meta.env.VITE_APP_AUTH_LOCAL_STORAGE_KEY)
    if (!lsValue) {
      return
    }

    try {
      const auth = JSON.parse(lsValue)
      if (auth) {
        // You can easily check auth_token expiration also
        dispatch(addCurrentUser(auth?.data?.auth_role_profile[0]))
      }
    } catch (error) {
      console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
    }
  }
  React.useEffect(() => {
    getAuth()
  }, [])
  
  return (
    <SplashScreenProvider>
      {isLoadding && <LoadingScreen loading={isLoadding} />}
      <Outlet />
    </SplashScreenProvider>

  )
}

export default App
