import { set } from 'mongoose'
import React, { useState } from 'react'

 const App = () => {
  const [count,setCount]=useState(16)

    // const update=()=>{
    //   setCount(count+1)
    // }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+2)}>clickme</button>
    </>
  )
}

export default App