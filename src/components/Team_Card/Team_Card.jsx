import React from 'react';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import style from "../Team_Card/Team_Card.module.css"

const Team_Card = ({imgPath, name, role}) => {
  return (
    <div className={style.team__card}>
      <img src={imgPath} alt="" className={style.team__card__img} />
      <div className={style.team__card__text}>
        <div>
            <p>{name}</p>
            <p>{role}</p>
        </div>
        <div>
            <FaTwitter className={style.team__card__icons}/>
            <FaInstagram className={style.team__card__icons}/>
        </div>

      </div>
    </div>
  )
}

export default Team_Card
