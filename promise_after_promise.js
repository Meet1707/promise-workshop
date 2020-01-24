var fPromise = first();

var sPromise = fPromise.then((v)=> {
    return second(v);
});
sPromise.then(console.log)