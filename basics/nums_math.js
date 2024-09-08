const score=200;
console.log(score)

const balance=new Number(100);
console.log(balance)

//toString->convert number to string
console.log(balance.toString())

console.log(balance.toFixed(2))//->100.00

const otherNumber=123.8959
console.log(otherNumber.toPrecision(4)) // formats a number to a specified length

const hundreds=100000000;
console.log(hundreds.toLocaleString('en-IN'))//->10,00,00,000


//  **************  Math  ******************* 

  console.log(Math.abs(-4)) //-> 4:absolute value
  //Math.round()
  //Math.ceil() -> upper value
  //Math.floor() -> lower value
  //Math.min() -> minimum value
  //Math.max() -> maximum value

 //Math.random()->generate random value between 0 and 1
 console.log(Math.random());
 console.log((Math.random()*10)+1)
 console.log(Math.floor((Math.random()*10) +1));//1-9 : +1->to avoid 0


const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min) // return value greater than min=10

