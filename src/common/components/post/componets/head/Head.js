import "./Head.scss";
import iconMondo from "../../../../icon/iconMondo.jpg";
import iconGlobo from "../../../../icon/iconGlobo.png";
const Head = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="img-container">
          <img className="imagen" src={iconMondo} alt="hello"></img>
          <div className="title">
            Ecorevolución
            <div className="info">
              <h3>19 h</h3>
              <img src={iconGlobo} alt="hello"></img>
            </div>
          </div>
        </div>
        <div className="chiusura">
          <h1>...</h1>
        </div>
      </div>
      <div className="description">#Ecorevolución</div>
    </div>
  );
};
export default Head;
