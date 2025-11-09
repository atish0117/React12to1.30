import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Planets } from "./Planets"
import Character  from "./Character"
import Home from "./Home"
import ErrorPage from './ErrorPage'
import Navbar  from './Navbar'
import { SingalPage } from './SingalPage'
import {SinglePagePlanet} from "./SinglePagePlanet"
import { Props } from './Props'
const App = () => {
  return (

    <BrowserRouter>

    <Navbar/>

    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/props" element={<Props/>} />

  
    {/* <Routes>

    <Route path="*" element={<ErrorPage/>} /> 

  </Routes> */}

  
    <Route path="/planet" element={<Planets/>} />
  

  

    <Route path="/character" element={<Character/>} />

  
  

    <Route path="/singlapage/:id" element={<SingalPage/>} />

  

    <Route path='/singlePlanet/:id' element ={<SinglePagePlanet/>}/>
  </Routes>
  
    
    </BrowserRouter>
    
  )
}

export default App
