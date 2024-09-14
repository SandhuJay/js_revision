// Conditional Statements:if - else

const isuserLoggedIn=true
if(isuserLoggedIn){
//console.log("login")
}

//operators
// <,>,<=,>=,!= , ==(check value),===(check value and type both)
if(2===2){
//console.log("yes")
}

const temperature=41;
if(temperature<50){
   // console.log("less than 50")
}else{
  //console.log("greater than 50")
}

const score =200;
if(score>100){
    const pwr='fly';
    //console.log(`Power is : ${pwr}`)
}

const balance=2000;
if(balance<1000){
    console.log("less than 1000")
} else if(balance<1500){
    console.log("balance less than 1500")
}
 else{
   // console.log("balance is 2000")
 }

 // && ->both conditions should be true,|| ->either of condition is true
 const userLogin=true
 const debitCard=true
 const loginFromGoogle =true
 const loginFromFacebook=true

 if(userLogin && debitCard){
    console.log("allowed")
 }
 if(loginFromGoogle||loginFromFacebook){
    console.log("login successfully")
 }

//Nullish Coalescing Operator(??): null undefined

let val1;
val1=5??10 
val2=null??10 
val3=undefined??15
val4=null??30??40
console.log(val1) //->5
console.log(val2)//->10
console.log(val3)//->15
console.log(val4)//->30

//Terniary Operator
//  condition ? true :false

const price=100
price >=80?console.log("greater than 80") :console.log("less than  80")

 // *** Switch ***
/* 
 switch (key) {
    case value:
        
        break;
 
    default:
        break;
 }
 */

 const month =3
 switch (month) {
    case value=1:
        console.log("January")
        
        break;//break the control flow
    case value=2:
        console.log("February")
        
        break;
    case value=3:
        console.log("March")
        
        break;
    case value=4:
        console.log("April")
        
        break;
        
 
    default:
        console.log("not defined")
        break;
 }


