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
    <div className="w-full min-h-screen bg-gradient-to-b from-amber-100 to-white p-8 flex flex-wrap justify-center gap-8">
      {item.map((value, ind) => (
        <div
          key={ind}
          className="w-52 bg-white shadow-lg rounded-2xl  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-200 h-48 flex justify-center items-center">
            <img
              src={value.image}
              alt={value.name}
              className="h-36 object-contain drop-shadow-lg hover:scale-150 overflow-auto transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="p-5 space-y-2">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {value.name}
            </h2>
            <p className="text-sm text-gray-600 text-center italic">
              {value.affiliation || "No Affiliation"}
            </p>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Race:</span> {value.race}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {value.gender}
              </p>
              <p>
                <span className="font-semibold">Ki:</span> {value.ki}
              </p>
              <p>
                <span className="font-semibold">Max Ki:</span> {value.maxKi}
              </p>
            </div>

            {/* Short Description */}
            <div className="mt-3 h-16 overflow-hidden text-ellipsis text-gray-600 text-sm leading-tight">
              {value.description?.slice(0, 100)}...
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link
                to={`/singlapage/${value.id}`}
                className="block text-center bg-amber-400 text-white font-semibold py-2 rounded-lg hover:bg-amber-500 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Character;