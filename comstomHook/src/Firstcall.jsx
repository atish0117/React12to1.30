import React, { useState,useEffect } from 'react'
import useCostom from './useCostom'

export const Firstcall = () => {
    const [data,setData]=useState()
    const {item}=useCostom("https://api.thecatapi.com/v1/images/search?limit=10")

    
            setData(item)


  return (
     <>
    <div>
        {
            data?.map((e,inx)=>{
                return(
                    <div key={inx}>
                        <div>
                            <img src={e.url} alt="" />
                        </div>

                    </div>
                )
            })
        }
    </div>

      </>
  )
}
