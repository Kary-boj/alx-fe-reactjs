// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component checks if the user is authenticated
function ProtectedRoute({ element }) {
  const isAuthenticated = false; // Replace with your real authentication check logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return element; // If authenticated, render the passed element (e.g., Profile)
}

export default ProtectedRoute;

  