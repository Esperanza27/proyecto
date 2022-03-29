// style
import "./PiattoDiPasta.scss";

// props
const PiattoDiPasta = () => {
  // ingredientes en gramos
  const acqua = 10000;
  const pasta = 100;
  const sale = 10;
  const tonno = 80;
  const cipolla = 20;
  const olio = 10;
  // unidad de misura: minutos;
  const tempDiCotturaAcqua = 5000;
  const tempDiCotturaPasta = 15;
  const tempDiSoffrito = 5;
  const tempDiCondire = 2;
  // function
  boilWater(acqua, sale, tempDiCotturaAcqua);
  makeSauce(olio, cipolla, tonno, tempDiSoffrito);
  cookTheNoodles(boilWater, pasta, tempDiCotturaPasta);
};
const boilWater = (acqua, sale, tempDiCotturaAcqua) => {
  setTimeout(() => {
    console.log(`portare ad ebollizione acqua sale`);
  }, tempDiCotturaAcqua);
};
const makeSauce = (olio, cipolla, tonno, tempDiSoffrito) => {
  console.log("soffrire il" + "olio" + "cipolla" + "tonno" + tempDiSoffrito);
};
const cookTheNoodles = (boilWater, pasta, tempDiCotturaPasta) => {
  console.log(boilWater(), "incorporare la " + "pasta" + tempDiCotturaPasta);
};
const ensavorire = () => {};

export default PiattoDiPasta;



