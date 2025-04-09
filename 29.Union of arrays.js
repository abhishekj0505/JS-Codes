const a = [1,2,3,4,5,6,7,8]

const b = [1,5,7,23,45,67]

const union = (a,b)=>{
    return a.concat(b.filter((item)=>{
        return !a.includes(item)
    }))
}

console.log(union(a,b))