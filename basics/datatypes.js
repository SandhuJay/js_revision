"use strict";//treat all js code as newer version,but now all code automatically run in latest version


/*data types
#Primitive
 1.number =>2 to power 53
 2.bigint
 3.string =>"abc"
 4.boolean =>true/false
 5.null =>standalone value : type =>object
 6.undefined :type =>undefined
 7.symbol =>used for uniqueness

 #Non-Primitive
 1.Objects
 2.Refrence
 3.Array
 4.Functions


*/
let name="user";
let age=21;
let isLoggedIn=true;

const id=Symbol('123')
const newId=Symbol('123')
console.log(id==newId)//false

console.log(typeof null)//->object
console.log(typeof undefined)//->undefined

//Non-Premitive datatypes
//array
const array=[1,2,3,4]
//object
let obj={
name:"xyz",
age:22
}
//function
const myFunction=function(){
    console.log("hey");
}
