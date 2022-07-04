import "./Footer.scss";
import getNumberFormatted from "../../../../../common/utils/getNumberFormatted"

const Footer = ({details, updateIlike,doComent}) => {
  
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
        <button className="button" onClick={() => updateIlike(details?.id)}
        style={{ backgroundColor: details.status ? 'blue' : 'white' }}>
          <div className="info-button">
            <img src={details?.iconMiPiace} alt="hello A" style={{ width:"30px" }}></img>
            <h3>{details?.miPiace}</h3>
          </div>
        </button>
        <button className="button" onClick={doComent}>
          <div className="info-button">
            <img src={details?.iconCommenti} alt="hello B" style={{ width:"30px" }}></img>
            <h3>{details?.coment}</h3>
          </div>{" "}
        </button>
        <button className="button">
          <div className="info-button">
            <img src={details?.iconFrecciaCondivizione} alt="hello C" style={{ width:"30px" }}></img>
            <h3>{details?.condivide}</h3>
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
