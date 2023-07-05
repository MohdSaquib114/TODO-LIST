   /* eslint-disable react/prop-types */
import style from '../Components/TodoMain.module.css'
import Button from './Button'
import TodoList from './TodoList'

const TodoMain = ({viewCompleted,viewActive,viewAll,isDark,
  todoArray, handleDone,handleRemove,completeRemover}) => {

 
    const activeItem = todoArray.filter(todo=>todo.isDone===false).length
    const textColor = isDark?'hsl(0, 0%, 98%)':'hsl(237, 14%, 26%)'
    const containerColor = isDark?'hsl(235, 24%, 19%)':'white'
  return (<div className={style.mainContainer} >
    
    <ul className={style.ul}>
   {todoArray.map((todoObj,i)=>
  <TodoList key={todoObj.text} handleDone={handleDone} handleRemove={handleRemove} 
   isDark={isDark} index={i} text={todoObj.text}/>
   )}
   {/* {width<=480 && <div> <p style={{color:textColor,fontSize:'.8rem',justifySelf:'center'}}>{activeItem} items left</p>
      
      <Button isDark={isDark} text ='Clear completed' clickHandler={completeRemover}/>
        </div>} */}
     </ul>
     
    
    
 <footer className={style.container} style={{backgroundColor:containerColor}}>
  <p style={{color:textColor,fontSize:'.8rem',justifySelf:'center'}}>{activeItem} items left</p>
      <div style={{justifySelf:'center'}}>
    <Button isDark={isDark} text ='All' clickHandler={viewAll}/>
    <Button isDark={isDark} text ='Active'clickHandler={viewActive}/>
    <Button isDark={isDark} text ='Completed'clickHandler={viewCompleted}/>
    </div>
<Button isDark={isDark} text ='Clear completed' clickHandler={completeRemover}/>
    </footer>
    </div>
  )
}

export default TodoMain
