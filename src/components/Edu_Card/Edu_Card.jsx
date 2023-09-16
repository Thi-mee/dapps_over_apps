import React from 'react';
import style from "./Edu_Card.module.css";
import { FaEye } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const Edu_Card = ({imgPath, title, viewers, time, level, }) => {
  return (
    <div className={style.card}>
        <img src={imgPath} alt='' className={style.card__img}/>
        <div className={style.card__text}>
            <h3>{title}</h3>
            <div className={style.card__small__text}>
                <span>
                    <FaEye className={style.card__icon}/>
                    <p>{viewers}</p>
                </span>
                <span>
                    <BiTimeFive className={style.card__icon}/>
                    <p>{time}</p>
                </span>
            </div>
            <p className={style.card__level}>{level}</p>
            <Link to={"/educational_content/educational_content1"}>Read Now</Link>
        </div>
    </div>
  )
}

export default Edu_Card
