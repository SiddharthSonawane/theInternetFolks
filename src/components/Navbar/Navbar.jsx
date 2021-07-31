import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Svg } from "./Logo";
import {
  Nav,
  NavLogo,
  Logo,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
  Login,
  SignUp,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick((prev) => {
      if (prev === false) {
        return true;
      } else {
        return false;
      }
    });
  };
  return (
    <Nav>
      <NavLogo>
        <Logo>
          <Svg />
        </Logo>
      </NavLogo>

      <HamburgerMenu onClick={handelClick}>
        {click ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavMenu display={click}>
        <NavItem>
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Resources</NavLink>
        </NavItem>

        <NavButton>
          <Login>Login</Login>
          <SignUp>Sign Up</SignUp>
        </NavButton>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
