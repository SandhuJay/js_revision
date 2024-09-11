

//object literals

const mySym=Symbol("key1")

const User={
    name:'jay',
    age:22,
    location:"noida",
    email:"jai.google.com",
    isLoggedIn:false,
    lastActive:["Monday","Friday"],
    [mySym]:"mykey"
}
//console.log(User.location)
//console.log(User["name"])
//console.log(User[mySym]) // return mykey & type is symbol

User.email="new@gmail.com"
 //console.log(User)
 //Object.freeze(User) // no changes/update allowed after using freeze


 User.greeting=function(){
    console.log("hello user")
 }
User.greetingTwo=function(){
    console.log(`Hello ${this.name}`) // this keyword:used to refer the value  
}

 User.greetingTwo()


