   /* eslint-disable react/prop-types */
import style from '../Components/TodoMain.module.css'
import Button from './Button'
import TodoList from './TodoList'

const TodoMain = ({viewCompleted,viewActive,viewAll,isDark,
  todoArray, handleDone,handleRemove,completeRemover, width}) => {

 
    const activeItem = todoArray.filter(todo=>todo.isDone===false).length
    const textColor = isDark?'hsl(0, 0%, 98%)':'hsl(237, 14%, 26%)'
    const containerColor = isDark?'hsl(235, 24%, 19%)':'white'
  return (<div className={style.mainContainer} >
    
    <ul className={style.ul}>
   {todoArray.map((todoObj,i)=>
  <TodoList key={todoObj.text} handleDone={handleDone} handleRemove={handleRemove} 
   isDark={isDark} index={i} text={todoObj.text}/>
   )}
   {width<=480 && <li style={{display:'grid',gridTemplateColumns:'auto auto', backgroundColor:isDark?'hsl(235, 24%, 19%)':'white', width:'auto', borderRadius:'.4rem', padding:'2px'}}> <p style={{color:textColor,fontSize:'.8rem',justifySelf:'center'}}>{activeItem} items left</p>
      
      <Button isDark={isDark} text ='Clear completed' clickHandler={completeRemover}/>
        </li>}
     </ul>
     
    
    
 <footer className={style.container} style={{backgroundColor:containerColor}}>
  {width>480 &&<p style={{color:textColor,fontSize:'.8rem',justifySelf:'center'}}>{activeItem} items left</p>
   }   <div style={{justifySelf:'center', display:'flex'}}>
    <Button isDark={isDark} text ='All' clickHandler={viewAll}/>
    <Button isDark={isDark} text ='Active'clickHandler={viewActive}/>
    <Button isDark={isDark} text ='Completed'clickHandler={viewCompleted}/>
    </div>
{width>480 &&<Button isDark={isDark} text ='Clear completed' clickHandler={completeRemover}/>}
    </footer>
    </div>
  )
}

export default TodoMain
