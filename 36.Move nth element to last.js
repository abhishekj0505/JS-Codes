const moveSecondToLast = (arr) => {
    // if (arr.length < 2) return arr; // nothing to move
    const third = arr.splice(2, 1)[0]; // remove the 3rd element
    arr.push(third); // add it to the end
    return arr;
};

let arr = [10, 20, 30, 40];
console.log(moveSecondToLast(arr)); // Output: [10, 30, 40, 20]
