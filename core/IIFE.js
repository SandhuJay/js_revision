//Immediately Invoked Function Expression (IIFE) :->function that runs as soon as it is defined => To Avoid polluting the global namespace

//Named IIFE
(function Connect(){
    console.log("connected successful")
})();

//Un-Named IIFE
((myName)=>{
    console.log(`new connection ${myName}`)
})("user");



