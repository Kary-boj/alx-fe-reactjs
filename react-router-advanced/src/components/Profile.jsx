import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  const isAuthenticated = false; // Simulate user authentication (set to true if logged in)

  // Protected Route Wrapper
  function ProtectedRoute({ element }) {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return element;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {/* Navigation links to nested routes */}
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProtectedRoute element={<ProfileDetails />} />} />
        <Route path="settings" element={<ProtectedRoute element={<ProfileSettings />} />} />
      </Routes>
    </div>
  );
}

export default Profile;

  