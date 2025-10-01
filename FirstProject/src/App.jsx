import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import { Planets } from "./Planets"
import Character  from "./Character"
import Home from "./Home"
import ErrorPage from './ErrorPage'
import Navbar  from './Navbar'
import { SingalPage } from './SingalPage'
const App = () => {
  return (

    <BrowserRouter>

    <Navbar/>

    <Routes>

    <Route path="/" element={<Home/>} />

  </Routes>
    {/* <Routes>

    <Route path="*" element={<ErrorPage/>} /> 

  </Routes> */}

  <Routes>
    <Route path="/planet" element={<Planets/>} />
  </Routes>

  <Routes>

    <Route path="/character" element={<Character/>} />

  </Routes>
  <Routes>

    <Route path="/singlapage/:id" element={<SingalPage/>} />

  </Routes>
  
    
    </BrowserRouter>
    
  )
}

export default App
