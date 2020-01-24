//function hh(){
function onReject(){
    return new Promise(
        function (fulfill, reject) {
        setTimeout(function(){
            reject(new Error("REJECTED!"));
        },300);
      }
      );
}
onReject().then(console.log).catch(function(v){
   console.log(v.message);
});