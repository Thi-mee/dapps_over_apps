import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Home_Assets/image_1-removebg-preview.png";
import nav__toggler from "../../assets/Component 23.png";
import nav__closer from "../../assets/Group 6356283.png";
import style from "./Navbar.module.css";
import Button from "../Button/Button";
import { BsFillCaretDownFill } from "react-icons/bs";

const openNavClass = `navbar_links nav__active ${style.links}`;
const closedNavClass = `navbar_links ${style.links}`;

const Navbar = () => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isDropdownActive = () => !!location.pathname.startsWith("/gallery");

  const dropdownBtnClass = () => {
    return isDropdownActive()
      ? `${style.dropbtn} ${style.active}`
      : style.dropbtn;
  };

  const navToggle = () => setMobileNavOpen((prev) => !prev);

  const navClass = ({ isActive }) => (isActive ? style.active : "");

  return (
    <nav className={style.navbar}>
      <div className={style.logoCtn}>
        <img src={logo} alt="" className={style.logo} />
      </div>
      <div className={mobileNavOpen ? openNavClass : closedNavClass}>
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
        <img src={mobileNavOpen ? nav__closer : nav__toggler} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
