import React from 'react'

export const Home = ({student}) => {
    // console.log("home props",props)
    console.log("home props student",student)
    console.log("home props student name",student.name)
    // console.log(fullName)
    // console.log(Age)
  return (
    <div>Home

      <h1>name={student?.name}</h1>
      <h1>age={student?.age}</h1>
      <h1>age={student?.post}</h1>
      
    </div>
  )
}
