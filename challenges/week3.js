function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let newArr = [];
  for(let i=0; i<nums.length; i++){
    let square = nums[i]*nums[i];
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
  for(let i=0; i<people.length; i++){
    if(people[i].subjects.length > 0){
      count = count + people[i].subjects.length;
    }
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for(let i=0; i<menu.length; i++){
    let items = menu[i].ingredients;
    for(let j=0; j<items.length; j++){
      if(items[j] === ingredient){
        return true;
      }
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let newArr = [];
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]){
        let n = arr1[i];
        if(!newArr.includes(n)){
        newArr.push(n);
        }
      }
    }
  }
  return newArr.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
