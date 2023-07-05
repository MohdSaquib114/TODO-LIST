 /* eslint-disable react/prop-types */
import { useState } from 'react'
import style from '../Components/TodoList.module.css'


const TodoList = ({isDark, text,handleDone,handleRemove,index}) => {

    const[checked,setCheck] =useState(false)
    const [ishover, setHover] = useState(false)
    const circleTheme=checked?'hsl(234, 11%, 52%)':isDark ?"hsl(0, 0%, 98%)" :'hsl(237, 14%, 26%)'
    const className = checked?style.checked:style.unchecked
    const textDecoration = checked?style.checkedText:style.uncheckedText;
    const backgroudColor =isDark ?'hsl(235, 24%, 19%)' : 'white'
    

 
    const handlemouseenter=()=>{ 
      const temp =true
      setHover(temp)
    }
    const handlemouseleave=()=>{ 
       const temp =false
       setHover(temp)
    }

    const  clickHandler =()=>{
      handleDone(index)
      setCheck(!checked)
    }

return <div className={style.container} style={{backgroundColor:backgroudColor}} 
            onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>
   
   <div  onClick={clickHandler}className={className} style={
    
    {borderRadius: '50%',
    width: '30px',
    height:' 30px',alignSelf: 'center',
    justifySelf:'center', }
    
    }></div>

      <h2 className={textDecoration} style={
        { fontWeight:'500',
          color:`${circleTheme}`}
      }>{text}</h2>

 {ishover && <svg onClick={()=>handleRemove(index)} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
 }   </div>
       
}

export default TodoList
