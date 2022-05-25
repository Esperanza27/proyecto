import "./Footer.scss";
import iconMiPiace from"../../../../icon/iconMiPiace.png";
import iconCommenti from "../../../../icon/iconCommenti.png";
import iconFrecciaCondivizione from "../../../../icon/iconFrecciaCondivizione.png"
import iconFaccia from "../../../../icon/iconFaccia.png";
import iconLike from "../../../../icon/iconLike.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="container-visualization">
        <div className="number-like">
          <div className="like">
            <img src={iconFaccia} alt="hello faccia"></img>
        <img src={iconLike} alt="hello "></img></div>
        <div>2,8 mil</div>
        </div>
        <div className="number-coments">
          <div>70 comentarios   776 veces compartido</div>
        </div>
      </div>
      <div className="container-button">
        <button className="mi-piace"> 
        <div className="info-button">
          <img src={iconMiPiace} alt="hello A"></img>
          <h2>Me Gusta</h2>
        </div >
        </button>
        <button className="comenta"> 
        <div className="info-button">
          <img src={iconCommenti} alt="hello B"></img>
          <h2>Comenta</h2>
        </div> </button>
        <button className="condivide"> 
        <div className="info-button">
          <img src={iconFrecciaCondivizione} alt="hello C"></img>
          <h2>Compartir</h2>
        </div> </button>
      </div>
    </div>
  );
};

export default Footer;
