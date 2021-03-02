import React from "react";
import { NavLink } from "react-router-dom";
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from "@material-ui/icons/Home";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
const Nav = () => {
  return (
    <div>
      <BottomNavigation>
        <NavLink to="/home">
          <BottomNavigationAction icon={<HomeIcon />}></BottomNavigationAction>
        </NavLink>
        <NavLink to="/category">
          <BottomNavigationAction icon={<CategoryIcon />}></BottomNavigationAction>
        </NavLink>
      </BottomNavigation>
    </div>
  );
};

export default Nav;
