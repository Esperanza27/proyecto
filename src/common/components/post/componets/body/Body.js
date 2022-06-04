import "./Body.scss";

const Body = ({ details }) => {
  const isFoto = true;
  return <div className="container-foto">{isFoto ? <Foto detailsFoto={details} /> : <Video detailsVideo={details} />}</div>;
};

export default Body;

const Foto = ({ detailsFoto }) => {
  return (
    <div>
      <img src={detailsFoto?.foto} alt="esperanza" className="foto" />
    </div>
  );
};
const Video = ({ detailsVideo }) => {
  return (
    <div>
      {detailsVideo.video}
      {/* <source src="" type="" alt="Ivan" /> */}
    </div>
  );
};


