// import React from 'react'
import logo from "../assets/images/logochuks.png";
import menu from "../assets/images/Menu.png";
// import welcome from "../assets/images/Welcome.png";
import { navItems } from "../config/navConfig";
import NavItem from "../navigation/NavItem";
import { colors } from "../constant/color";

const NavBar = () => {
  return (
    <div className="flex z-10 bg-white items-center px-2 lg:px-12 py-4">
      <div className="">
        <img src={logo} alt="Logo" className="h-1/3 w-5/6" />
      </div>
      <div className="flex-1 mx-8 p-2.5">
        <div className="hidden md:flex ">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </div>
      <div className="hidden md:flex">
        <div
          className="px-12 py-2 rounded-md text-white cursor-pointer"
          style={{ backgroundColor: colors.main }}
        >
          Login
        </div>
      </div>
      <div className="flex md:hidden">
        <img src={menu} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
