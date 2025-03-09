function Profile() {
    return (
      <div>
        <h1>Profile Page</h1>
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    );
  }
  
  function ProfileDetails() {
    return <h2>Profile Details</h2>;
  }
  
  function ProfileSettings() {
    return <h2>Profile Settings</h2>;
  }
  
  <Routes>
    <Route path="/profile/*" element={<Profile />} />
  </Routes>
  

  