import {useEffect,useState} from 'react'
import './App.css'
import useCurrentWidth from './Components/useCurrentWidth'
import Todo from './Components/Todo'
import Header from './Components/Header';
import Input from './Components/Input';
import TodoMain from './Components/TodoMain';
import Button from './Components/Button';


const App = () => {
  const[isDark, setDark] = useState(false)
  const[inputValue, setinputValue] = useState('')
  const[todoArray, settodoArr] =useState(JSON.parse(localStorage.getItem('todoarray'))||[])
  const [ previousState, setPState] = useState([])
  useEffect(()=>{
    localStorage.setItem('todoarray',JSON.stringify(todoArray))
    
  },[todoArray])

   
  let width = useCurrentWidth();

  const addListHandler= ()=>{
    console.log(todoArray)
    if(inputValue!==''){
    settodoArr((arr)=>{
      return [...arr,{text:inputValue,isDone:false}]})
    setinputValue('')
    const currentState = [...todoArray,{text:inputValue,isDone:false}]
    setPState([...previousState,currentState])
   
   
  }
    else return
  }
  

const viewAll=()=>{

const lastState = previousState[previousState.length-1]
settodoArr(lastState|| todoArray)
console.log(previousState)
console.log(lastState)
  }

  const viewActive=()=>{
    const tempArr =previousState[previousState.length-1].filter(obj=>obj.isDone===false)
    console.log(tempArr)
  settodoArr(tempArr||todoArray.filter(todo=>todo.isDone===false))
}

const viewCompleted = ()=>{
  const tempArr =previousState[previousState.length-1].filter(obj=>obj.isDone===false)
  settodoArr( tempArr ||todoArray.filter(todo=>todo.isDone===true))
}

  const completeRemover=()=>{
    const tempArr =todoArray.filter(obj=>obj.isDone===false)
    settodoArr(tempArr)
    setPState([...previousState,tempArr])
  }
  
  
const handleDone=i=>{
const tempArr = [...todoArray]
tempArr[i].isDone=!tempArr[i].isDone
settodoArr(tempArr)
}

const handleRemove=i=>{
  const tempArr = todoArray.filter((obj,index)=>{
    if(index !==i )
    return obj
  })
  settodoArr(tempArr)
}


const handleInput= (value)=>{
    setinputValue(value)
}


const handleDarkLight = ()=>{
    setDark(!isDark)
  }
  
 const bgImgClass = isDark ?"darkbgImg" : "lightbgImg";
 const bgImgMbClass = isDark ?"darkbgMbImg" : "lightbgMbImg";
 const currentbgClass = width<=480?bgImgMbClass :bgImgClass
 
  return (
    <div className={`overlay ${currentbgClass}`} style={{backgroundColor:isDark && "hsl(0, 0%, 0%)"}} >
  
     <Todo >
      <Header isDark={isDark} handleDarkLight={handleDarkLight} />
      <Input onChange={handleInput} value={inputValue} isDark={isDark} >
      <Button text={'Add'} isDark={isDark} clickHandler={addListHandler}/>
      </Input>
      <TodoMain  viewAll={viewAll} viewActive={viewActive} viewCompleted={viewCompleted} 
       completeRemover={completeRemover} handleDone={handleDone} handleRemove={handleRemove} 
       isDark={isDark} todoArray={todoArray} width={width}/>
     
    
     </Todo>
      
    </div>
  )
}

export default App


