// for-of loop & for In loop

const myArr=[1,2,3,4,5];
for (const i of myArr) {
    //console.log(i)
}
const greeting="Hello World!";

for (const i of greeting) {
    //console.log(i)
}
 
//Maps //object contain unique value
const map=new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('PAK',"Pakistan")
 //console.log(map)
 for (const [key,value] of map) {
   // console.log(key,value)
 }

 //objects not iterable by for-of loop
/* const myObj={
    'game1':"NFS",
    'game2':"GTA",
    'game3':"BGMI"
 }
 for (const key of myObj) {
   console.log(key)
 }
*/

 // for-in loop

 const myObject={
    game1:"NFS",
    game2:"GTA5",
    game3:"BGMI"
 }
 for (const key in myObject) {
    //console.log(key)
  console.log(`${key}  is ${myObject[key]}`)
 }

 const pgm=['js','cpp','java','python','go','c']
 for (const key in pgm) {
    //console.log(key) ->return index
   console.log(pgm[key]) //->return value
 }

 