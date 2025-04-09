
const num = 6


let z = 1


const factorial = (a) => {

    for (let i = 1; i <= a; i++) {
        z = z * i
    }

    return z
}



console.log(factorial(num))