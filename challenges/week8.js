const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let numb = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] === n){
      numb = nums[i+1];
      break;
    }else{
      numb = null;
    }
  }
  return numb === undefined ? null : numb;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {1: 0, 0: 0};
  for(let i=0; i<str.length; i++){
    if(str[i] === "1"){
      obj[1]++;
    }else{
      obj[0]++;
    }
  }
  return obj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
