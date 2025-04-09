const array = [23,54,32,23,12,34,55]

let largestNumber = array[0]

for(let i=0; i<array.length; i++){
    if(array[i]>largestNumber){
        largestNumber = array[i]
    }
}

console.log(largestNumber)