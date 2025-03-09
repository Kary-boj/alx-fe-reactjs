function BlogPost() {
    const { postId } = useParams();
    return <h1>Blog Post {postId}</h1>;
  }
  
  <Routes>
    <Route path="/blog/:postId" element={<BlogPost />} />
  </Routes>
  