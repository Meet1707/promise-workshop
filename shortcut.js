var no = 10;

var promise = new Promise((resolve,reject)=>{
    if(no != 10)
       resolve("RESOLVE");
     reject(new Error("REJECTED"));
});
promise.then((v)=>console.log(v));
promise.catch((v)=>{console.log(v.message)});
var promise2 = Promise.reject(new Error("PROMISE 2 ERROR"));
// console.log(promise2.then());
promise2.catch((v)=>console.log(v.message));

var promise3 = Promise.resolve("PROMISE 3 RESOLVE");
promise3.then((v)=>console.log(v));
// console.log(promise2.then());
