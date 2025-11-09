import React from 'react'
import Home from './Home'
export const Props = () => {

    let name="Sachin"
    let post="developer"
  return (
    <div> Props
        <Home FullName={name} POST={post}/>

    </div>
  )
}
