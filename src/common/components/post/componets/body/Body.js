import "./Body.scss";
import abejaPost from "../../../../imag/abejaPost.jpg";

const Body = () => {
  const isFoto = true;
  return <div className="container-foto">
    {isFoto ? <Foto/> : <Video />} 
  </div>;
};

export default Body;

const Foto = () => {
  return (
    <div>
      <img src= {abejaPost} alt="esperanza" className="foto"/>
    </div>
  );
};
const Video = () => {
  return (
    <div>
      Ivan
      {/* <source src="" type="" alt="Ivan" /> */}
    </div>
  );
};
