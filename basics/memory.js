/*
#Stack ->Primitive Datatypes
#Heap ->Non-Primitive Datatypes
*/

//stack ->make a copy of original value
let name="user";
let newName=name;
newName="tester"
console.log(name);
console.log(newName)

//Heap ->give reference of original value
let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne;
 userTwo.email="userTwo@gmail.com"

 console.log(userTwo.email)
 console.log(userOne.email)