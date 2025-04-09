const num = 30

const factors = (a)=>{

    for(let i = 2; i<=a; i++){
        if(a%i===0){
            console.log(`${i} is a factor of ${a}`)
        }
    }

}

factors(num)