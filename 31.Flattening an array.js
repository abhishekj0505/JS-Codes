function flattenArray(arr) {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
  }
  
  // Example usage:
  const nestedArray = [1, [2, [3, [4, 5]]], 6];
  const flattenedArray = flattenArray(nestedArray);
  console.log(flattenedArray);