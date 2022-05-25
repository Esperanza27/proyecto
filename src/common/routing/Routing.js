import { Routes, Route } from "react-router-dom";

import Post from "../components/post/Post";
import Registration from "../../pages/Registration";
import Details from "../../pages/details/Details";
import Torte from "../../pages/torte/Torte";

const Routing =()=>{
    return (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/torte" element={<Torte/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/showcase" element={<Post/>}/>
      </Routes>
    
    )
}
export default Routing;
const Home =()=>{
    return (
        <div> HOME </div>
    )
}
