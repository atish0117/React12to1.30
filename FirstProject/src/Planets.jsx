import {useState,useEffect} from "react"
import { Link } from "react-router-dom"
export const Planets=()=>{

    const [item, setItem]=useState([])


    // const URL="https://dragonball-api.com/api/planets"
    const URL=" https://api.thecatapi.com/v1/images/search?limit=10"
    const fetchData=async()=>{
        const res=await fetch(URL)
        const Data =await res.json()
        console.log("cat",Data);
        setItem(Data)
        }

        console.log("itemsss",item)



        useEffect(()=>{
            fetchData()
        },[])



    return (
      <>
    <div>
      {
        item.map((Element, ind)=>{
          return(
            <div key={ind}>
              <Link to={`/singlePlanet/${Element.id}`}>
              <img src={Element.url} alt=""  height={Element.height} width={Element.width}/>
              </Link>
            </div>
          )
        })
      }
    </div>

      </>
    // <div className="w-full min-h-screen bg-gradient-to-b from-green-100 to-white p-8 flex flex-wrap justify-center gap-8">
      
    //   {item.map((planet, ind) => (
    //     <div
    //       key={ind}
    //       className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    //     >
    //       {/* Image Section */}
    //       <div className="relative bg-gradient-to-br from-green-200 to-green-400 h-40 flex justify-center items-center">
    //         <img
    //           src={planet.image}
    //           alt={planet.name}
    //           className="h-32 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
    //         />

    //         {/* Status Badge */}
    //         <span
    //           className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full ${
    //             planet.isDestroyed
    //               ? "bg-red-500 text-white"
    //               : "bg-blue-500 text-white"
    //           }`}
    //         >
    //           {planet.isDestroyed ? "Destroyed" : "Safe"}
    //         </span>
    //       </div>

    //       {/* Content Section */}
    //       <div className="p-4 space-y-2 text-center">
    //         <h1 className="text-xl font-bold text-green-700">
    //           {planet.name}
    //         </h1>

    //         <p className="text-sm text-gray-600 h-20 overflow-hidden line-clamp-3">
    //           {planet.description}
    //         </p>

    //         {/* View Button */}
    //         <Link
    //           to={`/singlePlanet/${planet.id}`}
    //           className="inline-block w-full mt-3 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
    //         >
    //           View Details
    //         </Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );

}
