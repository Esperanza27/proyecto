const getNumberFormatted =(n)=>{
let formated;
let numberAbbreviated ;
if (n>1000 && n <= 999000) {
  numberAbbreviated= n.toString().slice(0, -3);
  formated= numberAbbreviated + "Mil" 
  }
  else if (n>1000000 && n <= 999000000){
    numberAbbreviated= n.toString().slice(0, -6);
    formated=numberAbbreviated+"Mln"

  }
   else {
    formated = n
   
  }
  return (formated)
}

export default getNumberFormatted;