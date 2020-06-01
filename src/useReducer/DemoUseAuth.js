import React from 'react';
import useAuth from "./useAuth";

function DemoUseAuth() {
    const { user, isAuthenticated, login, logout } = useAuth();

    return (
        <div>
            {isAuthenticated && <p>{user.username}</p>}
            {!isAuthenticated && <button onClick={login}>Login</button>}
            {isAuthenticated && <button onClick={logout}>Logout</button>}
        </div>
    );
}

export default DemoUseAuth;