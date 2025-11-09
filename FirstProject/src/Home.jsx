import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import { Props } from './Props'
const Home =()=>{
    return(
        <>
        <h1>Home</h1>
        <div className="flex ">
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" className="w-40 h-40" /> {/*without download */}
        <img src="../public/p1.jpg" alt="" className="w-40 h-40"/>
        <img src="p2.jpg" alt="" className="w-40 h-40" />
        <img src={img1} alt="" className="w-40 h-40" />
        <img src={img2} alt="" className="w-40 h-40" />

        </div>

        <Props/>
        

        </>
    )
}

export default Home;