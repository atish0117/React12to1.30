import  {Link} from "react-router-dom"

const Navbar =()=>{

    return(
        <nav className="navbar w-full h-20 bg-blue-400 px-16 py-5  ">

            <div className=" w-full h-full flex justify-between items-center ">
                <h1 className="text-3xl font-bold text-gray-500">
                    <Link to="/">LOGO</Link>
                </h1>

                <div className="ITEMS flex gap-8 text-xl cursor-pointer px-10 font-semibold ">
                <h3 className="active:text-yellow-200 underline"><Link to="/">Home</Link></h3>
                <h3 className="active:text-yellow-200"><Link to="/planet">Planets</Link></h3>
                <h3 className="active:text-yellow-200"><Link to="/character">Character</Link></h3>
                </div>
            </div>


        </nav>
    )
}
export default Navbar;