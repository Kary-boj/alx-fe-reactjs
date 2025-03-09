import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook


function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth(); // Use the useAuth hook to get authentication status

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return element; // If authenticated, render the passed element (e.g., Profile)
}

export default ProtectedRoute;


