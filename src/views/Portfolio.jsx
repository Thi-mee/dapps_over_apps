import React from "react";
import style from "../styles/Portfolio.module.css";
import ellipse_1 from "../assets/Portfolio_Assets/Ellipse 393.png";
import circle_1 from "../assets/Portfolio_Assets/Ellipse 390.png";
import circle_2 from "../assets/Portfolio_Assets/Ellipse 391.png";
import ellipse_2 from "../assets/Portfolio_Assets/Vector 3.png";
import ellipse_3 from "../assets/Portfolio_Assets/Ellipse 392.png";
import group_1 from "../assets/Portfolio_Assets/Rectangle 4309.png";
import group_2 from "../assets/Portfolio_Assets/Rectangle 4310.png";
import group_3 from "../assets/Portfolio_Assets/Rectangle 4314.png";
import { Link } from "react-router-dom";
import Page from "../components/Page";


const Portfolio = () => {
  return (
    <Page>
      <div className={style.vector__images}>
        <img src={ellipse_1} alt="" className={style.ellipse_1} />
        <img src={circle_1} alt="" className={style.circle_1} />
        <img src={circle_2} alt="" className={style.circle_2} />
        <img src={ellipse_2} alt="" className={style.ellipse_2} />
        <img src={ellipse_2} alt="" className={style.ellipse_2} />
        <img src={ellipse_3} alt="" className={style.ellipse_3} />

        <div className={style.vector__images__text}>
          <h1>
            <span className={style.pink__span}>dApps over apps</span>{" "}
            contribution to the{" "}
            <span className={style.purple__span}>growth</span>
            <br /> of the <span className={style.cream__span}>Web 3</span>
          </h1>
          <p>Our Portfolio and Projects</p>
        </div>
      </div>
      <div className={style.portfolio__section}>
        <div><h2>dApps over apps Conference, <br/> Unilag</h2></div>
        <Link to="/portfolio/portfolio1"><img src={group_1} alt="" /></Link>
        <div><p>The conference was held in unilag b and so on and so forth</p></div>
      <hr className={style.pink__line}/>
      </div>
      <div className={style.portfolio__section}>
        <div><h2>DevX  Conference, Unilag</h2></div>
        <Link to="/portfolio/portfolio1"><img src={group_2} alt="" /></Link>
        <div><p>Rhe conference was held in unilag b and so on and so forth</p></div>
        <hr className={style.second__pink__line}/>
      </div>
      <div className={style.portfolio__section}>
        <div><h2>DevX  Conference, Unilag</h2></div>
        <Link to="/portfolio/portfolio1"><img src={group_3} alt="" /></Link>
        <div><p>Rhe conference was held in unilag b and so on and so forth</p></div>
        <hr className={style.third__pink__line}/>
      </div>
    </Page>
  );
};

export default Portfolio;
