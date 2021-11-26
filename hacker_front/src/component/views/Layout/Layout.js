import React from 'react';
import "../style/Layout.scss";
import Footer from "../Layout/Footer/Footer";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Header from "../Layout/Header/Header";

function Layout() {
  return (
    <div id = "layout">
        <Header />
        <Sidebar />
        <Footer />
    </div>
  )
}

export default Layout