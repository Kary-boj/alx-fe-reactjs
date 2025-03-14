import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <UserProfile />
    </div>
  );
}

export default App;

