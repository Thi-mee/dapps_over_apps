import React from "react";
import style from "../styles/About.module.css";
import Polygon_1 from "../assets/About_Assets/Polygon 2.png";
import Curve_1 from "../assets/About_Assets/Exclude.png";
import Curve_2 from "../assets/About_Assets/Exclude(1).png";
import Polygon_2 from "../assets/About_Assets/Polygon 6.png";
import About_Img from "../assets/About_Assets/Rectangle 4294.png";
import About_Img2 from "../assets/About_Assets/Rectangle 4295.png";


const About = () => {
  return (
    <div className={style.container}>
      <div className={style.pink_blur}></div>
      <div className={style.vector__container}>
        <img src={Polygon_1} alt="" className={style.polygon_1} />
        <img src={Curve_1} alt="" className={style.curve_1} />
        <img src={Polygon_2} alt="" className={style.polygon_2} />
        <img src={Curve_2} alt="" className={style.curve_2} />
        <div className={style.container__text}>
          <h1>About dApps over apps</h1>
          <p>Learn more about dApps over apps and what we do</p>
        </div>
      </div>

      <div className={style.second__section}>
        <div className={style.second__section__col}>
            <div className={style.second__section__col__text}>
                <p>
                    dApps over apps is a Web3 infrastructure company dedicated to
                    empowering Africas, with financial inclusion as the main driver.
                </p>
                <p>
                    dApps over apps is a Web3 infrastructure company dedicated to
                    empowering Africas, with financial inclusion as the main driver.
                </p>
            </div>
          <img src={About_Img} alt=""/>
        </div>
        <div  className={style.second__section__col}>
          <img src={About_Img2} alt=""/>
          <div className={style.second__section__col__text}>
                <p>
                We are on a journey to spread the value of Web3 and Decentralized Finance across Africa, and beyond. The AFEN ecosystem is multi-chain, powered by the $AFEN token, and community driven.
                </p>
                <p>
                We are on a journey to spread the value of Web3 and Decentralized Finance across Africa, and beyond. The AFEN ecosystem is multi-chain, powered by the $AFEN token, and community driven.
                </p>
          </div>
        </div>
      </div>

      <div className={style.third__section__flex}>
        <h1>Our <span>Values</span></h1>
        <p>Blockchain has the potential to adequately transform African society. Offering insurmountable opportunities to those leveraging it to build a new structure in diverse sectors.</p>
        <div className={style.third__section__flex__purple_blur}></div>
        <div className={style.third__section__flex__pink_blur}></div>
        <div className={style.third__section__cols}>
            <div className={style.third__section__col}>
                <h2>Innovation</h2>
                <p>We are driven by the passion to reconstruct a new Africa offering insurmountable value to the world.</p>
            </div>
            <div className={style.third__section__col}>
                <h2>Accountability</h2>
                <p>Despite operating within a decentralized industry, we are committed to transparency as well as committed to bearing the cost of our decisions.</p>
            </div>
            <div className={style.third__section__col}>
                <h2>Sustainability</h2>
                <p>dApps over apps is focused on innovating for longevity, use, and impact. The short term isn’t in our plans to drive innovation.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
