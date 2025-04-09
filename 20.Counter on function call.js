const counter = ()=>{

    let count = 0

    return ()=>{
        return count ++
    }
}

const c = counter()

console.log(c())
console.log(c())
console.log(c())
console.log(c())
