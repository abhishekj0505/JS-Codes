
const a = 236       
const b = 26       

const check = (x,y)=>{

    if(x%10==y%10){
        console.log(`${x} and ${y} have same last digits`)
    }else{
        console.log(`${x} and ${y} dont have same last digits`)
    }

}

check(a,b)
