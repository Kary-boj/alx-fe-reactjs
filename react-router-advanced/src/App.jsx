import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import BlogPost from './components/BlogPost'; // Import BlogPost component
import Login from './components/Login'; // Import Login component
import Profile from './components/Profile'; // Import Profile component
import Navigation from './components/Navigation'; // Import Navigation component

function App() {
  return (
    <Router>
      <div>
        {/* Add the navigation links */}
        <Navigation />

        <Routes>
          {/* Home route */}
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Dynamic Blog Post route */}
          <Route path="/blog/:postId" element={<BlogPost />} />

          {/* Protected Profile route */}
          <Route
            path="/profile/*"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


