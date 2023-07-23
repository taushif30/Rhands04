import React from 'react'
import Routecompo from './Handson4/Routecompo'
import { BrowserRouter } from 'react-router-dom'
import LinkCompo from './Handson4/LinkCompo'

export const App = () => {
  return (

    <div>
      

      <BrowserRouter>
      <LinkCompo/>

      <Routecompo/>
      </BrowserRouter>

      {/* <Routecompo/> */}
    </div>


  )
}

export default App;
