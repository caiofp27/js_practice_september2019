function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase()+word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0)+"."+lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = ((vatRate/100)*originalPrice)+originalPrice;
  return +vat.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let reduce = originalPrice-((reduction/100)*originalPrice);
  return +reduce.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length % 2 === 0){
    return str[(str.length/2)-1]+str[str.length/2];
  }else {
    return str[Math.floor(str.length / 2)];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reverse = [];
  for(let i in words){
    let word = words[i].split("").reverse().join("");
    reverse.push(word);
  }
  return reverse;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxUsers = 0;
  for(let key in users){
    if(users[key].type === "Linux"){
      linuxUsers++;
    }
  }
  return linuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let nScore = 0;
  let tScore = 0;
  for (let n in scores){
    tScore+=scores[n];
    nScore++;
  }
  let total = tScore/nScore;
  return +total.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result;
  if((n%3 === 0) && (n%5 === 0)){
    result = "fizzbuzz";
  }else if(n%3 === 0){
    result = "fizz";
  }else if(n%5 === 0){
    result = "buzz";
  }else{
    result = n;
  }
  return result;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
