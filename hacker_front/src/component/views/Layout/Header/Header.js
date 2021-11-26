import React from 'react';
import "../../style/Header.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div id = "header">
      <div className = "sidebar">
        <Sidebar />
      </div>
      <div className = "title">
        <Link to ="" style = {{ textDecoration: 'none', color: 'white'}}>
          <h2>KHU Hacker</h2>
        </Link>
      </div>

      <div className = "logout">
        <Link to ="../login" style = {{ textDecoration: 'none', color: 'white'}}>
          Logout
        </Link>
      </div>
    </div>
  )
}

export default Header