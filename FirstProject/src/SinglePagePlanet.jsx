import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {useState} from "react"
import { Link } from "react-router-dom"
export const  SinglePagePlanet=()=>{
    const [item, setItem]=useState({})
    // const {id} =useParams() // direct distructure

    const {id} =useParams()
    console.log("id",id)
    // console.log("id",id.id)

    

    const URL=`https://dragonball-api.com/api/planets/${id}`
    // const URL=`https://api.thecatapi.com/v1/images/${id}`
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



  return (
<>    <div className="main w-full bg-gradient-to-b from-amber-100 to-white min-h-screen">
      {/* Planet Details Section */}
      <div className="detail w-full flex flex-col md:flex-row items-center py-10 px-6 md:px-12">
        {/* Left Side - Image */}
        <div className="left w-full md:w-1/2 flex justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="object-contain w-4/5 md:w-3/4 h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Details */}
        <div className="right w-full md:w-1/2 mt-10 md:mt-0">
          <div className="itemsDetails space-y-6">
            <h1 className="text-5xl font-bold text-gray-800">
              {item.name}
            </h1>
            <p className="text-2xl text-gray-700">
              <span className="font-semibold text-amber-600">Planet Description:</span>
            </p>
            <p className="text-lg text-gray-600 bg-gray-100 p-4 rounded-xl max-h-56 overflow-y-auto shadow-inner">
              {item.description}
            </p>

            <div className="text-xl font-medium">
              <span className="text-gray-700">Destroyed:</span>{" "}
              <span
                className={`font-bold ${
                  item.isDestroyed ? "text-red-600" : "text-green-600"
                }`}
              >
                {item.isDestroyed ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Character Section */}
      <div className="char flex flex-wrap justify-center gap-8 py-12 bg-gradient-to-t from-amber-50 to-white rounded-t-3xl">
        <h2 className="w-full text-center text-4xl font-bold text-gray-800 mb-8">
          Characters from <span className="text-amber-500">{item.name}</span>
        </h2>

        {item?.characters?.map((value, ind) => (
          <div
            key={ind}
            className="w-80 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-48 flex justify-center items-center">
              <img
                src={value.image}
                alt={value.name}
                className="h-36 object-contain drop-shadow-md hover:scale-150 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold text-gray-800">{value.name}</h2>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Affiliation:</span>{" "}
                {value.affiliation || "Unknown"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Race:</span> {value.race}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Gender:</span> {value.gender}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Ki:</span> {value.ki} /{" "}
                {value.maxKi}
              </p>

              {/* Button */}
              <div className="pt-3">
                <Link
                  to={`/singlapage/${value.id}`}
                  className="block w-full text-center bg-amber-400 text-white font-semibold py-2 rounded-lg hover:bg-amber-500 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
}

// export default SinglePagePlanet;