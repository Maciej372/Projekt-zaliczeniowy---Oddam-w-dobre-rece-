import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { LoginContextProvider } from "./components/LoginForm/LoginContext";
import FormLoginPage from "./components/LoginForm/FormLoginPage";
import FormRegisterPage from "./components/LoginForm/FormRegisterPage";
import LogoutPage from "./components/LoginForm/Logout";

const App = () => {
  return (
    <LoginContextProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<FormLoginPage />} />
            <Route path="/register" element={<FormRegisterPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </div>
      </Router>
    </LoginContextProvider>
  );
};

export default App;
