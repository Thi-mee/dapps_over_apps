import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({
  img_path,
  author,
  date,
  title,
  body,
  tags,
  width = "auto",
  border = 0,
  marginBottom,
  borderRadius = "10px",
  height,
  className = "",
  orientation = "horizontal",
  noPadding = false,
}) => {
  const [cardOrientation, setCardOrientation] = useState(orientation);

  useEffect(() => {
    setCardOrientation(orientation);
  }, [orientation]);

  const cardstyle = {
    border: border,
    width: width ? width : "",
    gap: "2em",
    borderRadius: borderRadius,
  };

  if (cardOrientation === "vertical") {
    cardstyle.flexDirection = "column";
  }

  const cardClasses = () => {
    const np = noPadding ? style.noPadding : "";
    if (cardOrientation === "vertical") {
      return `${style.card} ${style.vertical} ${className} ${np}`;
    } else {
      return `${style.card} ${className}`;
    }
  };

  return (
    <section style={cardstyle} className={cardClasses()}>
      {img_path && (
        <div className={style.imgCtn + " imgCtn"}>
          <img
            className={style.img}
            src={img_path}
            alt=""
            style={{
              marginBottom: marginBottom ?? "",
              height: height ?? "",
            }}
          />
        </div>
      )}
      <div className={style.card__text}>
        <div className={style.card__small__text}>
          <p>{author}</p>
          <span></span>
          <p>{date}</p>
        </div>
        <h2>{title}</h2>
        <p className={style.card__body}>
          {body}
          <Link to="/blog/blog_1">See more...</Link>
        </p>
        <div className={style.card__tags}>
          {tags.map((value, index) => {
            return <p key={index}>{value}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
