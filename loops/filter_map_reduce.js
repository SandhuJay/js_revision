// *** Filter ***
const myNums=[1,2,3,4,5,6,7,8,9,10]

let newNums=myNums.filter((num)=>{
    return num>4
})

console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  
  let userBooks=books.filter((book)=>book.genre==='History')
   userBooks=books.filter((book)=>book.publish>=1995&&book.genre==='History')
  console.log(userBooks)

  // *** Map *** ->The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array

  const myNumbers=[1,2,3,4,5,6,7,8,9,10]
  const newNumbers=myNumbers.map((num)=>num+10)
  console.log(newNumbers)

  //chaining
  const numbers=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
  console.log(numbers)

  // *** Reduce *** ->reduce() method reduces an array of values down to just one value.To get the output value, it runs a reducer function on each element of the array.
//arr.reduce(callback[, initialValue])

const Numbers=[1,2,3,4,5]
const total=Numbers.reduce(function(acc,curval){
    console.log(`accumulator:${acc} and current value:${curval}`)
    return acc+curval
},0)
console.log(total)

const score=[1,2,3,4]
const totalScore=score.reduce((acc,curVal)=>(acc+curVal),0)
console.log(totalScore)

const shoppingCart=[{
    itemName:'js course',
    price:599

},
{
    itemName:'python course',
    price:899

},{
    itemName:'java course',
    price:1999

},{
    itemName:'data-science course',
    price:1999

},{
    itemName:'app development course',
    price:9999

}]
const totalPrice=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalPrice)