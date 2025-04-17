
const num = 6

const check = (a) => {

    if (a < 1) {
        console.log(`${a} is not a prime number`)
        return
    }

    if (a == 1) {
        console.log(`${a} is neither a composite nor a prime number`)
        return
    }

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            console.log(`${a} is a composite number`)
            return
        }

        
    }
    
    console.log(`${a} is a prime number`)

}

check(num)