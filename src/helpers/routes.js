import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }){
    return(
        !user ? children : <Navigate to={loggedInPath} replace />
    )
}

export function ProtectedRoute({ children, user, authPath, ...rest }){
    return(
        user ? <Outlet {...rest}>{children}</Outlet> : <Navigate to={authPath} replace />
    )
}