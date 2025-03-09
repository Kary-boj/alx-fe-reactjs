import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

// Home Page Component
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/profile">Go to Profile</Link><br />
      <Link to="/blog/1">Go to Blog Post 1</Link> {/* Link to a dynamic blog post */}
    </div>
  );
}

// Profile Page Component
function Profile() {
  const isAuthenticated = localStorage.getItem('authToken') !== null; // Replace with real authentication logic

  return (
    <div>
      <h1>Profile Page</h1>

      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProtectedRoute element={<ProfileDetails />} isAuthenticated={isAuthenticated} />} />
        <Route path="settings" element={<ProtectedRoute element={<ProfileSettings />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
}

// Profile Details Component
function ProfileDetails() {
  return <h2>Profile Details Page</h2>;
}

// Profile Settings Component
function ProfileSettings() {
  return <h2>Profile Settings Page</h2>;
}

// Dynamic Route for Blog Post
function BlogPost() {
  const { id } = useParams(); // Capture dynamic `id` from the URL
  return <h1>Blog Post {id}</h1>; // Display Blog Post based on `id`
}

// Login Page (for authentication)
function Login() {
  return <h1>Please log in to access protected routes.</h1>;
}

// Main App Component with Routes
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Correctly defined dynamic route */}
      </Routes>
    </Router>
  );
}


