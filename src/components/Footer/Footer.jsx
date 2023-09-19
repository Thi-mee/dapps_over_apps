import React from "react";
import image_1 from "../../assets/Home_Assets/image_1-removebg-preview.png";
import style from "./Footer.module.css";
import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <svg width="130%" height="100%" className={style.footer__line}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="var(--asset-bg-color)" />
            <stop offset="100%" stopColor="var(--secondary-bg-color)" />
          </linearGradient>
        </defs>
        <path
          d="M30 10 L500 10 L600 90 L3000 90"
          stroke="url(#gradient)"
          strokeWidth="3"
        />
      </svg>
      <div className={style.small__footer__line__div}>
        <svg width="250%" height="100%" className={style.small__footer__line}>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="var(--asset-bg-color)" />
              <stop offset="100%" stopColor="var(--secondary-bg-color)" />
            </linearGradient>
          </defs>
          <path
            d="M150 10 L500 10 L600 90 L800 90"
            stroke="url(#gradient2)"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className={style.container}>
        <div className={style.footer_sec}>
          <img src={image_1} alt="" />

          <div className={style.footer_links}>
            <NavLink to="/">Home</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Educational Content</NavLink>
            <NavLink>Team</NavLink>
          </div>

          <div className={style.col_3}>
            <div className={style.footer__social__icons}>
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="var(--asset-bg-color)" />
                  <stop offset="100%" stopColor="var(--secondary-bg-color)" />
                </linearGradient>
              </svg>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaDiscord className={style.icon} style={{ fill: "url(#blue-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaFacebookF className={style.icon} style={{ fill: "url(#blue-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaTwitter className={style.icon} style={{ fill: "url(#blue-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaInstagram className={style.icon} style={{ fill: "url(#blue-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaLinkedinIn className={style.icon} style={{ fill: "url(#blue-gradient)" }} /></span></span>
            </div>
            <p>
              Join our mailing list to recieve latest updates and announcements
            </p>
            <input placeholder="Type in your Email" />
            <button>Subscribe</button>
            <div className={style.mobile__footer__social__icons}>
              <svg width="0" height="0">
                <linearGradient id="red-gradient" x1="0%" y1="0%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="var(--asset-bg-color)" />
                  <stop offset="100%" stopColor="var(--secondary-bg-color)" />
                </linearGradient>
              </svg>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaDiscord className={style.icon} style={{ fill: "url(#red-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaFacebookF className={style.icon} style={{ fill: "url(#red-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaTwitter className={style.icon} style={{ fill: "url(#red-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaInstagram className={style.icon} style={{ fill: "url(#red-gradient)" }} /></span></span>
              <span className={style.icon__wrap__wrap}><span className={style.icon__wrap}><FaLinkedinIn className={style.icon} style={{ fill: "url(#red-gradient)" }} /></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
