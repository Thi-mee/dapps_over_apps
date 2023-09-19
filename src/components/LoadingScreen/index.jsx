import { useEffect, useState } from "react";
import style from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={`${style.loadingPage} ${!loading ? style.remove : ""}`}>
      <div className={`${style.loadingBoxContainer}`}>
        <div
          className={`${style.loadingBox} ${style.visible} ${style.first}`}></div>
        <div
          className={`${style.loadingBox} ${style.visible} ${style.first}`}></div>
        <div
          className={`${style.loadingBox} ${style.visible} ${style.first}`}></div>
        <div
          className={`${style.loadingBox} ${style.visible} ${style.second}`}></div>
        <div
          className={`${style.loadingBox} ${style.visible} ${style.second}`}></div>
        <div
          className={`${style.loadingBox} ${style.visible} ${style.second}`}></div>
        <div className={`${style.loadingBox}`}></div>
        <div className={`${style.loadingBox}`}></div>
        <div className={`${style.loadingBox}`}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
