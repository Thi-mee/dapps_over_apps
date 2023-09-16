import React from 'react';
import style from "./Button.module.css"

const Button = ({text , bgColor}) => {
  return (
    <button style={{background: bgColor}} className={style.btn}>
      {text}
    </button>
  )
}

export default Button
