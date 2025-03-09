import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

function ProfileDetails() {
  return <h2>Profile Details Page</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings Page</h2>;
}

export default Profile;

  