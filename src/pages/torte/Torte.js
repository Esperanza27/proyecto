import { useState } from "react";

import "./Torte.scss";
import CardTorte from "../../common/components/cards/cardsTorte/CardTorte";
import SearchBar from "../../common/searchBar/SearchBar";

const Torte = () => {
  const torteList = [
    { title: "compleanno", description: "pippo" },
    { title: "communione", description: "pluto" },
    { title: "matrimonio", description: "ivan" },
    { title: "compleanno", description: "paperino" },
  ];
  const [cakeFiltered, setCakeFiltered] = useState(torteList);
  console.log(cakeFiltered);
  const filteredList = (list) => {
    setCakeFiltered(list);
    console.log(list);
  };
funzioneData(2022,1990);
  return (
    <div>
      <SearchBar list={torteList} filteredList={filteredList} />
      <div className="cards-torte">
      {cakeFiltered.map((cake, i) => {
        return (
          <div >
            <CardTorte cake={cake} />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Torte;

const funzioneData=(annoCurrent, annoDiNascita)=>{
  const anni = annoCurrent-annoDiNascita;
console.log( `Io ho ${ anni}`)
};
