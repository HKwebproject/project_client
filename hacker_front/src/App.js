//import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import LandingPage from "./component/views/LandingPage/LandingPage";
import LoginPage from "./component/views/LoginPage/LoginPage";
import MainPage from "./component/views/MainPage/MainPage";
import RegisterPage from "./component/views/RegisterPage/RegisterPage";
import "./static/fonts/font.css";

function App () {
  return (
      <Router>
        <div>
          {}
          <Routes>
            <Route exact path = "/" element={<LandingPage/>}/>
            <Route exact path = "/login" element={<LoginPage/>}/>
            <Route exact path = "/register" element={<RegisterPage/>}/>
            <Route exact path = "/main" element={<MainPage/>}/> 
          </Routes>
        </div>
      </Router>
  );
}

export default App;
