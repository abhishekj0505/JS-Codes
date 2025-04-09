const greet = (name, callback)=>{
    console.log(`hi ${name}`)

    callback()
}

const saySomething = ()=>{
    console.log('Good Morinig')
}

greet('abhishek',saySomething)