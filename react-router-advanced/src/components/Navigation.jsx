import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile/details">Profile Details</Link>
      <Link to="/blog/1">Blog Post 1</Link> {/* Example link to a blog post */}
    </nav>
  );
}

export default Navigation;
