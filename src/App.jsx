import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./Pages/Products";
import Login from "./pages/Login";

// Function to check if user is authenticated
const isAuthenticated = () => localStorage.getItem("auth") === "true";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route - Login */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes - Only accessible if logged in */}
        <Route
          path="/*"
          element={
            isAuthenticated() ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-4">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Products />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
