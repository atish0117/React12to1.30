import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Firstcall } from './firstcall'
import { Home } from './Home'
import { SecondCall } from './SecondCall'
export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/firstApi' element={<Firstcall/>}/>
      <Route path='/secondApi' element={<SecondCall/>}/>
    </Routes>
    </BrowserRouter>
  )
}
