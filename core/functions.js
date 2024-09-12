
function myName(){

console.log("jay");
console.log("sandhu")
}
//myName()


function Sum(num1,num2){
    return(num1+num2);

}
const result =Sum(45,89)
//console.log("Result:",result) 

function loginUserMSg(username){  //can give default username as username="xyz"
    if(username){ 
        return`${username} just logged in`
    }
    else{console.log("please enter username")
    }
   
}
//console.log(loginUserMSg())

//pass many values -> ...num  rest operator

function calculatePrice(...price){
    return price

}
//console.log(calculatePrice(200,300,400))//->[ 200, 300, 400 ]

// pass object in function
const user={
    username:"jay",
    price:499
}
function handleUser(anyobject){
    console.log(`username is ${anyobject.username} & price is ${anyobject.price}`)

}
//handleUser(user)
//handleUser({username:"sam",price:"569"})

const myArr=[100,200,300,400]
 function newArray(getArray){
    return getArray[2]

 }
 //console.log(newArray(myArr))
 //console.log(newArray([1,2,3,5,6]))


