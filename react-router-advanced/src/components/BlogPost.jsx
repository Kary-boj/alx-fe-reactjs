import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Capture dynamic `postId` from the URL
  return <h1>Blog Post {postId}</h1>; // Display Blog Post based on `postId`
}

export default BlogPost;
