const num = 6


const fib = (a) => {
    
    let fibo = [1,2]
    for (let i = 2; i <= a; i++) {
        fibo[i] = fibo[i - 1] * fibo[i - 2]
    }

    return fibo

}

console.log(fib(num))