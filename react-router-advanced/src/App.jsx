import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Home Page Component
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/profile">Go to Profile</Link><br />
      <Link to="/blog/1">Go to Blog Post 1</Link>
    </div>
  );
}

// Profile Page Component
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
  const { postId } = useParams();
  return <h1>Blog Post {postId}</h1>;
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
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}


