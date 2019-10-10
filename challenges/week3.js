function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let newArr = [];
  for(let key in nums){
    let square = nums[key]*nums[key];
    newArr.push(square);
  }
  return newArr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if(words.length > 1){
    for(let i=1; i<words.length;i++){
      let word = words[i];
      let wordUp = word.charAt(0).toUpperCase()+word.slice(1);
      words[i] = wordUp;
    }
  }else{
    return words.join("");
  }
  return words.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for(let key in people){
    if(people[key].subjects.length > 0){
      count = count + people[key].subjects.length;
    }
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
