const countCharacters = (str) => {
    const charMap = {};

    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    return charMap;
};

const input = "hello world";
console.log(countCharacters(input));