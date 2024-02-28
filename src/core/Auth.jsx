import React, { createContext, useContext, useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux';
import { addCurrentUser, addUserRoleMenu } from '../../redux/actions/userAction';

const AuthContext = createContext("")

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const getAuth = async () => {
        if (!localStorage) {
            return
        }
        const lsValue = await localStorage.getItem(import.meta.env.VITE_APP_AUTH_LOCAL_STORAGE_KEY)
        if (!lsValue) {
            return
        }

        try {
            const auth = await JSON.parse(lsValue)
            if (auth) {
                // You can easily check auth_token expiration also
                await dispatch(addCurrentUser(auth?.data?.auth_role_profile[0]))
                await dispatch(addUserRoleMenu(auth?.data?.auth_role_menu))
                // console.log(auth,'authauthauthauthauth');
            }
        } catch (error) {
            console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
        }
    }
    React.useMemo(() => {
        getAuth()
    },[])

    return (
        <AuthContext.Provider value={{getAuth}}>
            {children}
        </AuthContext.Provider>
    )
}



export { AuthProvider }
