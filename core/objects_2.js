//Singleton :if object made using construction

const newUser=new Object()
newUser.id ='123abc'
newUser.name="John"
newUser.isLoggedIn=false
//console.log(newUser)
console.log(Object.keys(newUser)) //->return an array:[ 'id', 'name', 'isLoggedIn' ] 
console.log(Object.values(newUser)) //->return value of object:[ '123abc', 'John', false ]
console.log(Object.entries(newUser))//->return array inside array[[key:value]] :[ [ 'id', '123abc' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]
console.log(newUser.hasOwnProperty('isLoggedIn'))//-> true : check weather the property exist or not
const regularUser={
    email:"some@gmail.com",
    fullname:{
        firstname:"john",
        lastname:"wick"
    }
}
//console.log(regularUser.fullname.firstname)

//add two objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2):->Object.assign(taget,source) same as above and better approach 
//console.log(obj3)
const obj4={...obj1,...obj2} //spread
 //console.log(obj4)

 const users=[{
    id:1,
    email:"user@gmail.com"
 },
 {
    id:2,
    email:"user2@gmail.com"
 }]

