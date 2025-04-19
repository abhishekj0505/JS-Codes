const arr = [1, 0, 43, 6, 0, 2, 67, 0];
let zeroIndex = arr.length - 1;

// Move all non-zero elements towards the right end
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] !== 0) {
    arr[zeroIndex] = arr[i];
    zeroIndex--;
  }
}

// Fill the remaining positions with 0
for (let i = zeroIndex; i >= 0; i--) {
  arr[i] = 0;
}

console.log(arr); // [0, 0, 0, 1, 43, 6, 2, 67]


// to right 


const arr2 = [1, 0, 43, 6, 0, 2, 67, 0];
let nonZeroIndex = 0;

// Move all non-zero elements to the front
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[nonZeroIndex] = arr[i];
    nonZeroIndex++;
  }
}

// Fill the remaining positions with 0
for (let i = nonZeroIndex; i < arr.length; i++) {
  arr[i] = 0;
}

console.log(arr); // [1, 43, 6, 2, 67, 0, 0, 0]
