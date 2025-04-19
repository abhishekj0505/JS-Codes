const str = 'abhishek'

const vowels = /[aeiou]/gi // Regular expression to match vowels (case-insensitive)
//i is for case-insensitivity, meaning it will match both uppercase and lowercase letters.


//The g flag stands for global. It tells the regex engine to find all matches in the string — not just the first one.

const foundVowels = str.match(vowels)

console.log(foundVowels)
console.log(foundVowels.length)
