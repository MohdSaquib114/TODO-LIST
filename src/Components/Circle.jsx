 /* eslint-disable react/prop-types */


const Circle = ({isDark, className}) => {
  
    const circleTheme=isDark ?"hsl(0, 0%, 98%)" :'hsl(237, 14%, 26%)'


  return (
    <div className={className} style={{  borderRadius: '50%',
                                         border:`.1rem solid ${circleTheme}`,
                                         width: '30px',
                                         height:'30px',
                                         alignSelf: 'center',
                                         justifySelf:'center' 
   }}>
   </div>
  )
}

export default Circle
