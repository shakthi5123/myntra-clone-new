import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({children}) {
    const { user } = useAuth();

    if(!user){
        alert("Please login to continue.")
        return <Navigate to="/login" />;
    }

  return children;
}
