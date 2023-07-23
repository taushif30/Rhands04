import React from 'react'
import Student from './Student'
import Contact from './Contact'
import Home from './Home'
import {  Route, Routes } from 'react-router-dom'

const Routecompo = () => {
  return (
    <>
        
        {/* <BrowserRouter> */}
        <Routes >

        <Route path='/' element={<Home />}/>
        <Route path='/Student' element={<Student />}/>
        <Route path='/Contact' element={<Contact />}/>


        </Routes>
        {/* </BrowserRouter> */}


        {/* <Home/>
        <Student/>
        <Contact/> */}
    </>
  )
}

export default Routecompo