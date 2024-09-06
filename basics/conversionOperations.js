let score = "54"

console.log(typeof score)

 let valueInNumber =Number(score) //convert string -> number ("54"->54)
 console.log(typeof valueInNumber)

 console.log(valueInNumber)
  // output is NaN if score ="54abc", if score is null then output is 0,true->1,false->0,undefined->NaN

 let islogIn=1;
 let boolLogIn=Boolean(islogIn)
 console.log(boolLogIn)

 /*
1->true
0->false
""->false
"abc"->true
 */


//***  Operations *** 


// let value=3;
// let negvalue=-value;
// console.log(negvalue)

let str1="hello"
let str2=" world"
let str3=str1+str2;
console.log(str3)

console.log("1"+2);//output:12
console.log(1+"2");//output:12
console.log("1"+2+2);//output:122
console.log(1+2+"2");//output:32 

console.log(+true);//output:1

// let num1,num2,num3;
// num1=num3=num3=2+2
// console.log(num1)

let counter=100;
++counter;
//counter--;
console.log(counter)
