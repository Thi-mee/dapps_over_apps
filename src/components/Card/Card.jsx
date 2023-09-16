import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Card.module.css"

const Card = ({img_path, author, date, title, body, tags, display, width, padding, border, marginBottom, borderRadius, height }) => {
  return (
    <section style={{display: display ?  display : "block", border: border ? border : "", width: width ? width : "", gap: "2em", padding: padding ? padding : "0px", borderRadius: borderRadius ? borderRadius : "" }} className={style.container}>
      <img src={img_path} alt="" style={{ marginBottom: marginBottom ? marginBottom : "", height: height ? height : ""}}/>
      <div className={style.card__text}>
          <div className={style.card__small__text}>
            <p>{author}</p>
            <span></span>
            <p>{date}</p>
          </div>
          <h2>{title}</h2>
          <p className={style.card__body}>{body}<Link to="/blog/blog_1">See more...</Link></p>
          <div className={style.card__tags}>
              {
                tags.map((value, index)=>{
                  return(
                    <p key={index}>{value}</p>
                  )
                })
              }
          </div>
      </div>
    </section>
  )
}

export default Card
