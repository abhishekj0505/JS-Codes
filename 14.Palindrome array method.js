const str = 'abccbac'

const strArray = str.split('')

const newArray = strArray.reverse()

const newStr = newArray.join('')

if(newStr === str){
    console.log('It is a palindrome')
}else{
    console.log('It isnt a palindrome')
}