import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      alert("Invalid credentials! Use admin/password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
