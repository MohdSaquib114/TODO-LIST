  /* eslint-disable react/prop-types */
import  { useState } from 'react'
import style from '../Components/Button.module.css'

const Button = ({ text,isDark , clickHandler}) => {
  const [mouseOver,setMouseOver] =useState(false)
  const textColor = mouseOver?'hsl(0, 0%, 0%)' :isDark?'hsl(0, 0%, 98%)':'hsl(237, 14%, 26%)'
  const btnColor = isDark?'hsl(235, 24%, 19%)':'white'
  
  const handlemouseEnter=()=>{
   const temp = true
   setMouseOver(temp)
}
                           
 
  const handlemouseLeave=()=>{
    const temp = false
    setMouseOver(temp)
}
  return (
    <button onClick={clickHandler} className={style.btn} style={{ backgroundColor:btnColor}} >
      <p onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave} className={style.text}
       style={{color:textColor}}>{text}</p>
    </button>
  )
}

export default Button
