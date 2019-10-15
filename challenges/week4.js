function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let newN = [];
  for(let i=0; i<nums.length; i++){
    if(nums[i] < 1){
      newN.push(nums[i]);
    }
  }
  return newN;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArr = [];
  for(let i=0; i<names.length; i++){
    if(names[i].slice(0,1) === char){
      newArr.push(names[i]);
    }
  }
  return newArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let newWords = [];
  for(let i=0; i<words.length; i++){
    if(words[i].slice(0,3) === 'to '){
      newWords.push(words[i]);
    }
  }
  return newWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newNums = [];
  for(let i=0; i<nums.length; i++){
    if(Number.isInteger(nums[i])){
      newNums.push(nums[i]);
    }
  }
  return newNums;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for(let i=0; i<users.length; i++){
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let newS = [];
  for(let i=0; i<nums.length; i++){
    newS.push(+Math.sqrt(nums[i]).toFixed(2));
  }
  return newS;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  let newSent = [];
  sentences.forEach(function (n) {
    if (n.toLowerCase().indexOf(str.toLowerCase()) > -1) {
      newSent.push(n);
    }
  });
  return newSent;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let newNums = [];
  triangles.forEach(function(n){
    let i = Math.max(...n);
    newNums.push(i);
  })
  return newNums;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
