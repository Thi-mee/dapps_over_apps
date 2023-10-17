import React from "react";
import Vector_1 from "../assets/Educational_Content_Assets/Vector.png";
import Vector_2 from "../assets/Educational_Content_Assets/Vector(1).png";
import Vector_3 from "../assets/Educational_Content_Assets/Vector(2).png";
import Vector_4 from "../assets/Educational_Content_Assets/Vector(3).png";
import style from "../styles/Edu_Content.module.css";
import Button from "../components/Button/Button";
import EduCard from "../components/Edu_Card/Edu_Card";
import Image_1 from "../assets/Educational_Content_Assets/Rectangle 4278.png";
import Image_2 from "../assets/Educational_Content_Assets/Rectangle 4280.png";
import Image_3 from "../assets/Educational_Content_Assets/Rectangle 4283.png";
import Image_4 from "../assets/Educational_Content_Assets/Rectangle 4288.png";
import Image_5 from "../assets/Educational_Content_Assets/Rectangle 4289.png";
import Image_6 from "../assets/Educational_Content_Assets/Rectangle 4290.png";
import Page from "../components/Page";

const Educatonal_Content = () => {
  return (
    <Page>
      <div className={style.vector__images}>
        <img src={Vector_1} alt="" className={style.vector_1} />
        <img src={Vector_2} alt="" className={style.vector_2} />
        <img src={Vector_3} alt="" className={style.vector_3} />
        <img src={Vector_4} alt="" className={style.vector_4} />
        <h1>
          Learn About <span className={style.crypto__currency}>Cryptocurrency,</span> <span className={style.web__3}>Web 3.0</span> and The <span className={style.blockchain}>Blockchain</span>
        </h1>
        <p>
          Join the dapps over apps community and propel your career in the
          blockchain ecosystem. Go from noob to expert, join the community of
          web/app developers, creatives, NFT traders, and general masses moving
          to the blockchain.
        </p>
        <Button
          text={"Join our Community"}
          bgColor="linear-gradient(90deg, var(--secondary-bg-color) 0%, var(--asset-bg-color) 100%)"
        />
      </div>
      <div className={style.edu__cols}>
        <div className={style.edu_col}>
          <EduCard
            imgPath={Image_1}
            title={"Introduction to Blockchain Technology"}
            viewers={"4,560"}
            time={"6 minutes"}
            level={"Beginner"}
          />
        <EduCard
            imgPath={Image_2}
            title={"Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"}
            viewers={"4,560"}
            time={"6 minutes"}
            level={"Intermediate"}
          />
        <EduCard
            imgPath={Image_3}
            title={"Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"}
            viewers={"4,560"}
            time={"6 minutes"}
            level={"Expert"}
          />
        </div>
        <div className={style.edu_col}>
          <EduCard
            imgPath={Image_4}
            title={"Introduction to Blockchain Technology"}
            viewers={"4,560"}
            time={"6 minutes"}
            level={"Beginner"}
          />
        <EduCard
            imgPath={Image_5}
            title={"Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"}
            viewers={"4,560"}
            time={"6 minutes"}
            level={"Intermediate"}
          />
        <EduCard
            imgPath={Image_6}
            title={"Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"}
            viewers={"4,560"}
            time={"6 minutes"}
            level={"Expert"}
          />
        </div>
      </div>
    </Page>
  );
};

export default Educatonal_Content;

// Legiit, contra,  vettted
