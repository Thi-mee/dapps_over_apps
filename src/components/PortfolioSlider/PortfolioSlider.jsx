import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import style from "./PortfolioSlider.module.css";
import group_1 from "../../assets/Portfolio_Assets/Rectangle 4309.png";
import group_2 from "../../assets/Portfolio_Assets/Rectangle 4310.png";
import group_3 from "../../assets/Portfolio_Assets/Rectangle 4314.png";

const PortfolioSlider = () => {
    const sliderRef = useRef("");

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
            <div className={style.slider_card}>
                <div className={style.slider__card_card}>
                    <div>
                        <img src={group_1} alt=''/>
                        <h3>dApps over apps conference. Unilag, Lagos.</h3>
                    </div>
                    <div>
                        <img src={group_2} alt=''/>
                        <h3>How NFTs can drive Crypto adoption through Blockchain education.</h3>
                    </div>
                    <div>
                        <img src={group_3} alt=''/>
                        <h3>How NFTs can drive Crypto adoption through Blockchain education.</h3>
                    </div>
                    <div>
                        <img src={group_3} alt=''/>
                        <h3>How NFTs can drive Crypto adoption through Blockchain education.</h3>
                    </div>
                </div>

            </div>
      </div>
      <MdChevronRight size={40} className={style.right_slider_icon} onClick={slideRight} />
    </div>
  )
}

export default PortfolioSlider
