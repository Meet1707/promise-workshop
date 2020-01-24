function attachTitle(val){
    return 'DR. '+ val;
}
var promise = Promise.resolve("MANHATTAN");

promise.then(
 attachTitle
).then(console.log);