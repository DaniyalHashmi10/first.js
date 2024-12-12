
// concatenation  in advance programming (string interpolation )
// use backtips
// const Name  = "DaNIYAL HASHMI "
// const repocount = 50
// console.log(`My name is : ${Name} and my repocount is :  ${repocount}`)

const gameName =  new String('hitsesh')
console.log(gameName)
// HERE STRING IS  AN OBJECT
console.log(gameName[5]) //key value pair accessing 
console.log(gameName.__proto__);

console.log(gameName.length,gameName.charAt(7) ,gameName.indexOf('e'));

const newString = gameName.substring(0,5)
console.log(newString)

const anotherstring = "sammay"
console.log(anotherstring)
console.log(anotherstring.trim())


const url = "http://daniyal.com/daniyal%20choudary"
console.log(url.replace('%20' , '_')) // replacing 
console.log(url.includes('daniyal')) //checking acailabilty
console.log(url.includes('andersom'))
console.log(url.slice(1,4)) // neglectig  fourth one it helps cuts unncessary 


const doingsplit = "you are fuuny "
console.log(doingsplit.split(' '))

