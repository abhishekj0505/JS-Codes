
const str = 'Hi i am abhishek'

const strArray = str.split(' ')

const longestWord = (strArray)=>{
    return strArray.reduce((longest, current)=>{
        return current.length>longest.length? current : longest
    })
}

console.log(longestWord(strArray))