import {BrowserRouter, Routes,Route, Form} from "react-router-dom"
import { Home } from "./Home";

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/form " element={<Form/>} />
      <Route path="/update/:id" element={<Form/>} />
      
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App;
