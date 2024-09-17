//for loop

for (let i = 0; i <=10 ; i++) {
 // console.log(i)
    
}
 for (let i = 0; i<10; i++) {
    const element = i;
    if(element==5){
        //console.log("print 5")
    }
   // console.log(element)
 }

 for(let i=0;i<=10;i++){
  //  console.log(`outer loop ${i}`)
 for(let j=0;j<=10;j++){
  //console.log(`inner loop ${j} and ${i}`)
 }

 }

 const myArr=["ironman","batman","superman","flash"]
 for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
   // console.log(element)
 }


 // break & continue

 for(let i=1;i<=20;i++){
    if(i==5){
       // console.log("5 detected")
        break;// break the flow and exit
    }
     //console.log(`value of i is ${i}`)
 }
 for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 detected")
        continue; // print all value 
    }
     console.log(`value of i is ${i}`)
 }