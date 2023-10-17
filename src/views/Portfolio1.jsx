import React from "react";
import style from "../styles/Portfolio1.module.css";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import group_1 from "../assets/Portfolio_Assets/Rectangle 4309.png";
import group_2 from "../assets/Portfolio_Assets/Rectangle 4310.png";
import group_3 from "../assets/Portfolio_Assets/Rectangle 4314.png";
import PortfolioSlider from "../components/PortfolioSlider/PortfolioSlider";
import Page from "../components/Page";

const Portfolio1 = () => {
  const images = [group_1, group_2, group_3];

  return (
    <Page className={style.container}>
      <ImageSlider images={images} slideInterval={3000} />

      <h1>dApps over apps Conference, Unilag. Lagos, Nigeria</h1>

      <p>
        Rhe conference was held in unilag b and so on and so forth Rhe
        conference was held in unilag b and so on and so forth Rhe conference
        was held in unilag b and so on and so forth Rhe conference was held in
        unilag b and so on and so forthRhe conference was held in unilag b and
        so on and so forthRhe conference was held in unilag b and so on and so
        forth
      </p>

      <h2>Other Projects</h2>
      <PortfolioSlider />

      <div className={style.all__portfolio}>
        <div>
          <img src={group_1} alt="" />
          <h3>dApps over apps conference. Unilag, Lagos.</h3>
        </div>
        <div>
          <img src={group_2} alt="" />
          <h3>
            How NFTs can drive Crypto adoption through Blockchain education.
          </h3>
        </div>
        <div>
          <img src={group_3} alt="" />
          <h3>
            How NFTs can drive Crypto adoption through Blockchain education.
          </h3>
        </div>
      </div>
    </Page>
  );
};

export default Portfolio1;
