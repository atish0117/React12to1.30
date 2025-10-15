import React, { useEffect, useState } from 'react'

 const useCostom = (url) => {
    const [data,setData]=useState()

    const fetchData=async()=>{
        const res=await fetch(url)
        const Data =await res.json()
        console.log("cat",Data);
    setData(Data)
        }
        useEffect(()=>{
            fetchData()
        },[])
  return {data}
}

export default useCostom
