function ProtectedRoute({ element }) {
    const isAuthenticated = false;  // Change this as per your auth logic
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return element;
  }
  
  <Routes>
    <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
  </Routes>
  