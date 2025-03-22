import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./components/HomePage";

function App() {
  return (
    <><div className="text-center min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Recipe Sharing Platform</h1>
    </div><div className="bg-gray-100 min-h-screen">
        <HomePage />
      </div></>
  );
}

export default App;
