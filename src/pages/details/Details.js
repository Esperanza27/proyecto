import { useEffect, useState } from "react";

import "./Details.scss";
import torteCompleanno from "../../common/imag/torteCompleanno.jpg";

const detailsData = {
    1: {
      img: torteCompleanno,
      title: "Torta Cake design compleanno",
      desc: "Realizzare",
    },
    2: {
      img: torteCompleanno,
      title: "Torta Cake design Matrimonio",
      desc: "Realizzare",
    },
    3: {
      img: torteCompleanno,
      title: "Torta Cake design Communione",
      desc: "Realizzare",
    },
  };

const Details = () => {

    const param = 1;
  
  const [detail, setDetail] = useState({});

  useEffect(() => {
    detailsData && param && setDetail(detailsData[param]);
  }, []);

  console.log("id", param);

  return (
    <div className="details-conteiner">
      <div className="conteiner-compleanno">
        <img
          src={detail?.img}
          alt="Torte compleanni"
          className="img-compleanno"
        ></img>
        <div className="text-compleanno">
          <h1> {detail?.title} </h1>
          <p>{detail?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;

/* "Realizzare queste torte altamente scenografiche è possibile grazie
            all’uso della pasta da zucchero, cioccolata e tantissimi altri
            elementi: sta solo a voi scegliere i vostri preferiti. Facile da
            personalizzare, straordinaria a vedersi. Ovviamente, è bene
            ricordare che una torta oltre che ad essere bella deve anche essere
            gustosa." */
