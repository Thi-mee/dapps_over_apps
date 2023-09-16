import React, { useRef } from "react";
import style from "./EducationalSlider.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image_4 from "../../assets/Educational_Content_Assets/Rectangle 4288.png";
import Image_5 from "../../assets/Educational_Content_Assets/Rectangle 4289.png";
import Image_6 from "../../assets/Educational_Content_Assets/Rectangle 4290.png";
import EduCard from "../Edu_Card/Edu_Card";

const EducationalSlider = () => {
  const sliderRef = useRef("");

  const slideLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  };

  return (
    <div className={style.main_slider_container}>
      <MdChevronLeft
        size={40}
        className={style.left_slider_icon}
        onClick={slideLeft}
      />
      <div className={style.slider} ref={sliderRef} id="slider">
        {/* {
      slides.map((slide, index) => {
        return ( */}
        <div className={style.slider_card}>
          <div className={style.slider__card_card}>
            <EduCard
              imgPath={Image_4}
              title={"Introduction to Blockchain Technology"}
              viewers={"4,560"}
              time={"6 minutes"}
              level={"Beginner"}
            />
            <EduCard
              imgPath={Image_5}
              title={
                "Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"
              }
              viewers={"4,560"}
              time={"6 minutes"}
              level={"Intermediate"}
            />
            <EduCard
              imgPath={Image_6}
              title={
                "Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"
              }
              viewers={"4,560"}
              time={"6 minutes"}
              level={"Expert"}
            />

            <EduCard
              imgPath={Image_6}
              title={
                "Web3 Career Paths: A Guide to Finding the Right Fit for Your Skills and Interests"
              }
              viewers={"4,560"}
              time={"6 minutes"}
              level={"Expert"}
            />
          </div>
        </div>
        {/* );
      })} */}
      </div>
      <MdChevronRight
        size={40}
        className={style.right_slider_icon}
        onClick={slideRight}
      />
    </div>
  );
};

export default EducationalSlider;
