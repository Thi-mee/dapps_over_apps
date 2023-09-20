import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Home_Assets/image_1-removebg-preview.png";
import nav__toggler from "../../assets/Component 23.png";
import nav__closer from "../../assets/Group 6356283.png";
import style from "./Navbar.module.css";
import Button from "../Button/Button";
import { BsFillCaretDownFill } from "react-icons/bs";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("navbar_links");

  const isDropdownActive = () => {
    if (location.pathname.startsWith("/gallery")) {
      return true;
    } else {
      return false;
    }
  };

  const dropdownBtnClass = () => {
    if (isDropdownActive()) {
      return `${style.dropbtn} ${style.active}`;
    } else {
      return style.dropbtn;
    }
  };

  const navToggle = () => {
    active === "navbar_links"
      ? setActive("navbar_links nav__active")
      : setActive("navbar_links");
  };

  const navClass = ({ isActive, isPending }) => {
    if (isPending) {
      return style.pending;
    } else if (isActive) {
      return style.active;
    }
  };

  return (
    <nav className={style.navbar}>
      <img src={logo} alt="" className={style.logo} />
      <div className={`${active} ${style.links}`}>
        <NavLink to="/" className={navClass} onClick={navToggle}>
          Home
        </NavLink>
        <NavLink to="/blog" className={navClass} onClick={navToggle}>
          Blog
        </NavLink>
        <NavLink to="/about" className={navClass} onClick={navToggle}>
          About
        </NavLink>
        <li className={style.dropdown}>
          <div className={dropdownBtnClass()} tabIndex={0}>
            Gallery <BsFillCaretDownFill />
          </div>
          <div className={style.dropdown_content}>
            <NavLink to="/gallery/portfolio" onClick={navToggle}>
              Portfolio
            </NavLink>
            <NavLink to="/gallery/events" onClick={navToggle}>
              Events
            </NavLink>
          </div>
        </li>
        <NavLink to="/educational_content" onClick={navToggle}>
          Educational Content
        </NavLink>
        <NavLink to="/team" onClick={navToggle}>
          Team
        </NavLink>
        <Button
          text="Join the Waitlist"
          bgColor="linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
          className={style.ctabtn}
        />
      </div>
      <div onClick={navToggle} className="nav__toggler">
        {active === "navbar_links" ? (
          <img src={nav__toggler} alt="" />
        ) : (
          <img src={nav__closer} alt="" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
