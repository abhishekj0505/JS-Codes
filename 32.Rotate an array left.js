//left

const rotateLeft = (arr, k) => {
    const len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
};

const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr, 2)); // Output: [3, 4, 5, 1, 2]



