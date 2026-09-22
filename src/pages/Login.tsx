import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard", { replace: true });
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleDashboard}>Dashboardページ</button>
    </div>
  );
};

export default Login;
