import React from "react";
import style from "../styles/Notfound.module.css";

const NotFoundPage = () => {
  return (
    <div style={{ color: "#fff" }} className={style.nf}>
      <div className={style.pink_blur}></div>
      <div className={style.orange_blur}></div>
      <div className={style.green_blur}></div>
      <div className={style.yellow_blur}></div>
      <div className={style.nf_content}>
        <h1>Looks like you are lost in the Multiverse</h1>
        <p>Don't worry, we'll help you find your way back to your dimension</p>
        <p>
          In the meanwhile, why not check out some of our most popular pages
        </p>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
