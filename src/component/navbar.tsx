// import React from 'react'
import logo from "../assets/images/logochuks.png";
import menu from "../assets/images/Menu.png";
// import welcome from "../assets/images/Welcome.png";
import { navItems } from "../config/navConfig";
import NavItem from "../navigation/NavItem";
import { colors } from "../constant/color";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-50">
      <div className="flex items-center justify-center w-full h-4 bg-[#FF7A18]">
        <a
          href="https://github.com/meysdays/TM-ChuksKitchen"
          target="_blank"
          className="text-white text-sm text-center"
        >
          Kindly click to visit the Github repository
        </a>
      </div>
      <div className="flex  bg-white items-center px-2 lg:px-12 py-4">
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
        <div className="flex md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="" />
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 z-40">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
              <NavItem key={item.path} item={item} closeMenu={() => setIsOpen(false)}/>
            ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
