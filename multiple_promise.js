function all(one , two){
    return new Promise((f)=>{  
  var count = 0;
  var arr = [];
  one.then((v)=>{
      count = count + 1 ;
      arr[0] = v ;
      if(count === 2){
        f(arr); 
      }
      
  });

  two.then((v)=>{
      count = count + 1;
      arr[1] = v;
      if(count === 2){
        f(arr); 
      }
  });

  
     
  });
}
all(getPromise1(),getPromise2()).then(console.log);

