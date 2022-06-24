import "./Footer.scss";
import getNumberFormatted from "../../../../../common/utils/getNumberFormatted"

const Footer = ({details}) => {
  
    return (
    <div className="container-footer">
      <div className="container-visualization">
        <div className="number-like">
          <div className="like">
            <img src={details?.iconFaccia} alt="hello faccia"></img>
            <img src={details?.iconLike} alt="hello "></img>
          </div>
          <div>{getNumberFormatted(details?.numberLike)}</div>
        </div>
        <div className="number-coments">
          <div>{details?.infoComent}</div>
        </div>
      </div>

      <div className="line-container">
        <div className="line" />
      </div>

      <div className="container-button">
        <button className="button">
          <div className="info-button">
            <img src={details?.iconMiPiace} alt="hello A"></img>
            <h2>{details?.miPiace}</h2>
          </div>
        </button>
        <button className="button">
          <div className="info-button">
            <img src={details?.iconCommenti} alt="hello B"></img>
            <h2>{details?.coment}</h2>
          </div>{" "}
        </button>
        <button className="button">
          <div className="info-button">
            <img src={details?.iconFrecciaCondivizione} alt="hello C"></img>
            <h2>{details?.condivide}</h2>
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
