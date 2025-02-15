function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
   if (person === undefined) throw new Error("person is required");
  if(person.city === "Manchester"){
    return true;
  }else{
    return false;
  }
  //return person.city === "Manchester" ? true : false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheep = 0;
  for(let key in arr){
    if(arr[key] === "sheep"){
      sheep++;
    }
  }
  return sheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let personCity = person.address.city;
  let personPostCode = person.address.postCode;
  return personCity === "Manchester" && personPostCode.slice(0,1) === "M";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
