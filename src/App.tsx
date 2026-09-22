import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <BrowserRouter>
          <h1>React-Router-ReplaceNavigationApp</h1>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
