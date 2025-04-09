const arr = [2, 4, 3, 6, 55, 334, 45, 23]

const sorting = (arr)=>{
    return arr.sort((a,b)=>{
        return b-a
    })
}

console.log(sorting(arr))