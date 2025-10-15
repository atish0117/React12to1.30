import React ,{useState, useEffect} from 'react'
import useCostom from './useCostom'

export const SecondCall = () => {

     
     const {data} =useCostom(" https://api.thecatapi.com/v1/images/search?limit=10")
            console.log(data)
  return (
    <>
    <div>
    {
        data?.map((e,inx)=>{
            return(
                <div key={inx}>
                    <div>
                    <img src={e?.url} alt="" />
                    </div>
                </div>
            )
        })
    }
    </div>
    </>
  )
}
