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
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
