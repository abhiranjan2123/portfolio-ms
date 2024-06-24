import {Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/RegisterPage";

export default function Routers() {
    return (
        <Routes>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    
    );
  }
  
