
async function parsePromised(abc){
    return abc
    // console.log(abc);
    // return new Promise((resolve,reject)=>{
    //  try {
    //     resolve(JSON.parse(abc))
    //  } catch (error) {
    //     reject(error);
    //  }
    // })
}
parsePromised("{}").then(console.log).catch((e) => console.log(e));