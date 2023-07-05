  /* eslint-disable react/prop-types */
// import React from 'react'
import style from './Input.module.css'
import Circle from './Circle';


const Input = ({onChange,value,isDark, children}) => {
  const inputTheme = isDark ? style.inputDark :style.inputLight;
  const containerTheme=isDark ?'hsl(235, 24%, 19%)' : 'white'
 
  return <div  style={{ minWidth: '100%',
                       height: '70px',
                       display: 'grid',
                       gridTemplateColumns: '10% auto 20%',
                       backgroundColor:`${containerTheme}`,
                       borderRadius: '1rem',}}>
              
               <Circle isDark={isDark} className={style.circle} />
   
               <input className={inputTheme} type='text' value={value} 
               placeholder='Create a new todo...' 
               onChange={(e)=>onChange(e.target.value)} />
                   {children}
           </div>
}

export default Input
