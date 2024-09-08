//Dates ->object 

let myDate=new Date()
//console.log(myDate)
//console.log(myDate.toString())

console.log(myDate.toDateString())//->Sun Sep 08 2024

// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toUTCString())

let newDate=new Date(2024,0,1)
console.log(newDate.toDateString())//->Mon Jan 01 2024

 let createdDate=new Date("2024-09-09")
 console.log(createdDate.toLocaleString())//->9/9/2024, 12:00:00 AM

 //Time Stamp
 let myTimeStamp =Date.now()
 console.log(myTimeStamp)// return value in miliseconds
 console.log(createdDate.getTime())
 //convert to seconds
 console.log(Math.floor(Date.now()/1000));

 let newDateCreated=new Date()
 console.log(newDateCreated.getMonth())// give month from 0-11



 let nd=newDateCreated.toLocaleString('default',{
    weekday:"long"
    
 })
 console.log(nd)


