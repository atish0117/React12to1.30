import {useState,useEffect} from "react"
import { Link } from "react-router-dom"
export const Planets=()=>{

    const [item, setItem]=useState([])


    const URL="https://dragonball-api.com/api/planets"
    const fetchData=async()=>{
        const res=await fetch(URL)
        const Data =await res.json()
        console.log("planets",Data.items);
        setItem(Data.items)
        }

        useEffect(()=>{
            fetchData()
        },[])



    return(
        <>
        <div className="w-full h-auto bg-gray-400 p-5 flex justify-evenly flex-wrap gap-4">
            {
                item.map((planet, ind)=>{
                    return(
                        <div key={ind} className="w-60 h-80 bg-green-400 p-4">
                            <div className="w-full h-40 overflow-hidden">
                                <img src={planet.image} alt=""  className=""/>
                            </div>
                            <h1 className="text-xl font-bold text-yellow-200">{planet.name}</h1>
                        <div className=" h-16 line-clamp-3 overflow-y-auto scrollbar-hide">
                            <p>{planet.description}</p>
                        </div>

                        <div>
                            {planet.isDestroyed ? <h1 className="text-red-600 font-bold">Destroyed</h1> : <h1 className="text-blue-600 font-bold">Not Destroyed</h1>
                            
                            }
                        </div>
                        <Link to={`/singlePlanet/${planet.id}`}>view Details</Link>
                        </div>

                    )
                })
            }

        </div>

        
        </>
    )

}
