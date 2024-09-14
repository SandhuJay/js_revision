
const userEmail="user@gmail.com"//got user email
//const userEmail=""// no email found

if(userEmail){
    console.log("got user email")
}else {
    console.log("no email found")
}


//falsy values
 /*
false,0,-0,BigInt 0n,"",null,undefined,NaN
*/

//truthy values
/* value inside string is truthy value
"0",'false'," ",[],{},function(){}
*/
//check array is empty
const usernewEmail=[]
if(usernewEmail.length===0){
    console.log("Array is empty")
}
//check object is empty
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
