const sentence = 'hi i am abhishek'

const answer = sentence.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

console.log(answer)