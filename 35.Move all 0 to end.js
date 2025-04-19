const arr = [1, 0, 43, 6, 0, 2, 67, 0];
const result = arr.filter(num => num !== 0).concat(arr.filter(num => num === 0));
console.log(result); // [1, 43, 6, 2, 67, 0, 0, 0]


//to left

const arr2 = [1, 0, 43, 6, 0, 2, 67, 0];
const result2 = arr.filter(num => num === 0).concat(arr.filter(num => num !== 0));
console.log(result); // [0, 0, 0, 1, 43, 6, 2, 67]

