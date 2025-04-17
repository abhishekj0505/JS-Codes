const moveSecondToLast = (arr) => {
    if (arr.length < 2) return arr; // nothing to move
    const second = arr.splice(1, 1)[0]; // remove the 2nd element
    arr.push(second); // add it to the end
    return arr;
};

let arr = [10, 20, 30, 40];
console.log(moveSecondToLast(arr)); // Output: [10, 30, 40, 20]
