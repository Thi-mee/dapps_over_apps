import React from "react";
import style from "../styles/Team.module.css";
import image_4 from "../assets/Team_Assets/image 4.png";
import polygon_1 from "../assets/Team_Assets/Polygon 1.png";
import line_1 from "../assets/Team_Assets/Vector 2.png";
import mobile__line__1 from "../assets/Team_Assets/Vector 3(1).png";
import mobile__line__2 from "../assets/Team_Assets/Vector 3(2).png";
import image_3 from "../assets/Team_Assets/image 3.png";
import polygon_2 from "../assets/Team_Assets/Polygon 2(1).png";
import image_6 from "../assets/Team_Assets/image 6.png";
import polygon_3 from "../assets/Team_Assets/Polygon 3.png";
import line_2 from "../assets/Team_Assets/Vector 1.png";
import image_7 from "../assets/Team_Assets/image 7.png";
import polygon_4 from "../assets/Team_Assets/Polygon 4.png";
import image_5 from "../assets/Team_Assets/image 5.png";
import polygon_5 from "../assets/Team_Assets/Polygon 5.png";
import ellipse_1 from "../assets/Team_Assets/Ellipse 388.png";
import ellipse_2 from "../assets/Team_Assets/Ellipse 389.png";
import ellipse_3 from "../assets/Team_Assets/Ellipse 387.png";
import TeamCard from "../components/Team_Card/Team_Card";
import Person_1 from "../assets/Team_Assets/co-founder.png";
import Person_2 from "../assets/Team_Assets/project-manager.png";
import Person_3 from "../assets/Team_Assets/tech-lead.png";
import Button from "../components/Button/Button"


const Team = () => {
  return (
    <div>
      <div className={style.vector__images}>
        <img src={image_4} alt="" className={style.image_4} />
        <img src={polygon_1} alt="" className={style.polygon_1} />
        <img src={line_1} alt="" className={style.line_1} />
        <img src={mobile__line__1} alt="" className={style.mobile__line1}/>
        <img src={mobile__line__2} alt="" className={style.mobile__line2}/>
        <img src={image_3} alt="" className={style.image_3} />
        <img src={polygon_2} alt="" className={style.polygon_2} />
        <img src={image_6} alt="" className={style.image_6} />
        <img src={polygon_3} alt="" className={style.polygon_3} />
        <img src={line_2} alt="" className={style.line_2} />
        <img src={image_7} alt="" className={style.image_7} />
        <img src={polygon_4} alt="" className={style.polygon_4} />
        <img src={image_5} alt="" className={style.image_5} />
        <img src={polygon_5} alt="" className={style.polygon_5} />
        <img src={ellipse_1} alt="" className={style.ellipse_1} />
        <img src={ellipse_2} alt="" className={style.ellipse_2} />
        <img src={ellipse_3} alt="" className={style.ellipse_3} />

        <div className={style.vector__images__text}>
          <h1>
            <span className={style.purple__text}>Meet the </span>dApps over apps{" "}
             <span className={style.pink__text}>Team</span>
          </h1>
          <p>A small team with much more impact.</p>
        </div>
      </div>

      <div className={style.team__cols}>
        <div className={style.team__col}>
          <TeamCard
            imgPath={Person_1}
            name={"Abdulkareem Oyeneye"}
            role={"Co-founder/COO"}
          />

          <TeamCard
            imgPath={Person_2}
            name={"Adebimpe O."}
            role={"Project Manager"}
          />

          <TeamCard
            imgPath={Person_3}
            name={"Emmanuel Hillary U."}
            role={"Tech Lead"}
          />
        </div>
      </div>

      <div className={style.team__work__with__us}>
        <p>Want to work with some of the best talents in web3, and develop your skills further?</p>
        <Button text={"Join Us"} bgColor="linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"/>
      </div>

    </div>
  );
};

export default Team;
