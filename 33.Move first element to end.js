const moveFirstToLast = (arr) => {
    if (arr.length === 0) return arr;
    const first = arr.shift();  // removes the first element
    arr.push(first);            // adds it to the end
    return arr;
};

let arr = [10, 20, 30, 40];
console.log(moveFirstToLast(arr)); // Output: [20, 30, 40, 10]

