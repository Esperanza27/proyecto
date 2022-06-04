import "./Head.scss";

const Head = ({details}) => {
  console.log(details.title);
  return (
    <div className="container-head">
      <div className="sub-container">
        <div className="img-container">
          <img className="imagen" src={details?.iconLogo} alt="hello"></img>
          <div className="title">
           <h2>{ details?.title }</h2> 
            <div className="info">
              <div>{ details?.ora }</div>
              <img src={details?.iconGlobo} alt="hello"></img>
            </div>
          </div>
        </div>
        <div className="chiusura">
          <h1>{details?.chiusura}</h1>
        </div>
      </div>
      <div className="description">{details?.description}</div>
    </div>
  );
};
export default Head;
