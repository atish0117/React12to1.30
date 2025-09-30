import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import { Planets } from "./Planets"
import Character  from "./Character"
import Home from "./Home"
const App = () => {
  return (

    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Home/>} />

  </Routes>

  <Routes>
    <Route path="/planets" element={<Planets/>} />
  </Routes>

  <Routes>

    <Route path="/character" element={<Character/>} />

  </Routes>
  

    
    </BrowserRouter>
    
  )
}

export default App
