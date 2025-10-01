import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
const Character=()=>{
  const [item,setItem]=useState([])

  const URL ='https://dragonball-api.com/api/characters'
      const fetchData =async()=>{
        const res =await fetch(URL)
        const data =await res.json()
        setItem(data.items)
        
      }
      console.log("items",item);

      useEffect(()=>{
        fetchData()
      },[])

  return (
<>
<div className="w-full h-auto bg-gray-400 p-5 flex justify-evenly flex-wrap gap-4 ">
{
  item.map((value, ind)=>{
    return(
      <div key={ind} className="w-80 h-80 bg-amber-200  py-5 px-8 " >
        <div className="w-full h-36 bg-white overflow-hidden">
        <img src={value.image} alt="" className="m-auto w-20 "/>
        </div>
        <h1 >Name: <span className="text-green-500 font-extrabold"> {value.name} </span></h1>
        <h2>{value.affiliation}</h2>
        <button className="border"><Link to={`/singlapage/${value.id}`}>View Details</Link></button>
      </div>
    )
  })
}</div>
</>
  );
}
export default Character;