
const num = 6

const factorial = (a)=>{

    if(a===0){
        return 1
    }

    return a * factorial(a-1)

}

console.log(factorial(num))