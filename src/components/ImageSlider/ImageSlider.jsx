import React, { useState, useEffect } from 'react';
import style from "./ImageSlider.module.css";

const ImageSlider = ({ images, slideInterval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [index, images.length, slideInterval]);

  return (
    <div className={style.container}>
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt="slider"
          style={{ display: i === index ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;

