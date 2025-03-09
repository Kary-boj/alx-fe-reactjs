import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import BlogPost from './BlogPost';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:postId" element={<BlogPost />} /> {/* Keep this route */}
      </Routes>
    </Router>
  );
}




