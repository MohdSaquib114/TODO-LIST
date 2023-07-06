 /* eslint-disable react/prop-types */
import style from './Header.module.css'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'


const Header = ({isDark, handleDarkLight}) => {
    const darkOrLight = isDark ? sun : moon;
  return (
    <header className={style.header}>     
         <h1 className={style.heading}>TODO</h1>
         <img className={style.toggleButton} style={{alignSelf:'center'}} onClick={handleDarkLight} src={darkOrLight} />
    
    </header>
  )
}

export default Header
