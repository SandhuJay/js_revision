//forEach loop -> arrays

const coding=['c','cpp','js','java','python']

// coding.forEach(function(value){
//     console.log(value)
// })

//OR

coding.forEach(element => {
   // console.log(element)
});
function printMe(item){
  //  console.log(item)
}
 coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
// console.log(item,index,arr)
 })

 const pgm=[
 {
    langName:"javascript",
    fileName:"js"
 },
 {
    langName:"python",
    fileName:"py"
 },
 {
    langName:"java",
    fileName:"java"
 }]

 pgm.forEach((item)=>{
 //console.log(`${item.langName} ->${item.fileName} `)
 })

//  const values =coding.forEach((item)=>{
// //console.log(item)
// return item
//  })
//  console.log(values)//->undefined
const values =[]
coding.forEach((item)=>{
   values.push(item)
})
console.log(values)
