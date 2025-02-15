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
  return parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for(let i=0; i<arrs.length; i++){
    arrs[i].forEach(n => {
      sum+=n;
    });
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length >= 2){ 
    let l = arr.pop();
    let f = arr.shift();
    arr.unshift(l);
    arr.push(f);
    return arr;
  }else{
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let find = false;
  for(let key in haystack){
    if(typeof haystack[key] === 'string'){
      let item = haystack[key].toLowerCase();
      let search = searchTerm.toLowerCase();
      if(item.includes(search)){
        find = true;
      }
    }
  }
  return find;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {};
  let arr = str.split(" ");
  for(let i=0; i<arr.length; i++){
    let str1 = arr[i].replace(/[^a-zA-Z ]/g, "").toLowerCase();
    obj[str1] = obj[str1] ? obj[str1] + 1 : 1;
  }
  return obj;
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
