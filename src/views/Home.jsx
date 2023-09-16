import React from 'react';
import Frame_2 from "../assets/Home_Assets/Frame 41_2.png";
import Frame_3 from "../assets/Home_Assets/Frame 41_3.png";
import Component_5 from "../assets/Home_Assets/Component 5.png";
import style from "../styles/Home.module.css";
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.pink_blur}></div>
      <div className={style.purple_blur}></div>
      <div className={style.first_section}>
        <img src={Frame_2} alt='' className={style.hero_img}  />
        <div className={style.ctn_text}>
          <h1>A Home for all techies and creative builders</h1>
          <p>Encouraging builder and traditional developers explore the world of web 3.0 and "get smart" with blockchain infrastructures</p>
          <Button text="Join the Waitlist" bgColor="linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)" />
        </div>
        <img src={Frame_3} alt='' className={style.hero_img}  />
      </div> 

      <div className={style.second_section}>
        <p>Partners and Sponsors</p>
        <div>
          <img src={Component_5} alt=''/>
        </div>
      </div>

      <div className={style.third_section}>
        <h1>Benefits of dApps over apps</h1>
        <div className={style.third__section__flex}>
          <div>
            <h2>Education</h2>
            <p>Educational content available at all times to help you get better at using decentralized applications to aid your growth.</p>
          </div>
          <div>
          <h2>Education</h2>
            <p>Educational content available at all times to help you get better at using decentralized applications to aid your growth.</p>
          </div>
          <div>
          <h2>Education</h2>
            <p>Educational content available at all times to help you get better at using decentralized applications to aid your growth.</p>
          </div>
        </div>
      </div>

      <div className={style.fourth_section}>
        <h1>Learn more about the dApps over apps community</h1>
        <Link to="/about">About Us</Link>
      </div>

    </div>
  )
}

export default Home
