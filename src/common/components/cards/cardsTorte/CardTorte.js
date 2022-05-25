import { useNavigate } from "react-router-dom";
//style
import "./CardsTorte.scss";
const CardTorte = ({ cake, id }) => {
  const navigate = useNavigate();
  console.log(cake);
  const detailsFunction = () => {
    console.log("ho clicado");
    navigate(`/details`);
  };

  return (
    <div className="card">
      <h1>{cake?.title}</h1>
      <p>{cake?.description}</p>
      <button className="button-details" onClick={detailsFunction}>
        DETAILS
      </button>
    </div>
  );
};

export default CardTorte;
