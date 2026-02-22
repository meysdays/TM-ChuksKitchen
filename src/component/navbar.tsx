// import React from 'react'
import logo from "../assets/images/logochuks.png";
// import welcome from "../assets/images/Welcome.png";
import { navItems } from "../config/navConfig";
import NavItem from "../navigation/NavItem";
import { colors } from "../constant/color";

const NavBar = () => {
  return (
    <div className="flex z-10 bg-white items-center px-12 py-4">
      <div className="">
        <img src={logo} alt="Logo" className="h-10 w-48" />
      </div>
      <div className="flex-1  mx-8 p-2.5 flex justify-between">
        {navItems.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </div>
      <div
        className="px-12 py-2 rounded-md text-white cursor-pointer"
        style={{ backgroundColor: colors.main }}
      >
        Login
      </div>
    </div>
  );
};

export default NavBar;
