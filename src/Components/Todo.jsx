 /* eslint-disable react/prop-types */
import style from './todo.module.css'

const Todo = ({children}) => {
  return (
    <main className={style.main}>
     {children}
    </main>
  )
}

export default Todo
