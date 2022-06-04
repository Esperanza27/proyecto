import { Routes, Route } from "react-router-dom";

import Registration from "../../pages/Registration";
import Details from "../../pages/details/Details";
import Torte from "../../pages/torte/Torte";
import Bacheca from "../components/bacheca/Bacheca";

const Routing =()=>{
    return (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/torte" element={<Torte/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/showcase" element={<Bacheca/>}/>
      </Routes>
    
    )
}
export default Routing;
const Home =()=>{
    return (
        <div> HOME </div>
    )
}
