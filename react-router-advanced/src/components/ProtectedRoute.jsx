import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import useAuth


function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Check auth status

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

