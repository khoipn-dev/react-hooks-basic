import React, {useContext} from 'react';
import {AuthContext} from "./AuthContext";

function useAuth() {
    const {auth, dispatch} = useContext(AuthContext);

    const login = () => {
        // Do something
        dispatch({ type: "login" });
    };

    const logout = () => {
        // Do something
        dispatch({ type: "logout" });
    };

    const isAuthenticated =  auth.expiresAt && new Date().getTime() < auth.expiresAt;

    return {
        user: auth.user,
        login,
        logout,
        isAuthenticated
    };
}

export default useAuth;