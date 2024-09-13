// this keyword

const user={
    username:"john",
    charges:"999",


welcomeMsg: function (){
    console.log(`${this.username},welcome to the website`)


}
}
//user.welcomeMsg()

 const one =function(){
    let username="demo";
    console.log(this.username)//->undefined,can't use this keyword in this way

 }
 //one()

//arrow functions -> introduced in ES6,this keyword not allowed

const arrowFunction=(num1,num2)=>{
return num1+num2

}
//console.log(arrowFunction(23,47))

//or

const addTwo=(num1,num2)=>num1+num2//OR (num1+num2)
//console.log(addTwo(23,47))