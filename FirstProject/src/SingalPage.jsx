import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react"
export const SingalPage = () => {

     const [item,setItem]=useState([])

     const {id}=useParams()

    
      const URL =`https://dragonball-api.com/api/characters/${id}`
          const fetchData =async()=>{
            const res =await fetch(URL)
            const data =await res.json()
            console.log(data)
            setItem(data)

            
          }
          console.log("items",item);
    
          useEffect(()=>{
            fetchData()
          },[])

  return (
    <>
    <div>
        hello I am Singal Page {id}
    </div>
    </>
  )
}
