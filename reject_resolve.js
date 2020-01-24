var no  = 10;
var promise = new Promise(function(resolve,reject){
    if(no !=10)
    resolve("I FIRED");
    reject(new Error('I DID NOT FIRE'));
});
function onRejected(error){
   console.log(error.message);
}

promise.then(console.log,onRejected);
promise.catch(function(v){
    console.log(v);
});