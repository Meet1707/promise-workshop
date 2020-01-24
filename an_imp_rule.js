function alwaysThrows(){
    throw new Error("OH NOES");
}
function iterate(no){
   console.log(no);
   return no = no + 1;
}
 Promise.resolve(iterate(1)).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).catch((v)=>console.log(v.message));