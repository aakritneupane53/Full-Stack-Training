import { Navigate, useLocation } from 'react-router-dom';
import useAuth  from '../hooks/useAuth';
import type React from 'react';

export const ProtectedRoute = ({ children }:{chilren:React.ReactNode}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show a loading spinner/skeleton while checking authentication status
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login, but save the current location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};