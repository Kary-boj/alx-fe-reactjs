import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <><><div className="text-center min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Recipe Sharing Platform</h1>
    </div><div className="bg-gray-100 min-h-screen">
        <HomePage />
      </div></><Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router></>
  );
}

export default App;
