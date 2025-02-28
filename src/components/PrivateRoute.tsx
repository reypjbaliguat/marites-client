import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
