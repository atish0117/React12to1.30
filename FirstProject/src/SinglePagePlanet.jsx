import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {useState} from "react"

export const  SinglePagePlanet=()=>{
    const [item, setItem]=useState({})
    const {id} =useParams()
    

    const URL=`https://dragonball-api.com/api/planets/${id}`
    const fetchData= async()=>{
        const response =await fetch(URL)
        const data =await response.json()
        console.log(data)
        setItem(data)

    }

    console.log("item",item.name)

    useEffect(()=>{
        fetchData()
    },[])



    return(
        <>
        <div className="main w-full">
            <div className="detail w-full flex">
                <div className="left w-1/2 ">
                    <img src={item.image} alt="" className="object-cover w-full" />
                </div>
                <div className="right w-1/2 bg-amber-100 ">

                <div className="itemsDetails">
                    <h1>name:{item.name}</h1>
                </div>

                </div>
            </div>
        </div>
        </>
    )
}

// export default SinglePagePlanet;