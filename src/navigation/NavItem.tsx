// import React from 'react'

import { NavLink } from "react-router-dom";
import type { NavItemType } from "../data/types";

interface Props {
  item: NavItemType;
}

const NavItem = ({ item }: Props) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `  transition-colors  w-1/3 mr-1
    ${isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-500"}
    `
      }
    >
      {item.name}
    </NavLink>
  );
};

export default NavItem;
