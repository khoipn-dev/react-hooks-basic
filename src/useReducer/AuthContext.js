import React, {useReducer} from "react";
import {authReducer} from "./authReducer";

export const AuthContext = React.createContext();

const initialAuth = { user: {}, expiresAt: null };
export function AuthProvider(props) {
    const {children} = props;
    const [auth, dispatch] = useReducer(authReducer, initialAuth);
    const store = {auth, dispatch};

    return (
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    );
}