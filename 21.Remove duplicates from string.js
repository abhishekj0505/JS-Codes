
const str = 'abhishek'

let uniquestr = ''

for(let i=0; i<str.length; i++){
    if(uniquestr.indexOf(str[i])===-1){
        uniquestr = uniquestr + str[i]
    }
}

console.log(uniquestr)