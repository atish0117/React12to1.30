import  {Link} from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const Navbar =()=>{
    const [menu ,setMenu]=useState(false)

    return(
        <nav className=" bg-amber-300">
            <div className="w-full h-24 flex justify-between px-20 items-center bg-gray-700">
            <div className="left  bg-amber-50"> <Link to="/" className="logo">LOGO</Link> </div>
            <div className="right text-xl bg-red-300"> 
                <div className=" gap-10  hidden sm:flex ">
                <Link to="/"><div>HOME</div></Link>
                <Link to="/character"><div>Character</div></Link>
                <Link to="/planet"><div>Planets</div></Link>
                <div>contact</div>
                </div>
               
            </div>
             <div className="sm:hidden flex " onClick={()=>setMenu(!menu)}>
                    <div className="">

                    {
                        menu ?( <RxCross1 />) :( <CiMenuBurger/>)

                        
                    }
                    </div>
                    
                    </div>
                        <div className="">
                        {menu &&(
                            <div className=" gap-10  mt-30  block ">
                <Link to="/" onClick={()=>setMenu(false)}><div>HOME</div></Link>
                <Link to="/character" onClick={()=>setMenu(false)}><div>Character</div></Link>
                <Link to="/planet" onClick={()=>setMenu(false)}><div>Planets</div></Link>
                <div onClick={()=>setMenu(false)}>contact</div>
                </div>
                        )

                        }
            
                {/* <CiMenuBurger/>
                <RxCross1 /> */}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;