import React, { useRef } from "react";
import style from "./ReactSlider.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "../Card/Card";
import NFT_3 from "../../assets/Blog_Assets/Rectangle 4255.png";
import NFT_4 from "../../assets/Blog_Assets/Rectangle 4261.png";
import NFT_5 from "../../assets/Blog_Assets/Rectangle 4258.png";

const ReactSlider = () => {
    const sliderRef = useRef("");
  // const slides = [1, 2, 3, 4];

const slideLeft = () => {
   sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  }

  const slideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  }


  return (
    <div className={style.main_slider_container}>
      <MdChevronLeft size={40} className={style.left_slider_icon} onClick={slideLeft}/>
      <div className={style.slider} ref={sliderRef} id="slider">
        {/* {
      slides.map((slide, index) => {
        return ( */}
            <div className={style.slider_card}>
                <div className={style.slider__card_card}>
                    <Card
                    img_path={NFT_3}
                    author="The dapps over apps team"
                    date="24 June 2023"
                    title="How NFTs can drive Crypto adoption through Blockchain education."
                    body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
                    tags={["NFTS", "Metamask"]}
                    // width="484px"
                    marginBottom="2em"
                    />

                    <Card
                    img_path={NFT_4}
                    author="The dapps over apps team"
                    date="24 June 2023"
                    title="How NFTs can drive Crypto adoption through Blockchain education."
                    body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
                    tags={["NFTS", "Metamask"]}
                    // width="484px"
                    marginBottom="2em"
                    />

                    <Card
                    img_path={NFT_5}
                    author="The dapps over apps team"
                    date="24 June 2023"
                    title="How NFTs can drive Crypto adoption through Blockchain education."
                    body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
                    tags={["NFTS", "Metamask"]}
                    // width="484px"
                    marginBottom="2em"
                    />

                    <Card
                    img_path={NFT_5}
                    author="The dapps over apps team"
                    date="24 June 2023"
                    title="How NFTs can drive Crypto adoption through Blockchain education."
                    body="The common goal uniting multiple chains and protocols in crypto is adoption. Whether you’re building the next AMM or centralized exchange or NFT marketplace or even the metaverse, the goal is to see an ever incre..."
                    tags={["NFTS", "Metamask"]}
                    // width="484px"
                    marginBottom="2em"
                    />

                </div>

            </div>
        {/* );
      })} */}
      </div>
      <MdChevronRight size={40} className={style.right_slider_icon} onClick={slideRight} />
    </div>
  );
};

export default ReactSlider;
