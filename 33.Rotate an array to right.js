//right
const rotateRight = (arr, k) => {
    const len = arr.length;
    k = k % len; // to handle k > length
    return arr.slice(-k).concat(arr.slice(0, len - k));
};

const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 2)); // Output: [4, 5, 1, 2, 3]
