import { useState } from "react";
  export  function App(){
    const [count,setCount]=useState(0); //hook

    console.log("count:",count);
    console.log("setCount:",setCount);


      return(
        <>
        <button onClick={()=>{setCount(count+1)}} className="bg-yellow-200 py-1 px-4 rounded"> inc</button>
        <h1>counter = {count}</h1>
        <button onClick={()=>{setCount(count-1)}} className="bg-red-600 py-1 px-4 rounded">Dec</button>
        
        
        </>
      );
      
        }



        // export default App;
