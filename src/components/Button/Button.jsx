import React from 'react';
import style from "./Button.module.css"

const Button = ({text , bgColor, className=""}) => {
  const btnClass = `${style.btn} ${className}`
  return (
    <button style={{background: bgColor}} className={btnClass}>
      {text}
    </button>
  )
}

export default Button
