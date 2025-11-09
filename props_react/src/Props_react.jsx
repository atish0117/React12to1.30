import React from 'react'
import {Home} from './Home'
export const Props_react = () => {
   let stu= {
    name:"sanjay",
    age:25,
    post:"HR"
   }
  return (
    <div>Props_react
        <Home student={stu} />
    </div>
    
  )
}
