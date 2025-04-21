const array = [2,2,3,3,4,4,4,5,5,6,6,3,4]

const unique = []

for(let i=0; i<array.length; i++){
    if(unique.indexOf(array[i])===-1){
        unique.push(array[i])
    }
}

console.log(unique)

// OR 

// const array = [1,1,2,1,3,2,3,4,4,3,4,5,6,5,4,3]

// const remove = (array)=>{
//     return array.filter((item , index)=>{
//         return array.indexOf(item)===index
//     })
// }

// console.log(remove(array))