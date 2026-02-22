// import React from 'react'

import { Outlet } from "react-router-dom";
import NavBar from "../component/navbar";
import Footer from "../component/footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
