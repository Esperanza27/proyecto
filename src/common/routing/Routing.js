import { Routes, Route } from "react-router-dom";

import Registration from "../../pages/Registration";

const Routing =()=>{
    return (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    
    )
}
export default Routing;
const Home =()=>{
    return (
        <div> HOME </div>
    )
}
