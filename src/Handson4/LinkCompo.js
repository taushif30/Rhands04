import React from 'react'
import { Link } from 'react-router-dom'
import '../Handson4/Css.css'



const LinkCompo = () => {
  return (
    <div className='top'>

        <Link to='/' className='home'>Home</Link>
        <Link to='/Student' className='student'>Student</Link>
        <Link to='/Contact' className='contact'>Contact Us</Link>



    </div>
  )
}

export default LinkCompo