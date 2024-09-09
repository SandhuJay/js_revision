//different methods of declerations
const mArr=[0,1,2,3,4,5];
//console.log(myArr[0]);
const myHero=["Batman","IronMan","Saktiman"]

const arr=new Array(1,2,3,4,5)

// Different Methods in Array

arr.push(6) // add element at end in array
arr.pop() //remove last element

arr.unshift(0) // add element at start
arr.shift()// remove first elememt
//console.log(arr)

console.log(arr.includes(5))//true-> check weather element is in array or not
console.log(arr.indexOf(4)) //-> give index of given element

const newArr=arr.join()// bind and conveer to string
console.log(arr) //->[ 1, 2, 3, 4, 5 ]
console.log(newArr)//->1,2,3,4,5

 const myArr=[0,1,2,3,4,5]
//slice , splice
console.log("A",myArr);//->A [ 0, 1, 2, 3, 4, 5 ]
const nwAr=myArr.slice(1,3) 
console.log(nwAr)//->[ 1, 2 ]
console.log("B",myArr)//->B [ 0, 1, 2, 3, 4, 5 ]
const ar2=myArr.splice(1,3)// manipulate original array
console.log("C",myArr)//->C [ 0, 4, 5 ]
console.log(ar2)//->[ 1, 2, 3 ]


const marvelHeros=["Ironaman","spiderman",'Thor']
const dcHeros=["Batman","flash","Superman"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros[3][1])->flash

const allHeros= marvelHeros.concat(dcHeros)
 console.log(allHeros)

 const newHeros=[...marvelHeros,...dcHeros] // spread the values:->[ 'Ironaman', 'spiderman', 'Thor', 'Batman', 'flash', 'Superman' ]
 console.log(newHeros)

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArr=anotherArr.flat(Infinity) 
 console.log(realArr) //->[1,2,3,4,5,6,7,6,7,4,5]


 console.log(Array.isArray("jay"))// return: false
 console.log(Array.from("jay"))//->[ 'j', 'a', 'y' ]

console.log(Array.from({name :"jay"}))//return->[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //->[100,200,300]

//array makes shallow copy->it is a copy whose properties share the same refrences as those of source object from which the copy made

