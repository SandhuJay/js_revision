//global scope:Global variables can be accessed from anywhere in a  program
let a=300

//block scope:Variables declared inside a { } block cannot be accessed from outside the block
if(true){
    let a=10
    const b=20
   console.log("inner:",a)
}
console.log(a)
//console.log(b)

// Function Scope:Variables defined inside a function are not accessible (visible) from outside the function.
function myFunction() {
    const carName = "Volvo";   
}

function one(){
    const username="jay"
    function two(){
        const website ="website"
        console.log(username)
    }
    //console.log(website)->website not defined:can not access outside scope
    two()
}
one()


if(true){
    const username="sam"
    if(username==="sam"){
        const favSport="cricket";
        console.log(username +" loves "+ favSport)
    }
    //console.log(favSport)//favSport not defined as we cannot access outside scope
}
//console.log(username)//can not access outside scope


/*

function addone(num){
    return num+1;
}
console.log(addone(5))

//other way of decleration
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))
*/