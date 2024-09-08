const user="jay";
const count= 23;

//console.log(user+count+'repositories')

console.log(`hello myself ${user} and i have ${count} repositries on github`) //more effcient way to print: concatinate strings, values

const gameName= new String('BGMI-india-new-updates')
console.log(gameName[0]) //->B
console.log(gameName.__proto__) //->{}
//console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2)) //  characters
console.log(gameName.indexOf('M')) //index/position of characters

const newGame=gameName.substring(0,3)
console.log(newGame) //->BGM

const newString=gameName.slice(-22,4) //can give -ve value 
console.log(newString)//BGMI

//Trim ->remove white spaces 
const newStringOne="    jay    "
console.log(newStringOne)

console.log(newStringOne.trim())// remove unnecessory spaces

//Replace
const url="https://github.com/jay%20sandhu"
const newurl=url.replace('%20','-')
console.log(newurl)

console.log(url.includes('jay'))//->true :ask weather a particular value is there or not

//split():->convert string to array 
console.log(gameName.split('-')) //->[ 'BGMI', 'india', 'new', 'updates' ],convert to array on the basis of '-'
