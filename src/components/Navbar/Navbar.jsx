import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Home_Assets/image_1-removebg-preview.png";
import nav__toggler from "../../assets/Component 23.png";
import nav__closer from "../../assets/Group 6356283.png";
import style from "./Navbar.module.css";
import Button from "../Button/Button";
import {BsFillCaretDownFill} from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("navbar_links");
  const navToggle = () => {
    active === "navbar_links"
      ? setActive("navbar_links nav__active")
      : setActive("navbar_links");
  };
  return (
    <nav className={style.navbar}>
      <img src={logo} alt="" className={style.logo} />
      <div className={active}>
        <NavLink to="/" onClick={() => {
          navToggle();
        }}>Home</NavLink>
        <NavLink to="/blog" onClick={() => {
          navToggle();
        }}>Blog</NavLink>
        <NavLink to="/about" onClick={() => {
          navToggle();
        }}>About</NavLink>
        <li class={style.dropdown}>
          <div href="" class={style.dropbtn}>
            Gallery <BsFillCaretDownFill/>
          </div>
          <div class={style.dropdown_content}>
            <NavLink to="/portfolio" onClick={() => {
          navToggle();
        }}>Portfolio</NavLink>
            <NavLink to="/events" onClick={() => {
          navToggle();
        }}>Events</NavLink>
          </div>
        </li>
        <NavLink to="/educational_content" onClick={() => {
          navToggle();
        }}>Educational Content</NavLink>
        <NavLink to="/team" onClick={() => {
          navToggle();
        }}>Team</NavLink>
        <Button
          text="Join the Waitlist"
          bgColor="linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
        />
      </div>
      <div
        onClick={() => {
          navToggle();
        }}
        className="nav__toggler"
      >
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
